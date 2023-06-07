import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 95%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 50px 15px 30px;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 18%;

  &:last-child {
    width: 8%;
  }

  &:first-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;