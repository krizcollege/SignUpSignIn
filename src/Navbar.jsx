import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/forgotpassword">Forgot Password</Link>
      <Link to="/otp">OTP</Link>
    </div>
  );
};

export default Navbar;