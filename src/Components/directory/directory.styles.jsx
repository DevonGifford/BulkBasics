import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse ; ;
  }

`;