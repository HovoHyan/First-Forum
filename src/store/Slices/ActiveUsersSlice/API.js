import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, DELETE } = UseRequest();

export const getActiveUsers = createAsyncThunk("activeUsersData/getActiveUsers", async () => {
  const result = await GET("http://localhost:3005/activeLoginData");
  return result;
});

export const addActiveUser = createAsyncThunk("activeUsersData/addActiveUser", async (newUser) => {
  const result = await POST("http://localhost:3005/activeLoginData", newUser);
  return result;
});

export const deleteActiveUser = createAsyncThunk("activeUsersData/deleteActiveUser", async (id) => {
  const result = await DELETE(`http://localhost:3005/activeLoginData/${id}`);
  return result;
});
