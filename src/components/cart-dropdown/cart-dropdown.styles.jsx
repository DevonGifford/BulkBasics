import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 320px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  text-align: center;
`;

export const CartItems = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ - Hide ScrollBar */
  scrollbar-width: none;  /* Firefox - Hide ScrollBar */
`;