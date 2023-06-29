import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';

export let clientSecret: string | undefined; // Exported variable

const PaymentIntentProvider = () => {
  const amount = useSelector(selectCartTotal);

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100,
          currency: 'eur',
          automatic_payment_methods: {
            enabled: true,
          },
        }),
      });
      const data = await response.json();
      clientSecret = data.paymentIntent.client_secret;
      console.log('LIVE TESTING - client secret: ', clientSecret);
    };

    fetchPaymentIntent();
  }, [amount]);

  // Render the rest of your component here

  return null; // Or any other JSX if needed
};

export default PaymentIntentProvider;
