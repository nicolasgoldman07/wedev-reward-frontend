import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from '../../components/SignInForm';

import useSignInMutation from '../../hooks/useSignInMutation';
import { useHistory } from 'react-router-dom';

import './signin.scss';

const SignIn = (props) => {
  const { error, loading, signInUser } = useSignInMutation();
  const [mutationError, setMutationError] = useState(null);
  const history = useHistory();

  const onSubmit = async (input) => {
    const { authError } = await signInUser(input);
    setMutationError(authError);
    if (!authError) history.push('/home');
  };

  return (
    <div className='signin-container'>
      <h2 className='signin-title'>Member login</h2>
      <SignInForm onSubmit={onSubmit} />
      <Link to='/auth/signup' className='without-account'>
        Don't you have an account?
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
