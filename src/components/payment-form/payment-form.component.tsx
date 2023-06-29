import { useState, FormEvent } from 'react';

import { useSelector } from 'react-redux';

import { StripeCardElement, PaymentMethod, StripePaymentElement } from '@stripe/stripe-js';

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
    const [errorMessage, setErrorMessage] = useState<string | undefined>();


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


      //Loading animation - [start]
      setIsProcessingPayment(true);


      //Using the 
      const {error} = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // redirect to route thankyou - need to create a route for this 🎯
          return_url: 'http://localhost:8888',
          payment_method_data: {
            billing_details: {
              name: currentUser? currentUser.displayName : 'guest',
              email: currentUser? currentUser.email : 'guest@gmail.com',
              phone: '7873679090',
              address: {
                line1: 'Calle de Muller, 1',
                city: 'Madrid',
                state: 'Madrid',
                postal_code: '28039',
                country: 'ESP'
              }
            }
          }
        },
      });




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


      // //🙈🙈🙈
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

      // //TEST 🧪🧪🧪

      // // const PaymentElement = elements.create('payment');
      // // console.log("Payment Element: ", PaymentElement);

      // // const card = elements.getElement(CardNumberElement)
      // // console.log('payWithCard', card)

      

      // // const SubmitPaymentToStripe = await stripe.confirmPayment({
      // //   elements,
      // //   clientSecret,
      // //   billing_details: {
      // //       name: currentUser ? currentUser.displayName : 'Guest',
      // //   },
      // //   confirmParams: {
      // //     return_url: 'http://localhost:8888',
      // //   },
      // // });

      // // const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      // //   payment_method: {
      // //     card: PaymentElement,
      // //     billing_details: {
      // //       name: currentUser ? currentUser.displayName : 'Guest',
      // //     },
      // //   },
      // // });


      //Loading animation - [COMPLETE]


      setIsProcessingPayment(false);
      console.log('LIVE TESTING -  payment handler completed');

      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    
      

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
};

export default PaymentForm;