import { AnyAction } from "redux";

import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { setCartItems, setIsCartOpen, clearCart} from "./cart.action";


export type CartState = {
    isCartOpen: boolean;
    cartItems: CartItem[];
}

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};


export const cartReducer = (
    state = CART_INITIAL_STATE, 
    action: AnyAction
): CartState => {

    if(setIsCartOpen.match(action)){
        return {
            ...state,
            isCartOpen: action.payload
        };
    }

    if (setCartItems.match(action)){
        return {
            ...state,
            cartItems: action.payload
        };
    }

    if (action.type === CART_ACTION_TYPES.SET_CLEAR_CART) {
        return CART_INITIAL_STATE;
      }

    return state;
};


