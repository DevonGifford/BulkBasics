import { Fragment } from 'react';
import Footer from '../../components/footer/footer.component';

import PaymentStatus from '../../utils/stripe/payment-status-utils';
import { stripePromise } from '../../utils/stripe/stripe.utils';
import { Elements } from '@stripe/react-stripe-js';


import { 
    PageContainer, 
    ThankYouMessage,
    BoxContainer,
    BoxDivWinter,
    BoxDivSummer,
    ThankYouMessageContainer, 
    IconBoxes,
    BoxText,
    BigBoxText,
    SmallBoxText,
} from './payment-confirmation.styles';

import { 
    FaTruckMoving, 
    FaSearch,
    FaHome,
    FaJournalWhills,
  } from 'react-icons/fa'

import { TbWorldWww } from 'react-icons/tb';
import { SiGithub } from 'react-icons/si';

import { QuickLink, StyledIcon } from '../../components/directory/directory.styles';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
    const navigate = useNavigate();
    const NavigateAboutHandler = () => navigate('/about');
    const NavigateHomeHandler = () => navigate('/');
    
    const NavigateSummerHandler = () => navigate('/shop/summer');
    const NavigateWinterHandler = () => navigate('/shop/winter');

  return (
    <Fragment>
        <PageContainer>

            <IconBoxes>
                <QuickLink onClick={NavigateAboutHandler}>
                    <StyledIcon>
                        <FaSearch />
                    </StyledIcon>
                    <h4>Live Tracking</h4>
                    <p>Follow your order every step of the way</p>
                </QuickLink>


                <QuickLink onClick={NavigateHomeHandler}>
                    <StyledIcon>
                        <FaHome />
                    </StyledIcon>
                    <h4>Back Home</h4>
                    <p>Return to the home page</p>
                </QuickLink>


                <QuickLink onClick={NavigateAboutHandler}>
                    <StyledIcon>
                        <FaTruckMoving />
                    </StyledIcon>
                    <h4>Overnight Shipping</h4>
                    <p>Check availability for your location</p>
                </QuickLink>
            </IconBoxes>


            <ThankYouMessageContainer>
                <ThankYouMessage>
                    <Elements stripe={stripePromise}>                       
                        <PaymentStatus />
                    </Elements>
                </ThankYouMessage>
            </ThankYouMessageContainer>



            <BoxContainer>
                <BoxDivWinter onClick={NavigateWinterHandler}>
                    <BoxText>
                        <SmallBoxText> Shop the </SmallBoxText>
                        <BigBoxText> Winter </BigBoxText>
                        <SmallBoxText> SALE </SmallBoxText>
                    </BoxText>                    
                </BoxDivWinter>

                <BoxDivSummer onClick={NavigateSummerHandler}>
                    <BoxText>
                        <SmallBoxText> Shop the </SmallBoxText>
                        <BigBoxText> Summer </BigBoxText>
                        <SmallBoxText> SALE </SmallBoxText>
                    </BoxText>
                </BoxDivSummer>
            </BoxContainer>




            <IconBoxes>

                <QuickLink>
                <a 
                  href="https://github.com/DevonGifford/Ecommerce_Showcase#-development-journey" 
                  target='_blank'
                >
                    <StyledIcon>
                        <FaJournalWhills />
                    </StyledIcon>
                    <h4>About this Project</h4>
                    <p>See the development journal</p>
                </a>
                </QuickLink>
                
                {/* LINK TO WEBSITE 🎯 */}
                <QuickLink onClick={NavigateAboutHandler}>
                    <StyledIcon>
                        <TbWorldWww />
                    </StyledIcon>
                    <h4>Portfolo Website</h4>
                    <p>Check out my personal website</p>
                </QuickLink>


                <QuickLink >
                <a 
                  href="https://github.com/DevonGifford" 
                  target='_blank'
                >
                    <StyledIcon>
                        <SiGithub />
                    </StyledIcon>
                    <h4>GitHub Portfolio</h4>
                    <p>Link to my GitHub Profile</p>
                </a>
                </QuickLink>

            </IconBoxes>
            



        </PageContainer>

        <Footer />

    </Fragment>
  )
};

export default Thankyou;