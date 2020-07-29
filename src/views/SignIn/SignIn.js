import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from '../../components/Forms/SignInForm';

import useSignInMutation from '../../hooks/useSignInMutation';
import { useHistory } from 'react-router-dom';

import './signin.scss';

const SignIn = ({ currentUser }) => {
  const history = useHistory();
  if (currentUser) history.push('/home');

  const { signInUser } = useSignInMutation();
  const [mutationError, setMutationError] = useState(null);

  const onSubmit = async (input) => {
    const { authError } = await signInUser(input);
    setMutationError(authError);
    if (!authError) history.push('/home');
  };

  return (
    <div className='signin-container'>
      <h2 className='signin-title'>Login</h2>
      <SignInForm onSubmit={onSubmit} />
      <Link to='/auth/signup' className='without-account'>
        Don't you have an account? <u>Sign up</u>
      </Link>
      {mutationError && (
        <p className='authError'>
          Login error: <strong>{mutationError}</strong>
        </p>
      )}
    </div>
  );
};

export default SignIn;
