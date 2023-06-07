import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { GrMore } from 'react-icons/gr';


export const CategoryPreviewContainer = styled.div`
  width: 95%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;


export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Title = styled(Link)`
  font-size: 34px;
  font-family: Audiowide;
  color: #6b8554;

  margin-bottom: 10px;
  
  cursor: pointer;
  

  :hover{
    transform: translate(0%, -5%);
  }
`;

export const SeeMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
`;

export const StyledIconLink = styled(Link)`
  font-size: 2.5rem;

  :hover{
    transform: translate(0%, -7%);
    color: red;
  }
`;


export const StyledGrMore = styled(GrMore)`

`;


export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;