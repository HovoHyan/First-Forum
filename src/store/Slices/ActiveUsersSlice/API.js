import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, DELETE, PUT } = UseRequest();

export const fetchGetActiveUsers = createAsyncThunk("allUsersData/fetchGetActiveUsers", async () => {
  const result = await GET("http://localhost:3005/activeLoginData");
  return result;
});

export const fetchAddActiveUser = createAsyncThunk("allUsersData/fetchAddActiveUser", async (newUser) => {
  const result = await POST("http://localhost:3005/activeLoginData", newUser);
  return result;
});

export const fetchPopActiveUser = createAsyncThunk("allUsersData/fetchPopActiveUser", async (id) => {
  const result = await DELETE(`http://localhost:3005/activeLoginData/${id}`);
  return result;
});

export const fetchAddNewPost = createAsyncThunk("postsData/fetchAddNewPost", async ({ data, activeUser }) => {
  const newTexnikData = await POST("http://localhost:3005/technicaData", data);
  const result2 = await PUT({
    url: `http://localhost:3005/usersData/${data.userId}`,
    newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
  });
  const result3 = await PUT({
    url: `http://localhost:3005/activeLoginData/${data.userId}`,
    newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
  });
  return { newTexnikData, result2, result3 };
});
