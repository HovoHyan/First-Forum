import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, PUT } = UseRequest();

export const getCarData = createAsyncThunk("carData/getCarData", async () => {
  const result = await GET("http://localhost:3005/carData");
  return result;
});

export const addNewCar = createAsyncThunk(
  "carData/addNewCar",
  async ({ data, activeUser }) => {
    const newCarData = await POST("http://localhost:3005/carData", data);
    const result2 = await PUT({
      url: `http://localhost:3005/usersData/${data.userId}`,
      newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
    });
    const result3 = await PUT({
      url: `http://localhost:3005/activeLoginData/${data.userId}`,
      newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
    });
    return { newCarData, result2, result3 };
  }
);
