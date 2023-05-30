import React from "react";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import './checkout-item.styles.scss';



const CheckoutItem =( { cartItem }) => {

    //functions needed from the CartContext
    const {
        clearItemFromCart,
        addItemToCart, 
        removeItemToCart,
    } = useContext(CartContext);

    //details from the cartItem object
    const {
        imageUrl, 
        name, 
        quantity, 
        price
    } = cartItem;

    //Handlers to pass into Return 
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);



    return (
        <div className='checkout-item-container'>

            {/* Image */}
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            {/* Description */}
            <span className='name'> {name} </span>
            
            {/* Quantitiy */}
            <span className='quantity'>
                
                {/* arrows to decrease */}
                <div className='arrow' onClick={removeItemHandler}>
                &#10094;
                </div>

                {/* Current Quantity */}
                <span className='value'>{quantity}</span>

                {/* arrows to increase */}
                <div className='arrow' onClick={addItemHandler}>
                &#10095;
                </div>

            </span>

            {/* Price (cost x quantity) */}
            <span className='price'> {price}</span>
            
            {/* Remove Button */}
            <div className='remove-button' onClick={clearItemHandler}>
            &#10005;
            </div>



        </div>
    );
};

export default CheckoutItem