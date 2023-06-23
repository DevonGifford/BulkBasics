import { useState, FormEvent } from 'react';
import { StripeCardElement } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { 
    PaymentFormContainer, 
    FormContainer, 
    PaymentButton,
} from "./payment.form.styles"


const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        //primariy ensure hooks are loaded in
        if (!stripe || !elements) {
          return;
        }

        //Loading animation - [start]
        setIsProcessingPayment(true);


        //Call to Stripe API through netlify functions 
        const response = await fetch ('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100})
        }).then(res => {
            return res.json();
        });
        //console.log('RESPONSE RECIEVED - full response:',response);
        

        //For convenient naming sake 
        const clientSecret = response.paymentIntent.client_secret
        //console.log('CLIENT SECRET: ',clientSecret);

        //Creating Type Guard check for card
        const cardDetails = elements.getElement(CardElement);

        if (!ifValidCardElement(cardDetails)) return;


        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: cardDetails,
              billing_details: {
                name: currentUser ? currentUser.displayName : 'Anonymous Guest',
              },
            },
          });
      
        //Loading animation - [complete]
        setIsProcessingPayment(false);
      


        //Success or Failure alert
          if (paymentResult.error) {
            alert(paymentResult.error.message);
          } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
              alert('Payment Successful!');
            }
          }

    };


  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm;
