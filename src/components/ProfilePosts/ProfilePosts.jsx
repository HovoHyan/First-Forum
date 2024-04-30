import React from "react";
import "./profilePosts.css";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveUsers } from "../../store/Slices/UsersSlice/activeUsersSlice";
import { fetchAddNewPost } from "../../store/Slices/UsersSlice/API";
import { selectUser } from "../../store/Slices/UsersSlice/usersSlice";

const ProfilePosts = () => {
  const { data } = useSelector(selectUser);
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
    dispatch(fetchAddNewPost({ data: newPost, activeUser: activeData[0] }));
    e.target.reset();
  };

  return (
    <div className="profile-posts">
      <div className="posts">
        <img src={activeData[0]?.image} alt="User" />
        <form className="post-write" onSubmit={submitPost}>
          <input type="text" placeholder="Write a theme name" className="status" name="postText" required />
          <textarea type="text" placeholder="Write a theme name" className="post-textArea" name="postDesc"></textarea>
          <select name="theme" className="select-theme">
            <option>Technica</option>
          </select>
          <button className="login-button">Submit Post</button>
        </form>
      </div>
      <p className="posts-text">There are no messages on {activeData[0]?.userName}'s profile yet.</p>
    </div>
  );
};

export default ProfilePosts;
