import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 10px 50px 15px 30px;
  
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
    border: 2px solid #2a00e6;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: black;
  margin-right: 20px;
  gap: 5px;
`;

export const NavLink = styled(Link)`
  padding: 15px 15px;
  cursor: pointer;
  color: #628045;
  font-weight: 500;
  border: 2px solid #ffffff ;
  &:hover {
    border: 2px solid #99b87c;
    box-shadow: 4px 8px #99b87c;
    transition-delay:0.1s;
  }
    
`;



