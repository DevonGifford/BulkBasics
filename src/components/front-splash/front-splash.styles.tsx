import styled from 'styled-components';

import Button from '../button/button.component';

/* --------------------------------------------------------
    CONTAINERS
----------------------------------------------------------*/ 

export const FrontSplashContainer = styled.div`
    margin: 10px 2px 15px;
    padding-bottom: 5px;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto; 
    gap: 14px 10px; 
    grid-template-areas: 
    ". ."
    ". ."
    ". ."; 

@media (max-width: 768px) {
    display: flex;
    flex-direction: column ;
}
`;

export const HeadingContainer = styled.div`

  grid-column: 0 / 1;
  background-color: #809e64d6;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 20px;

    p {
        text-align: center;
        font-size: 105%;
        
        margin-left: 1px;
        margin-top: 10px;
        margin-bottom: 4px;

        color: #52683f;
        font-weight: bold;
    }
`;




export const BigHeadingContainer = styled.div`
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    border: 2px solid #628045;
    background-color: #41743b;

    padding-left: 18px;
    padding-right: 18px;
    align-content:center;
        
        
p {
    margin-left: 1px;
    margin-top: 10px;
    margin-bottom: 4px;
    
    font-weight: bold;
    
    font-size: 115%;

    text-align: center;
    color: #ffffff;
}


Button {
    margin-top: auto;
    color: white;
    background-color: #2d4d2a;
    border: 3px solid #2d4d2a;

    &:hover {
        transform: translate(0%, -5%);
        background-color: #2d4d2a;
        color: white;
        box-shadow: 5px 5px 4px #2d4d2a;
        border: 3px solid #2d4d2a;
     
    }
}

`;


export const SmallHeading = styled.div`
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;

    
    text-align: center;
    text-transform: uppercase;
    font-family: Audiowide;
    font-weight: 900;
    font-size: calc(10px + 1vw);
    letter-spacing: 2.5px;
    
    color: #ffffff;
    border-bottom: 4px solid white;

`;

export const StyledParagraph = styled.div`
  /* Shared styles for all <p> tags */
    font-size: calc(12px + 0.5vw);
    
    
    margin-left: 1px;
    margin-top: 10px;
    margin-bottom: 7px;

    font-weight: bold;


    text-align: center;
    color: #f4f4f4;
`;



/* --------------------------------------------------------
    BUTTONS & LOGO'S
----------------------------------------------------------*/ 

export const ButtonLogosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    padding-top: 40px;
    padding-bottom: 40px;

`;


// 🎯🎯🎯🎯🎯🎯
export const LogoStyling =styled.div`
    cursor: pointer;    

    &:hover {
        transform: translate(0%, -10%); 
    }
`;


export const ButtonContainer =styled.div`
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;




/* --------------------------------------------------------
    SALE BANNER
----------------------------------------------------------*/ 
export const SaleBanner = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border: 1px none #66804e;
  background-color: #99b87c94;
  opacity: 0.7;
  justify-content: center;
  align-content: spacearound;
`;


export const SaleHeading = styled(StyledParagraph)`
    color: #000000;
    font-family: Fira Code;
    font-size: calc(0.5rem + 1vw);
    font-weight: 700;
    text-align: center;

    @media (max-width: 640px) {
        margin-left: 20px;
        margin-right: 20px;    
    }
`;


/* --------------------------------------------------------
    SLOGAN
----------------------------------------------------------*/ 
export const SloganContainer = styled.div`
    grid-column: span 2;
    
    height: auto;
    padding-top: 3px;
    padding-bottom: 3px;
    
    font-family: Audiowide;
    font-weight: bold;
    font-size: calc(10px + 1vw);
    
    text-align: center;
    text-transform: uppercase;
    color: #3b4b2c;
`;

