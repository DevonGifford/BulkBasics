import styled from 'styled-components';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: left;
  `;

export const TitleWrapper = styled.h2`
  font-size: 150%;
  margin: 10px 0 15px;
  font-family: Audiowide;
  color: #6b8554;
  letter-spacing: 2px;
  text-align: center;

  @media (max-width: 400px){
    font-size: 100%;
    font-weight: 900px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;

  p {
    font-size: 20px;
    text-align: center;
    margin: 0;
    padding-top: 5px;
  }
`;


export const GoogleIcon = styled(FcGoogle)`
  font-size: 32px;
  text-align: center;
  align-self: center;
`

export const GitHubIcon = styled(FaGithub)`
  font-size: 32px;
  text-align: center;
  align-self: center;
`

export const FacebookIcon = styled(FaFacebook)`
  font-size: 32px;
  text-align: center;
  align-self: center;
`