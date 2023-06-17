import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";



/* ---------------------------------
    BASIC INPUT SELECTOR
-------------------------------------*/ 

const selectCartReducer = (state): CartState => {
    return state.cart;
}


/* ---------------------------------
    MEMOISE
-------------------------------------*/

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);


export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems): number => 
        cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price, 
        0
    )
);


export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems): number =>
        cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);


