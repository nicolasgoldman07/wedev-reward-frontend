import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import './navbar.scss';
import NavBarMenu from './NavBarMenu';

const CURRENT_USER = gql`
  {
    currentUser {
      id
      username
      firstName
      lastName
    }
  }
`;

const NavBar = (props) => {
  const { data: userInfo } = useQuery(CURRENT_USER);

  const { currentUser } = userInfo;
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
