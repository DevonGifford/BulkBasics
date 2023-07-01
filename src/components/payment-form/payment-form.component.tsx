import { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  PaymentElement, 
  useStripe, 
  useElements, 
} from '@stripe/react-stripe-js';

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

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>();


    /* PAYMENT HANDLER  
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
          return_url: 'https://bulk-basics.netlify.app/checkout/payment/payment-confirmation',
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

      //Loading animation - [COMPLETE]      
      setIsProcessingPayment(false);
      //console.log('🚀LIVE TESTING -  payment handler completed');

      //Catching errors 
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