import React from 'react';

import { useQuery } from '@apollo/react-hooks';

import './navbar.scss';
import NavBarMenu from './NavBarMenu';

import useCurrentUserQuery from '../../hooks/useCurrenUserQuery';

const NavBar = (props) => {
  const { error, loading, currentUser } = useCurrentUserQuery();
  const isLoggedIn = !!currentUser;

  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <img
          src='https://wedevelop.me/img/wedevelop-icon.0b847dcc.svg'
          alt='weDev-logo'
          className='navbar-left-logo'
        />
        <h3 className='navbar-left-name'>WeReward App</h3>
      </div>
      <NavBarMenu isLoggedIn={isLoggedIn} currentUser={currentUser} />
    </div>
  );
};

export default NavBar;
