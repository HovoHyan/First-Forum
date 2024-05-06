import { createSlice } from "@reduxjs/toolkit";
import { addNewCar, getCarData } from "./API";

const carPageSlice = createSlice({
  name: "allCarData",
  initialState: {
    isLoading: false,
    carData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarData.fulfilled, (state, { payload }) => {
        state.carData = payload;
      })
      .addCase(addNewCar.fulfilled, (state, { payload }) => {
        state.carData.push(payload.newCarData);
      });
  },
});
export const selectCarData = (state) => state.allCarData;
export const carPageReducer = carPageSlice.reducer;
