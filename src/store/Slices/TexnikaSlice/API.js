import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, PUT } = UseRequest();

export const getTexnikaData = createAsyncThunk("texnikaData/getTexnikaData", async () => {
  const result = await GET("http://localhost:3005/technicaData");
  return result;
});

export const addNewPost = createAsyncThunk("texnikaData/addNewPost", async ({ data, activeUser }) => {
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
