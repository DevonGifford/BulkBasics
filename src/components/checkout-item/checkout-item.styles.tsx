import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 50px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 15px 15px 15px;
  font-size: 20px;
  align-items: center;

`;

export const ImageContainer = styled.div`
  width: 20%;
  margin-right: 5px;
  
  img {
    width: 80%;
    border-radius: 30px;
    margin-left: 10px;
  }
`;

export const BaseSpan = styled.span`
  width: 35%;
  font-size: calc(10px + 0.5vw);
  
  justify-content: center;
  text-align: center;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
 
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  font-size: calc(10px + 1vw);
  cursor: pointer;
`;