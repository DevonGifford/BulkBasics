import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse ;
  }

`;



export const QuickLinkContainer = styled.div`
  margin: 10px 2px 10px 2px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer; 
  gap: 6px;
  
  `;

export const QuickLink = styled.div`
  justify-content: center;
  align-content: center;
  align-items: center; 
  flex-grow: 1;
  flex-basis: 0;

  min-width: 170px;
  
  min-height: 200px;
  max-height: 200px;

  padding: 30px 10px 30px 10px;
  border:4px double #628045;
  
  h4{
    justify-content: center;
    align-content: center;
    align-items: center; 
    text-align: center;
  }

  p{
    text-align: center;
  }

  &:hover {
      color: #628045;
      border:4px solid #80a75d;

    }

`;

export const StyledIcon = styled.div`
  font-size: 2rem;
  line-height: 1.75rem; 
  justify-content: center;
  align-content: center;
  align-items: center; 
  border-radius: 9999px; 
  
`;


