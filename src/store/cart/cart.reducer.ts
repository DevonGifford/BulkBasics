import { AnyAction } from "redux";

import { CartItem } from "./cart.types";
import { setCartItems, setIsCartOpen } from "./cart.action";


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

    return state;
};


