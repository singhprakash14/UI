import React, { useState } from "react";
import "./Login.css";
import Input from "../CreateAccountPage/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="login-container">
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form className="input-details">
          <Input label="Email address" important="" />
          <Input label="Password" important="" />
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
