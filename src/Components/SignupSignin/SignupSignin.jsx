import React, { useState } from 'react';
import './SignupSignin.css';

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const SignupSignin = () => {
  const [action, setAction] = useState('Sign In');

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input placeholder="Name" type="text" />
          </div>
        )}

        {action !== 'Login' && (
          <div className="input">
            <img src={email_icon} alt="" />
            <input placeholder="Email ID" type="email" />
          </div>
        )}
        <div className="input">
          <img src={password_icon} alt="" />
          <input placeholder="Password" type="password" />
        </div>
      </div>
      {action === 'Sign Up' ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === 'Sign In' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Sign Up');
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Sign In');
          }}
        >
          Sign In
        </div>
      </div>
    </div>
  );
};

export default SignupSignin;