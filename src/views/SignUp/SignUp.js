import React from 'react';
import { Link } from 'react-router-dom';
import { SignUpForm } from '../../components/SignUpForm';
import './signup.scss';

const SignUp = (props) => {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Member registration</h2>
      <SignUpForm />
      <Link to="/auth/signin" className="already-signedup">
        Do yo already have an account?
      </Link>
    </div>
  );
};

export default SignUp;
