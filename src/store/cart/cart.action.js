import CART_ACTION_TYPES from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';


/*------------------------------------
HELPER FUNCTIONS 
------------------------------------*/


// Adding single Item to the Cart - (empty cart create cart) 
const addCartItem = (cartItems, productToAdd) => {

    //find if cartItems contaiins productToAdd
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    
    //If found, increment quantity 
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    //If it's a new item - Return new array with modified cartItems / new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

//Removing Single Item from the Cart
const removeCartItem = (cartItems, cartItemToRemove) => {

// find cart item to remove
const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
);;

//check if this is the last item - if so remove entire item from cart
if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
}

//More than 1 in cart, return back cartitems with matching cart item with reduced quantity
return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
);

};

// Remove entire Item from the cart
const clearCartItem = (cartItems, cartItemToClear) => 
cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);





/*------------------------------------
ACTION CREATORS
------------------------------------*/


//Setting the Cart UI Open/Close
export const setIsCartOpen = (boolean) => {
    return createAction ( CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean );
};


//  Adding items to the cart
export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

};


//  Removing items from the cart
export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

};


//Clearing items from the cart
export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

};
