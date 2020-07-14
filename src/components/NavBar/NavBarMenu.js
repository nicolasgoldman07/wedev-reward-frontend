import React from 'react';

import NavBarButton from './NavBarButton';
import LogOutButton from './LogOutButton';

import './navbar.scss';

const NavBarMenu = ({ isLoggedIn, currentUser }) => {
  return (
    <div className='navbar-right'>
      {isLoggedIn && (
        <ul className='navbar-right-list'>
          <NavBarButton link='/home' class='home' content='Home' />
          <LogOutButton />
        </ul>
      )}
      {!isLoggedIn && (
        <ul className='navbar-right-list'>
          <NavBarButton link='/auth/signin' class='signin' content='Sign In' />
          <NavBarButton link='/auth/signup' class='signup' content='Sign Up' />
        </ul>
      )}
    </div>
  );
};

export default NavBarMenu;
