import React, { Fragment } from "react"
import { useNavigate } from 'react-router-dom'
import { EmblaCarousel } from "../carousel/carousel.component";

import { ReactComponent as RecycleLogo } from '../../assets/recycle.svg'
import { ReactComponent as UkraineLogo } from '../../assets/ukraine.svg'
import { ReactComponent as EarthLogo } from '../../assets/earth.svg'

import { 
    FrontSplashContainer, 
    SmallHeading, 
    HeadingContainer, 
    BigHeadingContainer, 
    ButtonLogosContainer,
    LogoStyling,
    ButtonContainer,
    SloganContainer,
    SaleBanner,
    SaleHeading,
    SalePromo,
} from "./front-splash.styles";

import Button from '../button/button.component';


const OPTIONS = {}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const FrontSplash = () => {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate('/about');
    

  return (
    <Fragment>

        <SaleBanner>

            <SaleHeading>
                Unleash Your Potential with our Opening Week 20% Discount  
            </SaleHeading>
        

        </SaleBanner>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        
        <FrontSplashContainer>
            
            {/* <BigHeadingContainer>
                <h2>Unlock Your Potential with Our Essentials Men's Collection</h2>
            </BigHeadingContainer> */}

            <HeadingContainer>
                <SmallHeading>Elevate Your Performance</SmallHeading>
                <p>
                We believe that achieving greatness starts with self-improvement. We are your partner on the journey to reaching your full potential. 
                </p>
                <p>
                We understand that every step, every workout, and every choice you make contributes to your personal growth - let our gear be your ally on the path to greatness.
                </p>
            </HeadingContainer>
            

            <BigHeadingContainer>
                
                <SmallHeading>
                    Discover the Difference:
                </SmallHeading>
                
                <p>
                    We're more than just stylish apparel. We're proud to be eco-friendly, supporting recycling efforts and giving back to important causes. 
                </p>
                <p>
                    Join us in making a positive impact on the planet while looking and feeling your best. Together, we can make a difference.
                </p>

                
                <ButtonLogosContainer>

                    <LogoStyling onClick={onNavigateHandler}>
                        <RecycleLogo/>
                    </LogoStyling>


                    <LogoStyling onClick={onNavigateHandler}>
                        <EarthLogo/>
                    </LogoStyling>


                    <LogoStyling onClick={onNavigateHandler}>
                        <UkraineLogo/>
                    </LogoStyling>

                </ButtonLogosContainer>


                <ButtonContainer>
                    <Button onClick={onNavigateHandler}>
                        Learn More
                    </Button>
                </ButtonContainer>

            </BigHeadingContainer>


            <HeadingContainer> 
                <SmallHeading>Join the Movement </SmallHeading>
                <p>
                    A community of individuals who strive for greatness. Together, we support and encourage each other to go beyond our comfort zones and unlock our true potential. 
                </p>
                <p>
                     Experience the transformative power of our Essentials Collection
                </p>

            </HeadingContainer>



            <SloganContainer> 
                - When it comes to gym and sports clothes, we provide what you need – nothing more & nothing less.
            </SloganContainer>




        </FrontSplashContainer>
    </Fragment>
  );
};

export default FrontSplash;