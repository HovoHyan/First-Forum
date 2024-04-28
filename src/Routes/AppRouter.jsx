import React, { useEffect } from "react";
import Layout from "../pages/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import UsersGenerator from "../pages/UsersAdder/UsersGenerator";
import Contact from "../pages/ContactPage/Contact";
import LoginPage from "../pages/LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetActiveUsers,
  fetchGetAllCountries,
  fetchGetAllUsers,
} from "../store/Slices/UsersSlice/API";
import ProfilePosts from "../components/ProfilePosts/ProfilePosts";
import ProfileLayout from "../pages/ProfileLayout/ProfileLayout";
import ProfileAbout from "../components/ProfileAbout/ProfileAbout";
import ProfilePostings from "../components/ProfilePostings/ProfilePostings";
import TexnikaPage from "../pages/TexnikaPage/TexnikaPage";
import { selectActiveUsers } from "../store/Slices/UsersSlice/activeUsersSlice";
import { selectUser } from "../store/Slices/UsersSlice/usersSlice";

const AppRouter = () => {
  const one = 1;
  const dispatch = useDispatch();
  const allUsers = useSelector(selectUser);
  const { activeData } = useSelector(selectActiveUsers);
  useEffect(() => {
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
            <Route path="register" element={<UsersGenerator />} />
          )}
          {activeData.length < 1 && (
            <Route path="login" element={<LoginPage />} />
          )}
          <Route path="contact" element={<Contact />} />
          {activeData.length > 0 && (
            <Route path="profile" element={<ProfileLayout />}>
              <Route path="profilePosts" element={<ProfilePosts />} />
              <Route path="about" element={<ProfileAbout />} />
              <Route path="postings" element={<ProfilePostings />} />
            </Route>
          )}
          <Route path="forums">
            <Route path="texnika" element={<TexnikaPage />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
