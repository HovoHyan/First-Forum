import React from "react";
import "./texnikapage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTexnikaData } from "../../store/Slices/UsersSlice/texnikaPageSlice";
const TexnikaPage = () => {
  const { texnikaData } = useSelector(selectTexnikaData);
  console.log(texnikaData[0]);
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
        {texnikaData.map((texnika) => {
          <div className="texnika-card">
            <div className="">
              <img src={texnika.userAvatar} alt="User" width={40} height={40} />
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default TexnikaPage;
