import React from "react";
import "./animalPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAnimalData } from "../../store/Slices/AnimalSlice/animalPageSlice";
const AnimalPage = () => {
  const { animalData } = useSelector(selectAnimalData);

  const navigate = useNavigate();
  return (
    <div className="animalDiv">
      <div className="animalDesc">
        <h1 className="animal-main-text">Animal</h1>
        <p className="animal-secondary-text">
          you can write here about Technica
        </p>
      </div>
      <div className="go-back">
        <div className="back-btn">
          <p onClick={() => navigate(-1)} className="goBackBtn">
            Go Back
          </p>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 268.832 268.832"
            >
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="main-animal-box">
        {animalData.map((animal, key) => {
          return (
            <div className="animal-card" key={key}>
              <div className="animal-card-first">
                <img
                  src={animal?.userAvatar}
                  alt="User"
                  width={40}
                  height={40}
                />
                <div className="animal-card-text">
                  <p className="postText">{animal?.postText}</p>
                  <p className="postDesc">{animal?.username}</p>
                </div>
              </div>
              <div className="card-end">
                <p className="card-end-text">Replices: 0</p>
                <p className="card-end-text">View: 0</p>
                {" | "}
                <p className="card-end-text">{animal?.postTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimalPage;
