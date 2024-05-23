import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    window.location.href = '/otp';
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Forgot Password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="input">
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            placeholder="Phone Number"
            type="tel"
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;