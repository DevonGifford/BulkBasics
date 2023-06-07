import styled from 'styled-components';

import {
    BaseButton,
  } from '../button/button.styles';




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


// export const BigHeadingContainer = styled.div`
//   grid-column-start: 1;
//   grid-column-end: span 2;
//   height: auto;
//   text-align: center;
//   align-items: center;
//   justify-content: center;
//   border:4px solid #628045;
//   background-color: #99b87c;
//   opacity: 0.7;

//   font-weight: bold;
//   font-size: 16px;
//   color: #ffffff;
//   text-transform: uppercase;
// `;

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


export const SmallHeading = styled.div`
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;

    
    text-align: center;
    text-transform: uppercase;
    font-family: Audiowide;
    font-weight: 900;
    font-size: 24px;
    letter-spacing: 2.5px;
    
    color: #ffffff;
    border-bottom: 4px solid white;

`;

export const SloganContainer = styled.div`
    grid-column: span 2;
    
    height: auto;
    padding-top: 3px;
    padding-bottom: 3px;
    
    font-family: Audiowide;
    font-weight: bold;
    font-size: 22px;
    
    text-align: center;
    text-transform: uppercase;
    color: #3b4b2c;




    
    /* border:4px solid #628045; */
    /* background-color: #99b87c; */
    /* opacity: 0.7; */
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


${BaseButton} {
    margin-top: auto;
    color: white;
    background-color: #2d4d2a;
    border: 3px solid #2d4d2a;

    &:hover {
        transform: translate(0%, -5%);
        box-shadow: 5px 5px 4px #000000;
     
    }
}

`;

export const ButtonLogosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    padding-top: 30px;
    padding-bottom: 30px;

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




export const SaleBanner = styled.div`
  width: 100%;
  height: 50px;
  border: 3px none #66804e;
  background-color: #99b87c94;
  opacity: 0.7;
  position: relative;

  @media (max-width: 640px) {
    height: 70px;
  }
`;

const StyledParagraph = styled.p`
  /* Shared styles for all <p> tags */
  font-size: 13px;
  position: absolute;
  transform: translate(-50%, -50%);
  text-transform: uppercase ;
  margin: 0;
`;


export const SaleHeading = styled(StyledParagraph)`
    color: #000000;
    font-family: Fira Code;
    font-size: 100%;
    font-weight: 700;
    text-align: center;
    top: 50%;
    left: 50%;

`;

export const SalePromo = styled(StyledParagraph)`
    color: #000000;
    font-weight: 600;
    text-align: center;
    top: 66%;
    left: 50%;
        
`;
