import { createSlice } from "@reduxjs/toolkit";
import { fetchAddNewPost, fetchGetRecipeData } from "./API";

const recipePageSlice = createSlice({
  name: "allRecipeData",
  initialState: {
    isLoading: false,
    recipeData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetRecipeData.fulfilled, (state, { payload }) => {
        state.recipeData = payload;
      })
      .addCase(fetchAddNewPost.fulfilled, (state, { payload }) => {
        state.recipeData.push(payload.newRecipeData);
      });
  },
});
export const selectRecipeData = (state) => state.allRecipeData;
export const recipePageReducer = recipePageSlice.reducer;
