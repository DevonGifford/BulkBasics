import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { BsArrowBarDown } from 'react-icons/bs';


export const CategoryPreviewContainer = styled.div`
  width: 95%;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;


export const TitleContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Title = styled.div`
  font-size: calc(1rem + 1vw);
  font-family: Audiowide;
  color: #6b8554;

  margin-bottom: 10px;
  
  cursor: pointer;
  

  :hover{
    transform: translate(0%, -5%);
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 50px;

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


export const StyledIconLink = styled(Link)`
  font-size: calc(1rem + 1vw);
  text-align: center;
  font-family: Inter;
  color: #6b8554;

  :hover{
    transform: translate(0%, +7%);
    
  }

  @media (min-width: 1040px){
    font-size: 1.5rem;
  }
`;

export const SeeMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
`;




export const IconImage = styled(BsArrowBarDown)`
  font-size: 30px;
`;


