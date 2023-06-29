import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  padding-top: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    font-size: calc(0.4rem + 0.5vw);
    opacity: 0.7;
    flex-wrap: nowrap;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media (max-width: 800px) {
    button {
      font-size: calc(0.7rem + 0.9vw);
      font-weight: 800;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: calc(0.7rem + 0.5vw);
  color: #4e613c;
  padding-bottom: 15px;

`;

export const Name = styled.span`
  width: 80%;
`;

export const Price = styled.span`
  width: 15%;
`;