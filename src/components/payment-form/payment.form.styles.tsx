import styled from 'styled-components';

import Button from '../button/button.component';

export const PaymentHeading = styled.div`
  text-align: center;
  font-family: Audiowide;
  letter-spacing: 4px;
  font-weight: 800;
  color: #174c12;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const PaymentFormContainer = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 50px;
  padding-bottom: 50px;
`;

export const FormContainer = styled.form`
  height: 400px;
  width: calc(300px + 10vw);
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
 
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const PaymentButton = styled(Button)`
  border-radius: 5px;
`;
