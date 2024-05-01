import React, { useEffect } from "react";
import Layout from "../pages/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../pages/UsersAdder/Register";
import Contact from "../pages/ContactPage/Contact";
import LoginPage from "../pages/LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetActiveUsers } from "../store/Slices/ActiveUsersSlice/API";
import { fetchGetAllCountries } from "../store/Slices/CountrySlice/API";
import { fetchGetTexnikaData } from "../store/Slices/TexnikaSlice/API";
import { fetchGetAllUsers } from "../store/Slices/UsersSlice/API";
import ProfilePosts from "../components/ProfilePosts/ProfilePosts";
import ProfileLayout from "../pages/ProfileLayout/ProfileLayout";
import ProfileAbout from "../components/ProfileAbout/ProfileAbout";
import ProfilePostings from "../components/ProfilePostings/ProfilePostings";
import TexnikaPage from "../pages/TexnikaPage/TexnikaPage";
import RecipePage from "../pages/RecipePage/RecipePage";
import { selectActiveUsers } from "../store/Slices/ActiveUsersSlice/activeUsersSlice";
import MessagesPage from "../pages/MessagesPage/MessagesPage";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { activeData } = useSelector(selectActiveUsers);
  useEffect(() => {
    dispatch(fetchGetTexnikaData());
    dispatch(fetchGetActiveUsers());
    dispatch(fetchGetAllUsers());
    dispatch(fetchGetAllCountries());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {activeData.length < 1 && (
            <Route path="register" element={<Register />} />
          )}
          {activeData.length < 1 && (
            <Route path="login" element={<LoginPage />} />
          )}
          <Route path="contact" element={<Contact />} />
          <Route path="messages" element={<MessagesPage />} />
          {activeData.length > 0 && (
            <Route path="profile" element={<ProfileLayout />}>
              <Route path="profilePosts" element={<ProfilePosts />} />
              <Route path="about" element={<ProfileAbout />} />
              <Route path="postings" element={<ProfilePostings />} />
            </Route>
          )}
          <Route path="forums">
            <Route path="texnika" element={<TexnikaPage />} />
            <Route path="recipe" element={<RecipePage />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
