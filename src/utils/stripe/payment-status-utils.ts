import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStripe } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cart/cart.action';

//🎯🎯🎯

const PaymentStatus = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const [message, setMessage] = useState<any | null>(null);
 
  const dispatch = useDispatch();
  


  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to your return_url by Stripe.js
    const clientSecret: any = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({paymentIntent}: any) => {
        switch (paymentIntent.status) {
          case 'succeeded':
            dispatch(clearCart());
            setMessage(`Thank you! Your purchase for ${paymentIntent.amount / 100} € has successfully been processed. 💪`);
            break;

          case 'processing':
            setMessage("Payment processing. We'll update you when payment is received. 🤓");
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            navigate(-1);
            setMessage('Payment failed. Please try another payment method. 😅');
            break;

          default:
            navigate(-1);
            setMessage('Something went wrong. 🙁');
            break;
        }
      });
  }, [stripe, navigate, dispatch]); //dispatch for clearCart 🎯🎯🎯

  return message;
};

export default PaymentStatus;