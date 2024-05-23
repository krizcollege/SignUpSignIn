import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OTP.css';

const OTP = () => {
  const navigate = useNavigate();

  const redirectToSignup = () => {
    navigate('/');
  };

  return (
    <div className="otp-container">
      <h1>OTP Verification</h1>
      <p>Enter the OTP sent to your email:</p>
      <input type="text" placeholder="Enter OTP" />
      <button onClick={redirectToSignup}>Redirect me back to Sign Up Page</button>
    </div>
  );
};

export default OTP;