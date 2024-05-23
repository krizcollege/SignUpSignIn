import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Signup = () => {
  const [action, setAction] = useState('Sign Up');
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate('/forgotpassword');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User Icon" />
          <input placeholder="Name" type="text" />
        </div>
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
          onClick={() => setAction('Sign In')}
        >
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Signup;