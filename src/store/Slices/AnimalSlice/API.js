import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, PUT } = UseRequest();

export const getAnimalData = createAsyncThunk("animalData/getAnimalData", async () => {
  const result = await GET("http://localhost:3005/animalData");
  return result;
});

export const addNewAnimal = createAsyncThunk("animalData/addNewAnimal", async ({ data, activeUser }) => {
  const newAnimalData = await POST("http://localhost:3005/animalData", data);
  const result2 = await PUT({
    url: `http://localhost:3005/usersData/${data.userId}`,
    newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
  });
  const result3 = await PUT({
    url: `http://localhost:3005/activeLoginData/${data.userId}`,
    newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
  });
  return { newAnimalData, result2, result3 };
});
