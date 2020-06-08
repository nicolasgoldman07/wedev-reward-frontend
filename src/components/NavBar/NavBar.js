import React from 'react';
import NavBarButton from './NavBarButton';
import './navbar.scss';

const NavBar = (props) => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img
          src="https://wedevelop.me/img/wedevelop-icon.0b847dcc.svg"
          alt="weDev-logo"
          className="navbar-left-logo"
        />
        <h3 className="navbar-left-name">WeReward App</h3>
      </div>
      <div className="navbar-right">
        <ul className="navbar-right-list">
          <NavBarButton link="/home" class="home" content="Home" />
          <NavBarButton link="/auth/signin" class="signin" content="Sign In" />
          <NavBarButton link="/auth/signup" class="signup" content="Sign Up" />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
