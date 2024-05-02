import { createSlice } from "@reduxjs/toolkit";
import { addNewAnimal, getAnimalData } from "./API";

const animalPageSlice = createSlice({
  name: "allAnimalData",
  initialState: {
    isLoading: false,
    animalData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnimalData.fulfilled, (state, { payload }) => {
        state.animalData = payload;
      })
      .addCase(addNewAnimal.fulfilled, (state, { payload }) => {
        state.animalData.push(payload.newAnimalData);
      })
  },
});
export const selectAnimalData = (state) => state.allAnimalData;
export const animalPageReducer = animalPageSlice.reducer;
