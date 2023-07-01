import styled from "styled-components";


export const FormContainer = styled.div`
  margin: 0 auto;

`;

export const FormTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-family: Audiowide;
    color: #174c12;
    font-weight: 900;
    font-size: 24px;
    letter-spacing: 2.5px;

    justify-content: center;
    align-items: center;

    text-decoration: underline dotted #174c12;
`;


export const TwoOnALine = styled.div`
  display: flex;
  gap: 10px;
`;

export const FormInput = styled.input`
  padding: 15px;
  width: calc(200px + 20vw);
  border: 0.5px solid black;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const FormInput2 = styled.input`
  padding: 15px;
  width: calc(95px + 10vw);
  border: 0.5px solid black;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const FormButton = styled.button`
  padding: 15px;
  background-color: #174c12;
  width: calc(200px + 20vw);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2a8d21;
  }
`;

/* ---------------------------------------------------
    checkbox SAVE LATER
------------------------------------------------------*/

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
  width: 20px;
  height: 20px;

  /* Custom checkbox appearance */
  appearance: none;
  border: 2px solid #999;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  /* Custom checkbox checked state */
  &:checked {
    background-color: #2196f3;
    border-color: #2196f3;
  }

  /* Custom checkbox checked state appearance */
  &:checked::before {
    content: '✔';
    margin-left: 3px;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    color: white;
    text-align: center;
    line-height: 18px;
  }
`;

export const CheckboxLabel = styled.span``;

/* ---------------------------------------------------
    checkbox = SIGN-UP FOR XYZ
------------------------------------------------------*/

export const SignUpBoxes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    gap: 20px
`;


export const SignUpContainer = styled.label`
    display: flex;
    font-size: 50px;
    width: calc(200px + 20vw);
    height: fit-content;
    border: 2px solid black;
    border-radius: 5px;
    padding-top: 10px;
    background-color: #1f4e1f4a;
    padding-left: 5px;
`;

export const SignUpBoxText = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 12px;
`

export const SignUpBoxHeading = styled.div`
    text-decoration: underline;
    font-family: Fira Code;
    padding-bottom: 5px;
    font-size: medium;
    font-weight: 900;
    color: green;
      
`;

export const SignUpBoxContent = styled.div`
    color: #367d33;
    font-size: small;
    font-weight: 700;
    padding-bottom: 10px;
`;



























export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px
`;