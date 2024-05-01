import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddNewUser,
  fetchGetAllUsers,
} from "./API";

const usersSLice = createSlice({
  name: "allUsersData",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddNewUser.fulfilled, (state, { payload }) => {
      state.data.push(payload);
    });
    builder.addCase(fetchGetAllUsers.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export const selectUser = (state) => state.allUsersData;
export const usersReducer = usersSLice.reducer;
