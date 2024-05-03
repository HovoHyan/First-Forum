import React, { useState } from "react";
import "./profileInfo.css";
import EditIcon from "../../Assets/Edit.png";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveUsers } from "../../store/Slices/ActiveUsersSlice/activeUsersSlice";
import { changeActiveAvatar } from "../../store/Slices/ActiveUsersSlice/API";

const ProfileInfo = () => {
  const { activeData } = useSelector(selectActiveUsers);
  const dispatch = useDispatch();
  const [newImg, setNewImg] = useState("");
  const [change, setChange] = useState(false);

  const createImg = (e) => {
    setChange(!change);
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        setNewImg(reader.result);
        dispatch(changeActiveAvatar({ data: reader.result, activeUser: activeData[0] }));
      };
    }
  };

  return (
    <div className="user-profile">
      <div className="profile">
        <div className="user-image">
          <img
            src={activeData[0]?.image}
            alt="User"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
          {change ? (
            <input type="file" onChange={createImg} required />
          ) : (
            <img
              src={EditIcon}
              alt="Edit"
              className="edit_Icon"
              onClick={createImg}
            />
          )}
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
