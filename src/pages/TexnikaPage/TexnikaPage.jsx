import React from "react";
import "./texnikapage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectActiveUsers } from "../../store/Slices/UsersSlice/activeUsersSlice";
const TexnikaPage = () => {
  const { activeData } = useSelector(selectActiveUsers);
  const navigate = useNavigate();
  return (
    <div className="technicaDiv">
      <div className="texnikaDesc">
        <h1 className="texnika-main-text">Texnika</h1>
        <p className="texnika-secondary-text">
          you can write here about Technica
        </p>
      </div>
      <p onClick={() => navigate(-1)} className="goBackBtn">
        Go Back
      </p>

      <div className="main-texnika-box">
        <div className="texnika-card">
          <div className="">
            <img src={activeData[0]?.image} alt="" width={40} height={40} />
          </div>
        </div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TexnikaPage;
