import React from "react";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
  } from './checkout-item.styles';



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
        <CheckoutItemContainer>

            {/* Image */}
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>

            {/* Description */}
            <BaseSpan> {name} </BaseSpan>
            
            {/* Quantitiy */}
            <Quantity>
                {/* arrows to decrease */}
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                
                {/* Current Quantity */}
                <Value>{quantity}</Value>
                
                {/* arrows to increase */}
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>          
            </Quantity>
            
            {/* Price (cost x quantity) */}
            <BaseSpan> {price} €</BaseSpan>
            
            {/* Remove Button */}
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>

        </CheckoutItemContainer>
    );
};

export default CheckoutItem