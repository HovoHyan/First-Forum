import { createSlice } from "@reduxjs/toolkit";
import { fetchAddNewPost } from "./API";

const postSlice = createSlice({
  name: "postsData",
  initialState: {
    isLoading: false,
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddNewPost.fulfilled, (state, { payload }) => {
      state.posts.push(payload);
    });
  },
});

export const selectPosts = (state) => state.postsData;
export const postsReducer = postSlice.reducer;
