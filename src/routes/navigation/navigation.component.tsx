import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutStart } from '../../store/user/user.action';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import Logo from '../../assets/logo.png'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  MyLogo,
} from './navigation.styles';





const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  
  const signOutUser = () => dispatch(signOutStart());

  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    //console.log('Toggle fired');
    setNavToggle(!navToggle);
  };


  return (
    <Fragment>

      <NavigationContainer>

        <LogoContainer to='/'>
          <MyLogo src={Logo} alt='logo1' />
        </LogoContainer>
        
        <NavLinks>
        
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />

        </NavLinks>
{/* 
        <MobileNavLinks onClick={handleNavToggle}>
          <Hamburger />

        </MobileNavLinks> */}
        
        {isCartOpen && <CartDropdown />}
      
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};


export default Navigation;