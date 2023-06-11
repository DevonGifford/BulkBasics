/*

import { createContext,  useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';



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
  
//Creating Initial state for the UseReducer Hook 
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

// Setting the ACTIONS for the reducer
const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

// The Reducer Function 
const cartReducer = (state, action ) => {
  const { type, payload } = action;
  //console.log('pinned dispatched', action);

  switch(type) {

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error (`unhandled type of ${type} in cartReducer ( Cart.Context File )`)
  }
}



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});



export const CartProvider = ({ children }) => {
  const [ { cartItems, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer, 
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 
      0
    );

    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    const payload = {
      cartItems: newCartItems,
      cartTotal:  newCartTotal,
      cartCount: newCartCount,
    };

    //importing from createAction from utils -> reducer
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));

  };


  //  Adding items to the cart
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);

    updateCartItemsReducer(newCartItems);
  };
  
  //  Removing items from the cart
  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  
  //Clearing items from the cart
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  //Setting the Cart UI Open/Close
  const setIsCartOpen = (bool) => {
    dispatch ( createAction ( CART_ACTION_TYPES.SET_IS_CART_OPEN, bool ))
  };


  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

*/