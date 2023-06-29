import styled from 'styled-components';


export const RightSideContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;
`;

export const RightSideHeading = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-family: Audiowide;
    color: #174c12;
    font-weight: 900;
    font-size: 24px;
    letter-spacing: 2.5px;

    text-decoration: underline dotted #174c12;    
`;

/*    cart review summary
-----------------------------------------------*/ 
export const CartReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-self: center;
`;


/*    cart items
-----------------------------------------------*/ 
export const CartReview = styled.div`
    
`;



/*    BOXES - DEV BOX
-----------------------------------------------*/ 
export const DevCheckBox = styled.div`
    align-self: center;
    width: calc(250px + 25vw);
    max-width: 600px;
    height: fit-content;
    border: 2px solid red;
    margin: 20px 10px 20px 10px;
    padding: 20px 20px 20px 20px; 

    background-color: #e1787863;

    font-size: large;
    font-weight: 600;

    @media (max-width: 400px) {
        font-size: small;
        color: blue;
    }
`;

/*    BOXES - IMAGE BOXES
-----------------------------------------------*/ 

export const CheckBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

    align-self: center;
    width: fit-content;
    height: fit-content;

    border: 2px solid black;
    margin: 20px 20px 20px 20px;
    padding: 20px 40px 20px 40px; 

    background-color: #8cba645c;

    @media (max-width: 650px){
        display: none;
    }

`;

export const BoxImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 10px;
    width: calc(150px + 1vw);
    
    align-content: center;
    align-items: center;
    justify-content: center;

`;

export const BoxImage = styled.div`
    font-size: calc(2rem + 1vw);
`;

export const BoxText = styled.div`
    font-size: small;
    text-align: center;
`;
