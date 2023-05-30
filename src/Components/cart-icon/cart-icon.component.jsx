import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems, addCartItem} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    const totalNumberItemsFunc = ( cartItems ) => {
      const l= cartItems.length;
      const cartTotalItems = [];
      
      for (let i = 0; i < l ; i++) {
        cartTotalItems.push(cartItems[i].quantity)
      };
      return cartTotalItems.reduce((a,b) => a + b, 0);
    };

    return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalNumberItemsFunc(cartItems)}</span>
      
    </div>
  );
};

export default CartIcon;
