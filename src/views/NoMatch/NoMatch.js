import React from 'react';
import { Link } from 'react-router-dom';

import './nomatch.scss';

const NoMatch = (props) => {
  return (
    <div className='no-match-container'>
      <div className='left-404'>
        <h1>Oops!</h1>
        <h2>We can't seem to find the page you're looking for.</h2>
        <h4>
          Error code:{' '}
          <a
            href='https://en.wikipedia.org/wiki/HTTP_404'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>404</strong>
          </a>
        </h4>
        <div className='left-404-links'>
          <h4>Here are some helpful links instead:</h4>
          <Link to='/auth/signup'>Sign Up</Link>
          <Link to='/auth/signin'>Sign In</Link>
          <Link to='/home'>Home</Link>
        </div>
      </div>
      <div className='right-404'>
        <img
          src={process.env.PUBLIC_URL + '/404Img.png'}
          alt=''
          className='right-404-img'
        />
      </div>
    </div>
  );
};

export default NoMatch;
