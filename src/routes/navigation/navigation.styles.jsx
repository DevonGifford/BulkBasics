import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 40%;
  width: 70px;
  padding-bottom: 50px;
  margin-left: 15px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: black;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    color: #000000;
    font-weight: 500;
`;