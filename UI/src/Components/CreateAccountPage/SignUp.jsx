import React, { useState } from "react";
import "./Signup.css";
import Input from "./Input";
import Button from "../LandingPage/Button";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    fName: "Prakash Singh",
    phone: "251858283",
    email: "abc12320@gmail.com",
    password: "*****",
    companyName: "abc",
    isAgency: "yes",
  });
  const navigate = useNavigate();
  const handleChange = (field, newValue) => {
    setUser({ ...user, [field]: newValue });
  };
  const handleCreateAccount = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="create-container">
        <div className="user-details">
          <h1>
            Create your <br /> PopX account
          </h1>
          <Input
            label="Full Name"
            important="*"
            value={user.fName}
            onChange={(e) => handleChange("fName", e.target.value)}
          />
          <Input
            label="Phone number"
            important="*"
            value={user.phone}
            onChange={(e) => handleChange("fName", e.target.value)}
          />
          <Input
            label="Email address"
            important="*"
            value={user.email}
            onChange={(e) => handleChange("fName", e.target.value)}
          />
          <Input
            label="Password"
            important="*"
            value={user.password}
            onChange={(e) => handleChange("fName", e.target.value)}
          />
          <Input
            label="Company name"
            important=""
            value={user.companyName}
            onChange={(e) => handleChange("fName", e.target.value)}
          />
          <p className="agency">
            Are you an Agency?<span>*</span>
          </p>
          <div className="agency-input">
            <div className="yes">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={user.isAgency === "yes"}
                onChange={(e) => setUser({ ...user, isAgency: e.target.value })}
              />
              <label>yes</label>
            </div>
            <div className="no">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={user.isAgency === "no"}
                onChange={(e) => setUser({ ...user, isAgency: e.target.value })}
              />
              <label>No</label>
            </div>
          </div>
        </div>
        <div className="create">
          <Button
            btn_text="Create Account"
            className="create-button"
            onClick={handleCreateAccount}
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
