import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET } = UseRequest();

export const getAllUsers = createAsyncThunk("allUsersData/getAllUsers", async () => {
  const result = await GET("http://localhost:3005/usersData");
  return result;
});

export const addNewUser = createAsyncThunk("allUsersData/addNewUser", async (newUser) => {
  const result = await POST("http://localhost:3005/usersData", newUser);
  return result;
});

