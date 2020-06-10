import React, { useState } from 'react';
import './signin-form.scss';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User loged in: ${username + password}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-input-container">
          <input
            type="email"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            placeholder="Email Adress"
            autoComplete="off"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Password"
            autoComplete="off"
            required
          />
        </div>
        <button className="form-button">Log In</button>
      </form>
    </div>
  );
};

export default SignInForm;
