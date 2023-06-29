import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 95%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 10px 10px;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 0px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  
  text-align: center;
  border-bottom: 2px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  font-family: 'Audiowide';
  text-align: center;
  text-transform: capitalize;
  font-size: calc(10px + 0.5vw);
  width: 18%;

  &:last-child {
    width: calc(30% + 3vw);
  }

  &:first-child {
    width: calc(40% + 3vw);
  }
`;


export const CheckOutBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #174c12;
  border-radius: 2px;
  align-items: center;
  justify-self: center;
  
  padding: 20px 20px 40px 20px;
  margin: 50px 20px 20px 20px;
`;


export const Total = styled.span`
  font-family: 'Audiowide';
  color: #174c12;
  font-size: calc(20px + 1vw);
`;

export const TotalNumber = styled.p`
  font-family: 'Audiowide';
  font-weight: 500;
  color: #174c12;

  font-size: calc(15px + 1vw);
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TotalText = styled.p`
  font-family: Fira Code;
  font-size: calc(8px + 0.5vw);
  color: #174c12;
  text-align: center;
  padding-bottom: 20px;
`;
