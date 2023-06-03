import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-bottom: 8px;

  svg {
    width: 38px;
    height: 38px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: bold;
  bottom: 13px;
`;