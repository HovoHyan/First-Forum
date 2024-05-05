import { createSlice } from "@reduxjs/toolkit";
import { addNewAnimal } from "../AnimalSlice/API";
import { addNewRecipe } from "../RecipSlice/API";
import { addNewPost } from "../TexnikaSlice/API";
import {
  addActiveUser,
  changeActiveAvatar,
  deleteActiveUser,
  getActiveUsers,
  outActiveUser,
} from "./API";

const activeUsersSLice = createSlice({
  name: "activeUsersData",
  initialState: {
    isLoading: false,
    activeData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addActiveUser.fulfilled, (state, { payload }) => {
        state.activeData.push(payload.result);
      })
      .addCase(getActiveUsers.fulfilled, (state, { payload }) => {
        state.activeData = payload;
      })
      .addCase(outActiveUser.fulfilled, (state, { payload }) => {
        state.activeData.pop();
      })
      .addCase(addNewPost.fulfilled, (state, { payload }) => {
        state.activeData[0] = payload.result3;
      })
      .addCase(addNewRecipe.fulfilled, (state, { payload }) => {
        state.activeData[0] = payload.result3;
      })
      .addCase(addNewAnimal.fulfilled, (state, { payload }) => {
        state.activeData[0] = payload.result3;
      })
      .addCase(changeActiveAvatar.fulfilled, (state, { payload }) => {
        state.activeData[0] = payload.result;
      })
      .addCase(deleteActiveUser.fulfilled, (state, { payload }) => {
        state.activeData.pop();
      });
  },
});
export const selectActiveUsers = (state) => state.activeUsersData;
export const activeUsersReducer = activeUsersSLice.reducer;
