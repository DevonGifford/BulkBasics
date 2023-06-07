import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../Components/cart-icon/cart-icon.component';
import CartDropdown from '../../Components/cart-dropdown/cart-dropdown.component';


import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import Logo from '../../assets/Logo.png'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  MyLogo,
} from './navigation.styles';





const Navigation = () => {
  // Get the current user - get CONTEXT
  const { currentUser } = useContext(UserContext);
  const { isCartOpen }= useContext(CartContext);
  


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
        
        {isCartOpen && <CartDropdown />}
      
      </NavigationContainer>
      <Outlet />



    </Fragment>
  );
};


export default Navigation;