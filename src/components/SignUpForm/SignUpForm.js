import React, { useState } from 'react';
import './signup-form.scss';

const Form = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      firstName,
      lastName,
      username,
      password,
    });
  };

  return (
    <div className='form-loading-error-container'>
      <form
        onSubmit={handleSubmit}
        autoComplete='off'
        className='form-container'
      >
        <div className='form-input-container'>
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='form-input'
            placeholder='First Name'
            required
          />
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='form-input'
            placeholder='Last Name'
            required
          />
          <input
            type='email'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='form-input'
            placeholder='Email Adress'
            required
          />
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-input last-input'
            placeholder='Password'
            required
          />
        </div>

        <button type='submit' className='form-button'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
