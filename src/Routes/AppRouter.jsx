import React, { useEffect } from "react";
import Layout from "../pages/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../pages/UsersAdder/Register";
import Contact from "../pages/ContactPage/Contact";
import LoginPage from "../pages/LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { getActiveUsers } from "../store/Slices/ActiveUsersSlice/API";
import { getAllCountries } from "../store/Slices/CountrySlice/API";
import { getTexnikaData } from "../store/Slices/TexnikaSlice/API";
import { getAllUsers } from "../store/Slices/UsersSlice/API";
import ProfilePosts from "../components/ProfilePosts/ProfilePosts";
import ProfileLayout from "../pages/ProfileLayout/ProfileLayout";
import ProfileAbout from "../components/ProfileAbout/ProfileAbout";
import ProfilePostings from "../components/ProfilePostings/ProfilePostings";
import TexnikaPage from "../pages/TexnikaPage/TexnikaPage";
import RecipePage from "../pages/RecipePage/RecipePage";
import { selectActiveUsers } from "../store/Slices/ActiveUsersSlice/activeUsersSlice";
import MessagesPage from "../pages/MessagesPage/MessagesPage";
import AnimalPage from "../pages/AnimalPage/AnimalPage";
import { fetchGetMessages } from "../store/Slices/MessagesSlice/API";
import { getRecipeData } from "../store/Slices/RecipSlice/API";
import { getAnimalData } from "../store/Slices/AnimalSlice/API";
import AdminPage from "../pages/AdminPage/AdminPage";
import TourPage from "../pages/TourPage/TourPage";
import { getTourData } from "../store/Slices/TourSlice/API";
import { getCarData } from "../store/Slices/CarSlice/API";
import CarPage from "../pages/CarPage/CarPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { activeData } = useSelector(selectActiveUsers);
  useEffect(() => {
    dispatch(getTexnikaData());
    dispatch(getRecipeData());
    dispatch(getAnimalData());
    dispatch(getTourData());
    dispatch(getCarData());
    dispatch(getActiveUsers());
    dispatch(getAllUsers());
    dispatch(getAllCountries());
    dispatch(fetchGetMessages());
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
          <Route path="admin" element={<AdminPage />} />
          <Route path="forums">
            <Route path="texnika" element={<TexnikaPage />} />
            <Route path="recipe" element={<RecipePage />} />
            <Route path="animal" element={<AnimalPage />} />
            <Route path="tour" element={<TourPage />} />
            <Route path="car" element={<CarPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
