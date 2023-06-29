import { FC } from "react";
import { CartItemProps } from '../cart-item/cart-item.component';

import { useDispatch, useSelector } from "react-redux";
import { clearItemFromCart, addItemToCart, removeItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";


import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
  } from './checkout-item.styles';


const CheckoutItem: FC<CartItemProps> =({ cartItem }) => {

//Details from the cartItem object
    const {
        imageUrl, 
        name, 
        quantity, 
        price
    } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);


//Handlers to pass into Return 
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems, cartItem));



    return (
        <CheckoutItemContainer>

            {/* Image */}
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>

            {/* Description */}
            <BaseSpan> {name} </BaseSpan>
            
            
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