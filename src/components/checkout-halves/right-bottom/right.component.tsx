import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../../store/cart/cart.selector'

import PaymentForm from '../../payment-form/payment-form.component'
import CartItem from '../../cart-item/cart-item.component'

import { 
    RightSideContent,
    CheckBox,
    BoxImageContainer, 
    BoxImage,
    BoxText,
    DevCheckBox,
    CartReviewContainer,
    // CartReview,
 } from './right.styles'

import { AiFillSafetyCertificate } from 'react-icons/ai';
import { MdCurrencyExchange } from 'react-icons/md';
import { GiSewingNeedle } from 'react-icons/gi';




const RightBottom = () => {
    const cartItems = useSelector(selectCartItems);

  return (
    <Fragment>
        <RightSideContent>

            <CartReviewContainer>
                {cartItems.length ? (
                cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                <div>
                    Your cart is empty <br></br>
                    😢
                </div>
                )}
            </CartReviewContainer>

                
            

            {/* IMAGE BOX */}
            <CheckBox>

                <BoxImageContainer>
                    <BoxImage><AiFillSafetyCertificate /></BoxImage>
                    <BoxText>365 DAY QUALITY GUARANTEE</BoxText>
                </BoxImageContainer>

                <BoxImageContainer>
                    <BoxImage><MdCurrencyExchange /></BoxImage>
                    <BoxText>FREE 30 DAY EXCHANGES</BoxText>
                </BoxImageContainer>

                <BoxImageContainer>
                    <BoxImage><GiSewingNeedle /></BoxImage>
                    <BoxText>20€ STORE CREDIT FOR ALTERATIONS</BoxText>
                </BoxImageContainer>


            </CheckBox>

            {/* DEVELOPERS CHECKBOX */}
            <DevCheckBox>
                <p>
                    Hey, your friendly developer here! 👋
                    <br/><br/>
                    Just a heads up you can use this test card:
                    <br/><br/>
                    &nbsp;&nbsp;<em>Card Number:</em> &nbsp; &nbsp; 4242 4242 4242 4242<br/>
                    &nbsp;&nbsp;<em>Expirey Data:</em> &nbsp; &nbsp; 12/25 <br/>
                    &nbsp;&nbsp;<em>CVC:</em> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 424 <br/>
                    <br/><br/>
                    Furthermore, to test the Payment Process: 
                    <br/><br/>
                    <li><em>you do not need to complete any of the Shipping Details</em></li>
                    <li><em>you do not need to be signed in either</em></li>
                </p>
            </DevCheckBox>
            



        </RightSideContent>

    </Fragment>
  )
}

export default RightBottom