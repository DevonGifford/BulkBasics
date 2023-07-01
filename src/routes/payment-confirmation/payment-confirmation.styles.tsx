import styled from "styled-components";
import { BackgroundImage } from "../../components/directory-item/directory-item.styles";


export const PageContainer = styled.div`
padding-bottom: 30px;
    
`;

/*-------------------------------------------------
        THANK YOU MESSAGE SECTION
-------------------------------------------------*/ 
export const ThankYouMessageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #148f1440;

    height: 40vh;

    @media (max-width: 768px) {
        height: 25vh;
  }
   
`;

export const ThankYouMessage = styled.div`
    font-family: Audiowide;
    font-size: calc(1rem + 1.7vw);
    
    text-align: center;
    justify-self: center;

    color: #044e04fb;

    margin-left: 20px;
    margin-right: 20px;
   
`;



/*-------------------------------------------------
        BOX SECTION
-------------------------------------------------*/ 
export const BoxContainer = styled.div`
  /* width: 100%; */
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin: 20px 20px 20px 20px;

  @media (max-width: 768px) {
    flex-direction: column ;
  }
`;

export const BoxText = styled.div`
    color: #f5f5f5be;
    text-align: center;
    font-weight: 700;
    font-family: Audowide;

    &:hover {
        color: white
    }
`

export const BigBoxText = styled.div`
    font-size: 5rem;
`;

export const SmallBoxText = styled.div`
    font-size: 2rem;
`;

export const BoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    
    justify-content: center;
    align-content: center;
    align-items: center; 
    
    border: 4px solid #044e04;
    
    min-height: 400px;
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    &:hover {
        cursor: pointer;


        ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
    
`;

export const BoxDivSummer = styled(BoxDiv)`
    background-image: url("https://images.bewakoof.com/web/workout-outfits-bewakoof-blog-3-1610945777.jpg");
`;

export const BoxDivWinter = styled(BoxDiv)`
    background-image: url('https://cdn.shopify.com/s/files/1/0103/4013/9070/products/image_4a3f40f4-5fbb-4508-babb-1f937881c1a7_1200x1200.jpg?v=1559007685');
`;



/*-------------------------------------------------
        STYLED LINKS
-------------------------------------------------*/ 
export const IconBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  
  cursor: pointer; 
  
  margin: 20px 20px 20px 20px;
  gap: 8px; 
`