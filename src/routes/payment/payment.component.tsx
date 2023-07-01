import { Fragment, useState, useEffect } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';

//------------------------------------
import { stripePromise } from '../../utils/stripe/stripe.utils';
import { Elements } from '@stripe/react-stripe-js';


//------------------------------------

export type StripeTypes = {
    clientSecret: string;
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: string
      }
    }
  };

interface PaymentProps {
    secret: string; // Define the 'secret' prop type
  }

//------------------------------------

const Payment = (): JSX.Element => {
    const cartTotal = useSelector(selectCartTotal);
    const [menuVisible, setMenuVisible] = useState(false);

    
    const params = useLocation();
    const secret: any = params.state.client_secret;
    const navigate = useNavigate();
    // console.log('this is my client_Secret in the payment-component :', secret);
    // console.log(typeof secret);
    
    
    //------------------------------------
    const toggleMenu = (): void => {
        //console.log('toggle toggleMenu:', menuVisible);
        setMenuVisible(!menuVisible);
    };


    //-----------------------------------------------------
    useEffect(() => {
        if (!stripePromise || !secret) {
          navigate('/')
        }
      }, [secret, navigate])
  
      const options: StripeTypes = {
        // passing in the client secret
        clientSecret: secret,
        // customizable with appearance API
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#008b8b'
          }
        },
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

                  {secret && 
                      <Elements stripe={stripePromise} options={options}>
                          <PaymentForm  />
                      </Elements>
                  }
                    
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
