import { createSlice } from "@reduxjs/toolkit";
import { fetchAddNewPost, fetchGetTexnikaData } from "./API";

const texnikaPageSlice = createSlice({
  name: "allTexnikaData",
  initialState: {
    isLoading: false,
    texnikaData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTexnikaData.fulfilled, (state, { payload }) => {
        state.texnikaData = payload;
      })
      .addCase(fetchAddNewPost.fulfilled, (state, { payload }) => {
        state.texnikaData.push(payload.newTexnikData);
      });
  },
});
export const selectTexnikaData = (state) => state.allTexnikaData;
export const texnikaPageReducer = texnikaPageSlice.reducer;
