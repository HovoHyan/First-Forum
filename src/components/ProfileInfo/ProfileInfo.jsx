import React from "react";
import "./profileInfo.css";
import { useSelector } from "react-redux";
import { selectActiveUsers } from "../../store/Slices/ActiveUsersSlice/activeUsersSlice";

const ProfileInfo = () => {
  const { activeData } = useSelector(selectActiveUsers);

  return (
    <div className="user-profile">
      <div className="profile">
        <div className="user-image">
          <img
            src={activeData[0]?.image}
            alt=""
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        </div>
        <div className="user-info">
          <p className="user-name">{activeData[0]?.userName}</p>
          <p className="user-info-text">
            Member | {activeData[0]?.age} years | From {activeData[0]?.country}
          </p>
          <div className="messages-count">
            <div className="count">
              <span>Messages</span>
              <p className="count-number">0</p>
            </div>
            <hr />
            <div className="count">
              <span>Reaction score</span>
              <p className="count-number">0</p>
            </div>
            <hr />
            <div className="count">
              <span>Points</span>
              <p className="count-number">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
