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
  padding-left: 10px;

  svg {
    filter: invert(47%) sepia(6%) saturate(2952%) hue-rotate(48deg) brightness(95%) contrast(87%);
    width: 38px;
    height: 38px;
  }

  &:hover {
    svg {
      width: 50px;
      height: 50px;
    }

  }

`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 13px;
  color: #628045;
  font-weight: bold;
  bottom: 13px;
  
`;