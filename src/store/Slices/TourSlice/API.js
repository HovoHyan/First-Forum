import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, PUT } = UseRequest();

export const getTourData = createAsyncThunk("tourData/getTourData", async () => {
  const result = await GET("http://localhost:3005/tourData");
  return result;
});

export const addNewTour = createAsyncThunk("tourData/addNewTour", async ({ data, activeUser }) => {
  const newTourData = await POST("http://localhost:3005/tourData", data);
  const result2 = await PUT({
    url: `http://localhost:3005/usersData/${data.userId}`,
    newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
  });
  const result3 = await PUT({
    url: `http://localhost:3005/activeLoginData/${data.userId}`,
    newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
  });
  return { newTourData, result2, result3 };
});
