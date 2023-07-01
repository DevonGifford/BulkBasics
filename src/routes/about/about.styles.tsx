import styled from "styled-components";


export const BiggestHeading = styled.div`
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 800;
    font-size:calc(30px + 1.1vw);

    text-transform: uppercase;
    font-family: Audiowide;
    color: whitesmoke;

    padding-bottom: 10px;
`;

export const BigHeading = styled.div`
    text-align: center;
    border: 2px solid #3f6d3b;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
    font-size:calc(30px + 1vw);

    margin-top: 25px;
    padding-top: 15px;
    padding-bottom: 15px;

    padding-left: 10px;
    padding-right: 10px;

    
    font-family: Audiowide;
    color: #3f6d3b;
    
`;

export const SmallHeading = styled.div`
    text-align: center;
  
    font-family: 'Times New Roman', Times, serif;
    font-weight: 800;
    font-size:calc(20px + 0.6vw);

    font-family: Audiowide;
    color: #3f6d3b;
    

    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 0px;
    padding-bottom: 0px;

    padding-left: 5px;
    padding-right: 5px;
`;

export const TextSection = styled.div`
    text-align: center;

    margin: 10px 10% 10px 10%;

    padding-top: 2px;
    padding-bottom: 10px;
`;


/*-----------------------------------------------------
    BIG HEADINGS
-------------------------------------------------------*/ 

export const HeadingSplash = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #809e64d6;
    
    padding-top: 20px;
    padding-bottom: 40px;
`;


/*-----------------------------------------------------
ABOUT THE PROJECT 
-------------------------------------------------------*/ 

export const AboutProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
        
    padding-top: 35px;
    padding-bottom: 35px;

    color: #334e30;

`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    text-align: center;
    
    gap: 10px;
    padding: 20px;

    @media (max-width: 400px) {
        width: 100px;

        Button {
            font-size: 8px;
        }
        
    }
`;


export const IconContainer = styled.div`
    margin: 10px 50px 10px 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    justify-content: center;

    @media screen {
        gap: 13px;
        font-size: x-small;
    }
    
`;

export const StyledIcon = styled.div`
    font-size: calc(1rem + 1.5vw);
    padding-top: 20px;
    color: #334e30;

    cursor: pointer;

    &:hover {
        transform: translate(0%, -10%); 
    }
`;

export const StyledWebandMailIcon = styled.div`
    font-size: 2.8rem;
    padding-top: 20px;

    cursor: pointer;

    background-color: #809e64d6;
    border: 2px solid black;
    border-radius: 10px;

    color: #334e30;

    &:hover {
        transform: translate(0%, -10%);
        box-shadow: 10px 10px 8px #888888;
    }
`;

/*-----------------------------------------------------
ABOUT ME SECTION
-------------------------------------------------------*/

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding-top: 35px;
    padding-bottom: 35px;
`;

export const AboutMeContent = styled.div`
    display: flex;
    flex-wrap: none;
    margin: 10px 180px 10px 180px;
    gap: 20px;

    
@media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

`;

export const ImageContainer = styled.img`
    border-radius: 50%;
    min-width: 150px;
    max-width: 300px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 30px;
    border: 5px solid #334e30;
    
`


/*-----------------------------------------------------
    LINKS TO MY SOCIAL MEDIA  
-------------------------------------------------------*/
export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    color: #334e30;

    padding-top: 20px;
    padding-bottom: 35px;
`;

export const MailEmailContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 50px;

    margin-left: 40px;
    margin-right: 40px;

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;

export const PersonalWebsite = styled.div`
    color: #334e30;
    width: 500px;

    @media (max-width: 450px) {
        width: 250px;
    }
`;

export const PersonalEmail = styled.div`
    color: #334e30;
    width: 500px;

    @media (max-width: 450px) {
        width: 250px;
    }
`;

/*-----------------------------------------------------
    FOOTER SECTION
-------------------------------------------------------*/

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    background-color: #628045;

    padding-top: 20px;
    padding-bottom: 35px;

    font-family: Audiowide;
    color: whitesmoke;
    font-weight: 400;
`;


