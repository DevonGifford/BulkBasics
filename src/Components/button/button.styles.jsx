import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #3f6d3b;
  color: white;
  font-size: 11px;

  &:hover {
    background-color: #809e64d6;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #88a86bab;
  color: black;
  font-size: 18px;
  font-weight: 900;
  border: 3px solid #5c7a40;

  &:hover {
    background-color: #586d44ca;
    color: white;
    border: 3px solid #5c7a40;
  }
`;