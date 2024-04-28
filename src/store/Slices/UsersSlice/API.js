import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, DELETE, PatchAAAAAA } = UseRequest();

export const fetchGetAllCountries = createAsyncThunk("countryData/fetchGetAllCountries", async () => {
  const result = await GET("http://localhost:3005/countryList");
  return result;
});

export const fetchGetAllUsers = createAsyncThunk("allUsersData/fetchGetAllUsers", async () => {
  const result = await GET("http://localhost:3005/usersData");
  return result;
});

export const fetchAddNewUser = createAsyncThunk("allUsersData/fetchAddNewUser", async (newUser) => {
  const result = await POST("http://localhost:3005/usersData", newUser);
  return newUser;
});

export const fetchGetActiveUsers = createAsyncThunk("allUsersData/fetchGetActiveUsers", async () => {
  const result = await GET("http://localhost:3005/activeLoginData");
  return result;
});

export const fetchAddActiveUser = createAsyncThunk("allUsersData/fetchAddActiveUser", async (newUser) => {
  const result = await POST("http://localhost:3005/activeLoginData", newUser);
  return newUser;
});

export const fetchPopActiveUser = createAsyncThunk("allUsersData/fetchPopActiveUser", async (id) => {
  const result = await DELETE(`http://localhost:3005/activeLoginData/${id}`);
  return id;
});

export const fetchAddNewPost = createAsyncThunk("postsData/fetchAddNewPost", async (newPost) => {
  const result = await POST("http://localhost:3005/technicaData", newPost);
  return result;
});

export const fetchPatchAllUsers = createAsyncThunk("allUsersData/fetchPatchAllUsers", async ({ data, userPosts }) => {
  const result = await PatchAAAAAA(`http://localhost:3005/usersData/${data.userId}`, data, userPosts);
  console.log(result);
});
