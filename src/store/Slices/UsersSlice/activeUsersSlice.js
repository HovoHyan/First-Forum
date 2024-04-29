import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddActiveUser,
  fetchGetActiveUsers,
  fetchPopActiveUser,
} from "./API";

const activeUsersSLice = createSlice({
  name: "activeUsersData",
  initialState: {
    isLoading: false,
    activeData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddActiveUser.fulfilled, (state, { payload }) => {
      state.activeData.push(payload);
    });
    builder.addCase(fetchGetActiveUsers.fulfilled, (state, { payload }) => {
      state.activeData = payload;
    });
    builder.addCase(fetchPopActiveUser.fulfilled, (state, { payload }) => {
      state.activeData.pop(payload);
    });
  },
});
export const selectActiveUsers = (state) => state.activeUsersData;
export const activeUsersReducer = activeUsersSLice.reducer;
