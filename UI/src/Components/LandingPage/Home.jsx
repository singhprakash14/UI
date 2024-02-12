import React from "react";
import Button from "./Button";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate("/create-account");
  };
  const handleLogin = () => {
    navigate("/login")
  };
  return (
    <>
      <div >
      <div className="container"> <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit,</p>
        <Button
          btn_text="Create Account"
          className="create-btn"
          onClick={handleCreateAccount}
        />
        <Button
          btn_text="Already Register? Login"
          className="login-btn"
          onClick={handleLogin}
        /></div>
       
      </div>
    </>
  );
};

export default Home;



