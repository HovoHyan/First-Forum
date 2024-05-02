import { createSlice } from "@reduxjs/toolkit";
import { addNewPost, getTexnikaData } from "./API";

const texnikaPageSlice = createSlice({
  name: "allTexnikaData",
  initialState: {
    isLoading: false,
    texnikaData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTexnikaData.fulfilled, (state, { payload }) => {
        state.texnikaData = payload;
      })
      .addCase(addNewPost.fulfilled, (state, { payload }) => {
        state.texnikaData.push(payload.newTexnikData);
      });
  },
});
export const selectTexnikaData = (state) => state.allTexnikaData;
export const texnikaPageReducer = texnikaPageSlice.reducer;
