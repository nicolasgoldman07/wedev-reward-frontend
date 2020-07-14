import React, { useState } from 'react';

import './signin-form.scss';

const SignInForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn({
      variables: {
        data: {
          username,
          password,
        },
      },
    });
  };

  return (
    <div>
      {/* // TODO: Ask for this render way (conditional & authError instead of mutationError) */}
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='form-input-container'>
          <input
            type='email'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='form-input'
            placeholder='Email Adress'
            autoComplete='off'
            required
          />
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-input'
            placeholder='Password'
            autoComplete='off'
            required
          />
        </div>
        <button className='form-button'>Log In</button>
      </form>
    </div>
  );
};

export default SignInForm;
