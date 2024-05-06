import { createSlice } from "@reduxjs/toolkit";
import { addNewPost, addNewTour, getTourData } from "./API";

const tourPageSlice = createSlice({
  name: "allTourData",
  initialState: {
    isLoading: false,
    tourData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTourData.fulfilled, (state, { payload }) => {
        state.tourData = payload;
      })
      .addCase(addNewTour.fulfilled, (state, { payload }) => {
        state.tourData.push(payload.newTourData);
      });
  },
});
export const selectTourData = (state) => state.allTourData;
export const tourPageReducer = tourPageSlice.reducer;
