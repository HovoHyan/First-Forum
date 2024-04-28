import React from "react";
import "./profileLayout.css";
import { NavLink, Outlet } from "react-router-dom";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const ProfileLayout = () => {
  return (
    <div className="nav">
      <ProfileInfo />
      <div className="profile-nav">
        <div className="profile-links">
          <NavLink to="profilePosts">Profile Posts</NavLink>
          <NavLink to="postings">Postings</NavLink>
          <NavLink to="about">About</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
