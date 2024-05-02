import React from "react";
import "./animalPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAnimalData } from "../../store/Slices/AnimalSlice/animalPageSlice";
const AnimalPage = () => {
  const { animalData } = useSelector(selectAnimalData);

  const navigate = useNavigate();
  return (
    <div className="technicaDiv">
      <div className="texnikaDesc">
        <h1 className="texnika-main-text">Animal</h1>
        <p className="texnika-secondary-text">you can write here about Technica</p>
      </div>
      <p onClick={() => navigate(-1)} className="goBackBtn">
        Go Back
      </p>
      <div className="main-texnika-box">
        {animalData.map((texnika) => {
          return (
            <div className="texnika-card">
              <div className="texnika-card-first">
                <img src={texnika?.userAvatar} alt="User" width={40} height={40} />
                <div className="texnika-card-text">
                  <p className="postText">{texnika?.postText}</p>
                  <p className="postDesc">{texnika?.username}</p>
                </div>
              </div>
              <div className="card-end">
                <p className="card-end-text">Replices: 0</p>
                <p className="card-end-text">View: 0</p>
                {" | "}
                <p className="card-end-text">{texnika?.postTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimalPage;
