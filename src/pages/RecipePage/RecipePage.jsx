import React from "react";
import "./recipepage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecipeData } from "../../store/Slices/RecipSlice/recipePageSlice";

const RecipePage = () => {
  const { recipeData } = useSelector(selectRecipeData);
  const navigate = useNavigate();

  return (
    <div className="recipeDiv">
      <div className="recipeDesc">
        <h1 className="recipe-main-text">Recipes</h1>
        <p className="recipe-secondary-text">
          you can write here about Recipes
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

      <div className="main-recipe-box">
        {recipeData.map((recipe, key) => {
          return (
            <div className="recipe-card" key={key}>
              <div className="recipe-card-first">
                <img
                  src={recipe?.userAvatar}
                  alt="User"
                  width={40}
                  height={40}
                />
                <div className="recipe-card-text">
                  <p className="postText">{recipe?.postText}</p>
                  <p className="postDesc">{recipe?.username}</p>
                </div>
              </div>
              <div className="card-end">
                <p className="card-end-text">Replices: 0</p>
                <p className="card-end-text">View: 0</p>
                {" | "}
                <p className="card-end-text">{recipe?.postTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipePage;
