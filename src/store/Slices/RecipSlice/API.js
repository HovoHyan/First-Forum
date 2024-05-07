import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, PUT } = UseRequest();

export const getRecipeData = createAsyncThunk("recipeData/getRecipeData", async () => {
  const result = await GET("http://localhost:3005/recipeData");
  return result;
});

export const addNewRecipe = createAsyncThunk("recipeData/addNewRecipe", async ({ data, activeUser }) => {
  const newRecipeData = await POST("http://localhost:3005/recipeData", data);
  const result2 = await PUT({
    url: `http://localhost:3005/usersData/${data.userId}`,
    newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
  });
  const result3 = await PUT({
    url: `http://localhost:3005/activeLoginData/${data.userId}`,
    newData: { ...activeUser, posts: [...activeUser.posts, data.id] },
  });
  return { newRecipeData, result2, result3 };
});
