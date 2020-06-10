import React from 'react';
import { Link } from 'react-router-dom';
import './navbar-btn.scss';

const NavBarButton = (props) => {
  return (
    <div>
      <li className={`navbar-right-list-item ${props.class}`}>
        <Link
          to={props.link}
          className={`navbar-right-list-anchor ${props.class}`}
        >
          {props.content}
        </Link>
      </li>
    </div>
  );
};

export default NavBarButton;
