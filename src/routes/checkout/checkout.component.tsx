// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';

import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useNavigate } from 'react-router';
import Footer from '../../components/footer/footer.component';
//import PaymentForm from '../../components/payment-form/payment-form.component';

import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import {
  CheckOutBox,
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  TotalNumber,
  TotalText,
} from './checkout.styles';

import { paymentIntent } from './../../utils/stripe/payment-intent-utils';


const Checkout = () => {

  // const { cartItems, cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const navigate = useNavigate();
  
  //THE OLD WAY
  //const onNavigateHandler = () => navigate('/checkout/payment')

  const checkout = async () => {
    try {
      const client_secret: unknown = await paymentIntent(
        '/.netlify/functions/create-payment-intent', cartTotal
        )
      console.log('this is my client_secret in the checkout component: ',client_secret);
      
      navigate('/checkout/payment', {
        state: {
        client_secret
      }
    })
    }catch (error) {
      console.log(error);
      
      alert('An error has occurred; try again later!')
    }
  };


  return (
    <Fragment>
      <CheckoutContainer>

        <CheckoutHeader>

          <HeaderBlock>
            <span>Products</span>
          </HeaderBlock>

          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>

          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>

        </CheckoutHeader>


        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}


        <CheckOutBox>

          <Total>Sub-Total:  </Total>

          <TotalNumber>
            <b>{(cartTotal === 0 )? 'Your cart is empty 😢' : `${cartTotal}€`}</b> 
            
          </TotalNumber>

          <TotalText>
            Shipping, taxes, and discount codes calculated at checkout
          </TotalText>


          <Button
            buttonType = {BUTTON_TYPE_CLASSES.inverted}
            type = 'button' 
            onClick={checkout}
          >
            CHECKOUT
          </Button>

        </CheckOutBox>
        

      </CheckoutContainer>
      <Footer />

    </Fragment>
  );
};

export default Checkout;
