import React, { useState } from 'react';

import useSignUpMutation from '../../hooks/useSignUpMutation';
import { Link, useHistory } from 'react-router-dom';
import { SignUpForm } from '../../components/SignUpForm';

import './signup.scss';

const SignUp = (props) => {
  const { error, loading, signUpUser } = useSignUpMutation();
  const [mutationError, setMutationError] = useState(null);
  const history = useHistory();

  const onSubmit = async (input) => {
    const { authError } = await signUpUser(input);
    setMutationError(authError);
    if (!authError) history.push('/home');
  };

  return (
    <div className='signup-container'>
      <h2 className='signup-title'>Member registration</h2>
      <SignUpForm onSubmit={onSubmit} />
      <Link to='/auth/signin' className='already-signedup'>
        Do you already have an account?
      </Link>
      {mutationError && (
        <p className='authError'>
          Register error: <strong>{mutationError}</strong>
        </p>
      )}
    </div>
  );
};

export default SignUp;
