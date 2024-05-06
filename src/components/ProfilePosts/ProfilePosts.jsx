import React from "react";
import "./profilePosts.css";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveUsers } from "../../store/Slices/ActiveUsersSlice/activeUsersSlice";
import { addNewAnimal } from "../../store/Slices/AnimalSlice/API";
import { addNewRecipe } from "../../store/Slices/RecipSlice/API";
import { addNewPost } from "../../store/Slices/TexnikaSlice/API";
import { addNewTour } from "../../store/Slices/TourSlice/API";
import { addNewCar } from "../../store/Slices/CarSlice/API";

const ProfilePosts = () => {
  const { activeData } = useSelector(selectActiveUsers);
  const dispatch = useDispatch();
  const date = new Date().toLocaleString().toString();

  const submitPost = async (e) => {
    e.preventDefault();
    const {
      postText: { value: postText },
      postDesc: { value: postDesc },
      theme: { value: theme },
    } = e.target;
    const newPost = {
      id: new Date().getTime().toString(),
      userId: activeData[0]?.id,
      userAvatar: activeData[0]?.image,
      postText,
      postDesc,
      theme,
      postTime: date,
      likes: [],
      username: activeData[0]?.userName,
    };
    switch (newPost.theme) {
      case "Technica":
        dispatch(addNewPost({ data: newPost, activeUser: activeData[0] }));
        break;
      case "Animal":
        dispatch(addNewAnimal({ data: newPost, activeUser: activeData[0] }));
        break;
      case "Recipe":
        dispatch(addNewRecipe({ data: newPost, activeUser: activeData[0] }));
        break;
      case "Tour":
        dispatch(addNewTour({ data: newPost, activeUser: activeData[0] }));
        break;
      case "Car":
        dispatch(addNewCar({ data: newPost, activeUser: activeData[0] }));
        break;
    }
    e.target.reset();
  };

  return (
    <div className="profile-posts">
      <div className="posts">
        <img src={activeData[0]?.image} alt="User" />
        <form className="post-write" onSubmit={submitPost}>
          <input
            type="text"
            placeholder="Write a theme name"
            className="status"
            name="postText"
            required
          />
          <textarea
            type="text"
            placeholder="Write a theme"
            className="post-textArea"
            name="postDesc"
          ></textarea>
          <div className="select-theme-box">
            <select name="theme" className="select-theme">
              <option>Technica</option>
              <option>Recipe</option>
              <option>Animal</option>
              <option>Tour</option>
              <option>Car</option>
            </select>
          </div>
          <button className="login-button">Submit Post</button>
        </form>
      </div>
      <p className="posts-text">
        There are no posts on {activeData[0]?.userName}'s profile yet.
      </p>
    </div>
  );
};

export default ProfilePosts;
