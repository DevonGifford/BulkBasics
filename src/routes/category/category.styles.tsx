import styled from 'styled-components';

export const PageWrapper = styled.div`
  /* margin-left: 15px;
  margin-right: 15px; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;


export const CategoryWrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

export const Title = styled.div`
  font-size: calc(1rem + 1vw);
  font-family: Audiowide;
  color: #6b8554;

  margin-bottom: 10px;
  
  text-align: center;

`;


export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 50px;
  padding-top: 15px;
  padding-bottom: 15px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    column-gap: 10px;
    row-gap: 10px;
  }
`;

export const Slogan = styled.div`
    height: auto;
    padding-top: 70px;
    padding-bottom: 50px;
    
    font-family: Audiowide;
    font-weight: bold;
    font-size: calc(10px + 1vw);
    
    text-align: center;
    text-transform: uppercase;
    color: #3b4b2c;
`;

export const FooterWrapper = styled.div`
  margin-top: auto;
`;
