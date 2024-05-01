import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { GET } = UseRequest();

export const fetchGetRecipeData = createAsyncThunk("recipeData/fetchGetRecipeData", async () => {
  const result = await GET("http://localhost:3005/recipeData");
  return result;
});
