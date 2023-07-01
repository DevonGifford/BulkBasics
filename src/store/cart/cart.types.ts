import { CategoryItem } from "../categories/categories.types";


export enum CART_ACTION_TYPES {
    SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    SET_CART_COUNT = 'cart/SET_CART_COUNT',
    SET_CART_TOTAL= 'cart/SET_CART_TOTAL',
    SET_CLEAR_CART='cart/SET_CLEAR_CART'
};


export type CartItem = CategoryItem &  {
    quantity: number;
}



// const CART_ACTION_TYPES = {
//     SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
//     SET_CART_ITEMS: 'SET_CART_ITEMS',
// };

// export default CART_ACTION_TYPES;