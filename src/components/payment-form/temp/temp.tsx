// import { useState, FormEvent } from 'react';
// import { useSelector } from 'react-redux';

// import { StripeCardElement, loadStripe } from '@stripe/stripe-js';
// import { 
//   PaymentElement, 
//   LinkAuthenticationElement,
//   useStripe, 
//   useElements, 
//   CardElement, 
//   Elements, 
// } from '@stripe/react-stripe-js';

// import { selectCartTotal } from '../../store/cart/cart.selector';
// import { selectCurrentUser } from '../../store/user/user.selector';

// import { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import { 
//     PaymentFormContainer, 
//     FormContainer, 
//     PaymentButton,
// } from "./payment.form.styles";

// //-----------------------------------------------------------------------------------


// const ifValidCardElement = (
//   card: StripeCardElement | null
// ): card is StripeCardElement => card !== null;


// //-----------------------------------------------------------------------------------

// const PaymentForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const amount = useSelector(selectCartTotal);
//     const currentUser = useSelector(selectCurrentUser);
//     const [message, setMessage] = useState(null);
//     const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
//     const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
        
//         //primarily ensure hooks are loaded in
//         if (!stripe || !elements) {
//           return;
//         }
//         //Loading animation - [start]
//         setIsProcessingPayment(true);

//         //PAYMENT INTENT - Call to Stripe API through netlify functions 
//         const response = await fetch ('/.netlify/functions/create-payment-intent', {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ amount: amount * 100})
//         }).then(res => {
//             return res.json();
//         });        

    


//         //For convenient naming sake 
//         const clientSecret = response.paymentIntent.client_secret
//         //Creating Type Guard check for card
//         const cardDetails = elements.getElement(CardElement);

//         const appearance = { theme: 'stripe',};
//         const options = {
//           clientSecret,
//           appearance,
//         };





//         if (!ifValidCardElement(cardDetails)) return;

//         const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//               card: cardDetails,
//               billing_details: {
//                 name: currentUser ? currentUser.displayName : 'Anonymous Guest',
//               },
//             },
//           });
      
//         //Loading animation - [complete]
//         setIsProcessingPayment(false);

//         //Success or Failure alert
//           if (paymentResult.error) {
//             alert(paymentResult.error.message);
//           } else {
//             if (paymentResult.paymentIntent.status === 'succeeded') {
//               alert('Payment Successful!');
//             }
//           }

//     };


//   return (
//     <PaymentFormContainer>

//       <FormContainer onSubmit={paymentHandler}>
      
//         <h2>Credit Card Payment:</h2>
        
//         <CardElement />
        
        
//         <PaymentButton
//           buttonType={BUTTON_TYPE_CLASSES.inverted}
//           isLoading={isProcessingPayment}
//         >
//           Pay Now
//         </PaymentButton>
      
//       </FormContainer>
//     </PaymentFormContainer>
//   )
// }

// export default PaymentForm;


/* ----------------------------------------------------------------------------------------
        VERSION 2
--------------------------------------------------------------------------------------*/

// import { useState, FormEvent } from 'react';
// import { useSelector } from 'react-redux';

// import { StripeCardElement, loadStripe } from '@stripe/stripe-js';
// import { 
//   PaymentElement, 
//   LinkAuthenticationElement,
//   useStripe, 
//   useElements, 
//   CardElement, 
//   Elements, 
// } from '@stripe/react-stripe-js';

// import { selectCartTotal } from '../../store/cart/cart.selector';
// import { selectCurrentUser } from '../../store/user/user.selector';

// import { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import { 
//     PaymentFormContainer, 
//     FormContainer, 
//     PaymentButton,
//     ButtonContainer,
//     PaymentHeading,
// } from "./payment.form.styles";
// import { error } from 'console';

// //-----------------------------------------------------------------------------------


// const ifValidCardElement = (
//   card: StripeCardElement | null
// ): card is StripeCardElement => card !== null;


// //-----------------------------------------------------------------------------------

// const PaymentForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const amount = useSelector(selectCartTotal);
//     const currentUser = useSelector(selectCurrentUser);
//     const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
//     const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
      
//       //primarily ensure hooks are loaded in
//       if (!stripe || !elements) {
//         return;
//       }

//       //Loading animation - [start]
//       setIsProcessingPayment(true);

//       // Trigger form validation and wallet collection 🧪🧪🧪
//       const {error: submitError} = await elements.submit();
//       if (submitError) {
//         console.log('we are getting this error', submitError)
//         return;
//       }

//       //PAYMENT INTENT - Call to Stripe API through netlify functions 
//       const response = await fetch ('/.netlify/functions/create-payment-intent', {
//           method: 'post',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ amount: amount * 100})
//       }).then(res => {
//           return res.json();
//       });        

//       //For convenient naming sake 
//       const clientSecret = response.paymentIntent.client_secret

//       // Use the clientSecret and Elements instance to confirm the setup 🧪🧪🧪
//       // const {error} = await stripe.confirmPayment({
//       //   elements,
//       //   clientSecret,
//       //   confirmParams: {
//       //     return_url: 'localhost:8888',
//       //   },
//       //   // Uncomment below if you only want redirect for redirect-based payments
//       //   // redirect: "if_required",
//       // });
      
//       //Creating Type Guard check for card
//       const cardDetails = elements.getElement(CardElement);


//       if (!ifValidCardElement(cardDetails)) return;

//       const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//           payment_method: {
//             card: cardDetails,
//             billing_details: {
//               name: currentUser ? currentUser.displayName : 'Anonymous Guest',
//             },
//           },
//       });
    
//       //Loading animation - [complete]
//       setIsProcessingPayment(false);

//       //Success or Failure alert
//       if (paymentResult.error) {
//         alert(paymentResult.error.message);
//       } else {
//         if (paymentResult.paymentIntent.status === 'succeeded') {
//           alert('Payment Successful!');
//         }
//       }

//     };


//   return (
//     <PaymentFormContainer>

      
//       <FormContainer onSubmit={paymentHandler}>
        
//         <PaymentHeading>Process Payment:</PaymentHeading>

//         <PaymentElement options={{layout: "tabs"}}/>        
        
//         <ButtonContainer>
//           <PaymentButton
//             buttonType={BUTTON_TYPE_CLASSES.inverted}
//             isLoading={isProcessingPayment}
//           >
//             Pay Now
//           </PaymentButton>
//         </ButtonContainer>

      
//       </FormContainer>
//     </PaymentFormContainer>
//   )
// }

// export default PaymentForm;
