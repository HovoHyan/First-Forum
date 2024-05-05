import { createSlice } from "@reduxjs/toolkit";
import { addNewUser, deleteUser, getAllUsers } from "./API";
import { changeActiveAvatar, outActiveUser } from "../ActiveUsersSlice/API";

const usersSLice = createSlice({
  name: "allUsersData",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewUser.fulfilled, (state, { payload }) => {
        state.data.push(payload);
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(changeActiveAvatar.fulfilled, (state, { payload }) => {
        state.data = state.data.map((user) =>
          user.id === payload.result.id ? payload.result : user
        );
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.data = state.data.filter((user) => user.id !== payload);
      })
      .addCase(outActiveUser.fulfilled, (state, { payload }) => {
        state.data = state.data.map((user) =>
          user.id === payload.result2.id ? payload.result2 : user
        );
      });
  },
});

export const selectUser = (state) => state.allUsersData;
export const usersReducer = usersSLice.reducer;
