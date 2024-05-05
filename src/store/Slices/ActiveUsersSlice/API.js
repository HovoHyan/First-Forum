import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, DELETE, PUT } = UseRequest();

export const getActiveUsers = createAsyncThunk("activeUsersData/getActiveUsers", async () => {
  const result = await GET("http://localhost:3005/activeLoginData");
  return result;
});

export const addActiveUser = createAsyncThunk("activeUsersData/addActiveUser", async (newUser) => {
  const user = {...newUser, active: true};
  const result = await POST("http://localhost:3005/activeLoginData", user);
  const result2 = await PUT({
    url: `http://localhost:3005/usersData/${newUser.id}`,
    newData: user,
  });
  return {result, result2};
});

export const deleteActiveUser = createAsyncThunk("activeUsersData/deleteActiveUser", async (user) => {
  const result = await DELETE(`http://localhost:3005/activeLoginData/${user.id}`);
  return user.id;
});

export const outActiveUser = createAsyncThunk("activeUsersData/outActiveUser", async (newUser) => {
  const user = {...newUser, active: false};
  const result = await DELETE(`http://localhost:3005/activeLoginData/${newUser.id}`);
  const result2 = await PUT({
    url: `http://localhost:3005/usersData/${newUser.id}`,
    newData: user,
  });
  return {result, result2};
});

export const changeActiveAvatar = createAsyncThunk("activeUsersData/changeActiveAvatar", async ({ data, activeUser }) => {
  const result = await PUT({
    url: `http://localhost:3005/activeLoginData/${activeUser.id}`,
    newData: { ...activeUser, image: data },
  });
  const result2 = await PUT({
    url: `http://localhost:3005/usersData/${activeUser.id}`,
    newData: { ...activeUser, image: data },
  });
  return { result, result2 };
});
