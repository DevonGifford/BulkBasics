import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MdMenu } from 'react-icons/md'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 10px 50px 15px 30px;

  @media (max-width: 600px) {
   width : 90%;
  }
  
`;


export const LogoContainer = styled(Link)`
  height: 40%;
  width: 120px;
  padding-top: 6px;
  padding-bottom: 40px;
  margin-left: 0px;
`;


export const MyLogo = styled.img`
  width: 250px;
  height: auto;
  border: 2px solid #99b87c;
  &:hover,
  &:focus {
    border: 2px solid #99b87c;
    box-shadow: 4px 8px #99b87c;
    transition-delay:0.1s;
  }
  &:active {
    border: 2px solid #657953;
  }

  @media screen and (max-width: 550px) {
    width: 180px;
    
    margin-top: 10px;

  }

  @media screen and (max-width: 400px) {
    width: 130px;

  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  color: black;
  margin-right: 20px;
  gap: 5px;

  /* OI OI 🍎🍎🍎🍎🍎 */
  /* display: none; */

  @media screen and (max-width: 550px) {
    gap: 1px;

  }
`;

export const NavLink = styled(Link)`
  padding: 15px 15px;
  cursor: pointer;
  color: #628045;
  font-weight: 800;
  border: 1px none #ffffff;

  &:hover {
    border: 2px solid #99b87c;
    box-shadow: 4px 8px #99b87c;
    transition-delay:0.1s;
  }
  
  @media screen and (max-width: 550px) {
    font-size: small;
    padding: 10px 5px;
  }

  @media screen and (max-width: 400px) {
    font-size: x-small;
  }
`;

// export const MobileNavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   margin-right: 40px;
  
//   /* OI OI 🍎🍎🍎🍎🍎 */
//   display: normal;

// `;

// export const Hamburger = styled(MdMenu)`
//   color: #7a9562;
//   font-size: 250%;
//   cursor: pointer;
// `;



