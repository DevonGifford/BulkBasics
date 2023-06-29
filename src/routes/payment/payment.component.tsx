import { Fragment, useState } from 'react';
import LeftTop from '../../components/checkout-halves/left-top/left.component';
import RightBottom from '../../components/checkout-halves/right-bottom/right.component';
import Footer from '../../components/footer/footer.component';

import {
  ComponentWrapper,
  FooterContainer,
  LeftSide,
  PaymentWrapper,
  RightSide,
  DropdownButton,
  RightSideConetent,
  OrderSummaryContainer,
  RightSideHeading,
  OrderSummarySection,
  OrderSummaryText,
  OrderSummaryAmount,
  OrderSummaryTextTotal,
  OrderSummaryAmountTotal,
  DottedLine,
} from './payment.styles';

import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Payment = (): JSX.Element => {
    const cartTotal = useSelector(selectCartTotal);
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = (): void => {
        console.log('toggle toggleMenu:', menuVisible);
        setMenuVisible(!menuVisible);
    };

  return (
    <Fragment>
      
        <ComponentWrapper>
            
            <PaymentWrapper menuVisible={menuVisible}>

                {/* aka. BOTTOM */}
                <LeftSide>
                    <LeftTop />
                </LeftSide>

                {/* aka. TOP */}
                <RightSide>

                    <RightSideConetent>                    

                        <OrderSummaryContainer>
                            <RightSideHeading>Cart Total</RightSideHeading>
                            <p>💪 <em>Your first order's shipping cost is on us!</em> </p>

                            <OrderSummarySection>
                                <OrderSummaryText>Sub-Total:</OrderSummaryText>
                                <OrderSummaryAmount>{cartTotal} €</OrderSummaryAmount>
                            </OrderSummarySection>


                            <OrderSummarySection>
                                <OrderSummaryText>Shipping:</OrderSummaryText>
                                <OrderSummaryAmount>0 €</OrderSummaryAmount>
                            </OrderSummarySection>

                            <DottedLine />

                            <OrderSummarySection>
                                <OrderSummaryTextTotal>TOTAL:</OrderSummaryTextTotal>
                                <OrderSummaryAmountTotal>{cartTotal} €</OrderSummaryAmountTotal>
                            </OrderSummarySection>

                            <br/><br/>

                        </OrderSummaryContainer>
                                                         
                        <DropdownButton 
                            onClick={toggleMenu}
                        >
                            <b>{menuVisible? '▲ Hide' : '▼ Show'}</b> order summary 
                        </DropdownButton>

                    </RightSideConetent>


                    {menuVisible && (
                        <RightBottom />
                    )}

                    <PaymentForm />
                    
                </RightSide>
                
            </PaymentWrapper>
        </ComponentWrapper>

        <FooterContainer>
            <Footer />
        </FooterContainer>
    </Fragment>
  );
};

export default Payment;
