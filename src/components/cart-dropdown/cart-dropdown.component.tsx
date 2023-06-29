import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  //memoise the function - no change
  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout');
  }, []);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>
            Your cart is empty <br></br>
            😢
          </EmptyMessage>
        )}
      </CartItems>
      <Button 
        onClick={ () => { 
          goToCheckoutHandler(); 
          toggleIsCartOpen(); 
        }}
      >
        View cart
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;