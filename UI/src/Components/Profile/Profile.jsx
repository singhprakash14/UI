import React from "react";
import "./Profile.css";
import profile from "../../assets/Profile.png";
import cam from "../../assets/Group.svg";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="heading">
          <h1>Account Setting</h1>
        </div>
        <div className="details">
          <div className="profile">
            <img src={profile} alt="profile" />
            <img src={cam} alt="cam" />
          </div>
          <div className="details-text">
            <h1>Marry Doe</h1>
            <p>Marry@Gmail.com</p>
          </div>
        </div>
        <div className="summery">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <hr />
        <hr className="dotted-line" />
      </div>
    </>
  );
};

export default Profile;
