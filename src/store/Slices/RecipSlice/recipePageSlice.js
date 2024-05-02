import { createSlice } from "@reduxjs/toolkit";
import { addNewRecipe, getRecipeData } from "./API";

const recipePageSlice = createSlice({
  name: "allRecipeData",
  initialState: {
    isLoading: false,
    recipeData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipeData.fulfilled, (state, { payload }) => {
        state.recipeData = payload;
      })
      .addCase(addNewRecipe.fulfilled, (state, { payload }) => {
        state.recipeData.push(payload.newRecipeData);
      });
  },
});
export const selectRecipeData = (state) => state.allRecipeData;
export const recipePageReducer = recipePageSlice.reducer;
