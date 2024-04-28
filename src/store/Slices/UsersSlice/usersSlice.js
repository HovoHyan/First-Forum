import { createSlice } from "@reduxjs/toolkit";
import { fetchAddActiveUser, fetchAddNewUser, fetchGetAllUsers, fetchPatchAllUsers } from "./API";

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
    builder.addCase(fetchAddActiveUser.fulfilled, (state, { payload }) => {
      state.data.push(payload);
    });
  },
});

export const selectUser = (state) => state.allUsersData;
export const { addNewUser } = usersSLice.actions;
export const usersReducer = usersSLice.reducer;
