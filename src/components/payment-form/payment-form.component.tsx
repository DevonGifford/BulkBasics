import { useState, FormEvent } from 'react';

import { useSelector } from 'react-redux';

import { StripeCardElement, PaymentMethod } from '@stripe/stripe-js';

import { 
  PaymentElement, 
  useStripe, 
  useElements, 
  CardElement, 
} from '@stripe/react-stripe-js';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { 
    PaymentFormContainer, 
    FormContainer, 
    PaymentButton,
    ButtonContainer,
    PaymentHeading,
} from "./payment.form.styles";

//-----------------------------------------------------------------------------------


const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;


//-----------------------------------------------------------------------------------

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);


    /* ------------------------------------------------------------------------
      ERROR HANDLER  
    ------------------------------------------------------------------------*/  
    const handleError = (error: Error) => {
      setIsProcessingPayment(false);
      setErrorMessage(error.message);
    }

    /* ------------------------------------------------------------------------
      PAYMENT HANDLER  
    ------------------------------------------------------------------------*/  
    const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      //primarily ensure hooks are loaded in
      if (!stripe || !elements) {
        return;
      }


      //Getting the Card Details 
      const paymentElement = elements.getElement(PaymentElement) as StripeCardElement;
      console.log('payementEL: ',paymentElement);

      if (!paymentElement) {
        // Card Element is not available, handle the error
        console.log('Payment Element not found');
        return;
      }

      //Loading animation - [start]
      setIsProcessingPayment(true);




      // const { error, paymentMethod } = await stripe.createPaymentMethod({
      //   type: 'card',
      //   card: paymentElement,
      // });
  
      // if (error) {
      //   // Handle error creating payment method.
      //   console.log(error);
      //   setIsProcessingPayment(false);
      //   return ;
      // }


      // console.log(paymentMethod);











      // // Trigger form validation and wallet collection
      // const {error: submitError} = await elements.submit();
      // if (submitError) {
      //   console.log('LIVE TEST - submit error');
      //   const error: Error = new Error(submitError.message);
      //   handleError(error);
      //   return;
      // }


      // //PAYMENT INTENT - Create the SetupIntent and obtain clientSecret 
      // const response = await fetch ('/.netlify/functions/create-payment-intent', {
      //     method: 'post',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ 
      //       amount: amount * 100,
      //       currency: 'eur',
      //       automatic_payment_methods: {
      //         enabled: true,
      //       },
      //     }),
      // })
      //  .then((res) => res.json());        

      // // CLIENT SECRET  -  for convenient naming sake 
      // //const { client_secret: { clientSecret } } = await response.json();
      // const clientSecret = response.paymentIntent.client_secret;
      // console.log('LIVE TESTING - client secret: ', clientSecret)


      // 🙈🙈🙈
      // // Confirm the PaymentIntent using the details collected by the Payment Element
      // const {error} = await stripe.confirmPayment({
      //   elements,
      //   clientSecret,
      //   confirmParams: {
      //     return_url: 'http://localhost:8888',
      //   },
      //   // Uncomment below if you only want redirect for redirect-based payments
      //   // redirect: "if_required",
      // });

      //TEST 🧪🧪🧪

      // const PaymentElement = elements.create('payment');
      // console.log("Payment Element: ", PaymentElement);

      // const card = elements.getElement(CardNumberElement)
      // console.log('payWithCard', card)

      

      // const SubmitPaymentToStripe = await stripe.confirmPayment({
      //   elements,
      //   clientSecret,
      //   billing_details: {
      //       name: currentUser ? currentUser.displayName : 'Guest',
      //   },
      //   confirmParams: {
      //     return_url: 'http://localhost:8888',
      //   },
      // });

      // const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: {
      //     card: PaymentElement,
      //     billing_details: {
      //       name: currentUser ? currentUser.displayName : 'Guest',
      //     },
      //   },
      // });


      //Loading animation - [COMPLETE]
      setIsProcessingPayment(false);
      console.log('LIVE TESTING -  payment handler completed');
      

    };


  return (
    <PaymentFormContainer>

      
      <FormContainer onSubmit={paymentHandler}>
        
        <PaymentHeading>Process Payment:</PaymentHeading>

        <PaymentElement />
        
        <ButtonContainer>
          <PaymentButton
            type='submit'
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            isLoading={isProcessingPayment}
          >
            Pay Now
          </PaymentButton>
        </ButtonContainer>

      
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm;