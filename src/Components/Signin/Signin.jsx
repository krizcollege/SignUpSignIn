import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Signin = () => {
  const [action, setAction] = useState('Sign In');
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate('/forgotpassword');
  };

  const handleSignIn = () => {
    setAction('Sign In');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input placeholder="Email ID" type="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input placeholder="Password" type="password" />
        </div>
        <div className="forgot" onClick={handleForgotPassword}>
          Forgot Password?
        </div>
      </div>
      <div className="submit-container">
        <div
          className={action === 'Sign In' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={handleSignIn}
        >
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Signin;