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


const Checkout = () => {

  // const { cartItems, cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate('/checkout/payment')


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
            onClick={onNavigateHandler}
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
