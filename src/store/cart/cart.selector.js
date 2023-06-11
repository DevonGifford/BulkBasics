import { createSelector } from "reselect";



/* ---------------------------------
    BASIC INPUT SELECTOR
-------------------------------------*/ 

const selectCartReducer = (state) => {
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
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price, 
        0
    )
);


export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);


