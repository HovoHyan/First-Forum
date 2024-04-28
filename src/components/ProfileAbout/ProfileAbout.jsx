import React from "react";
import "./profileAbout.css";
import { useSelector } from "react-redux";
import { selectActiveUsers } from "../../store/Slices/UsersSlice/activeUsersSlice";

const ProfileAbout = () => {
  const { activeData } = useSelector(selectActiveUsers);
  return (
    <div className="profile-about">
      <div className="about-titles">
        <p>Email:</p>
        <p>Age:</p>
        <p>Country:</p>
      </div>
      <div className="about-text">
        <p>{activeData[0]?.email}</p>
        <p>{activeData[0]?.age}</p>
        <p>{activeData[0]?.country}</p>
      </div>
    </div>
  );
};

export default ProfileAbout;
