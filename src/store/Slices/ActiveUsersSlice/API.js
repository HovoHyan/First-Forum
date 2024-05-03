import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, DELETE, PUT } = UseRequest();

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

export const changeActiveAvatar = createAsyncThunk("activeUsersData/changeActiveAvatar", async ({ data, activeUser}) => {
  const result = await PUT({
    url: `http://localhost:3005/activeLoginData/${activeUser.id}`,
    newData: { ...activeUser, image: data }
  })
  const result2 = await PUT({
    url: `http://localhost:3005/usersData/${activeUser.id}`,
    newData: { ...activeUser, image: data }
  })
  return { result, result2 };
});
