import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  /* @media (max-width: 768px) {
    background-position: top ;
  } */

`;

export const Body = styled.div`
  height: 60px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border:4px solid whitesmoke;
  background-color: #837e7ed1;
  opacity: 0.7;
  position: absolute;
  
  

  h2 {
    font-weight: bold;
    margin: 0 2px 0;
    font-size: 25px;
    color: #ffffff;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }

`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 400px;
  flex: auto ;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #628045;
  margin: 2px 10px 15px;
  overflow: hidden;
  
  @media (max-width: 900px) {
    height: 300px;
  }
  
  @media (max-width: 768px) {
    height: 160px;
  }


  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.9;
    }
  }

`;