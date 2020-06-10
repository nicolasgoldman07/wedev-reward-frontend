import React from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from '../../components/SignInForm';
import './signin.scss';

const SignIn = (props) => {
  return (
    <div className="signin-container">
      <h2 className="signin-title">Member login</h2>
      <SignInForm />
      <Link to="/auth/signup" className="without-account">
        Don't you have an account?
      </Link>
    </div>
  );
};

export default SignIn;
