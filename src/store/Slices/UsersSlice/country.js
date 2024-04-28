import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAllCountries } from "./API";

const allCountrySlices = createSlice({
  name: "countryData",
  initialState: {
    isLoading: false,
    countryList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllCountries.fulfilled, (state, { payload }) => {
      state.countryList = payload;
    });
  },
});
export const selectCountries = (state) => state.countryData;
export const allCountrySlicesReducer = allCountrySlices.reducer;
