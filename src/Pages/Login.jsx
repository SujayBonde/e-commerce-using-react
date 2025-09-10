import React from "react";
import "./CSS/Login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="login-conatiner">
        <h1>Log In</h1>
        <div className="login-fields">
          <input type="email" placeholder='Enter Your Email Address' />
          <input type="password" placeholder='Enter Password' />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};
