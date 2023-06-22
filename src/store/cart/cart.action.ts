import { CategoryItem } from '../categories/categories.types';
import { CART_ACTION_TYPES, CartItem } from './cart.types';

import { 
  createAction,
  ActionWithPayload,
  withMatcher, 
} from '../../utils/reducer/reducer.utils';


/*------------------------------------
HELPER FUNCTIONS 
------------------------------------*/

// Adding single Item to the Cart - (empty cart create cart) 
const addCartItem = (
  cartItems: CartItem[], 
  productToAdd: CategoryItem
  ): CartItem[] => {

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
const removeCartItem = (
  cartItems: CartItem[], 
  cartItemToRemove: CategoryItem
  ): CartItem[] => {

// find cart item to remove
const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
);;

//check if this is the last item - if so remove entire item from cart
if (existingCartItem && existingCartItem.quantity === 1) {
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
const clearCartItem = (
  cartItems: CartItem[], 
  cartItemToClear: CategoryItem
  ): CartItem[] => 
cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);




/*------------------------------------
ACTION CREATORS
------------------------------------*/
//Setting the Cart UI Open/Close
export type SetCartIsOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export const setIsCartOpen = withMatcher((boolean: boolean) => 
  createAction ( CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean )
);



//Adding Removing and Clearing Cart Items
export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
  createAction ( CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

//  Adding items to the cart
export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
  ) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

//  Removing items from the cart
export const removeItemToCart = (
  cartItems: CartItem[], 
  cartItemToRemove: CartItem,
  ) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};

//Clearing items from the cart
export const clearItemFromCart = (
  cartItems: CartItem[], 
  cartItemToClear: CartItem, 
  ) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
};
