import { createSlice } from "@reduxjs/toolkit";
import {
  addNewUser,
  getAllUsers,
} from "./API";

const usersSLice = createSlice({
  name: "allUsersData",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewUser.fulfilled, (state, { payload }) => {
      state.data.push(payload);
    })
    .addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.data = payload;
    })
  },
});

export const selectUser = (state) => state.allUsersData;
export const usersReducer = usersSLice.reducer;
