import { createSlice } from "@reduxjs/toolkit";
import { fetchAddMessages, fetchGetMessages } from "./API";

const messagesDataSlice = createSlice({
  name: "allMessagesData",
  initialState: {
    isLoading: false,
    messagesData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMessages.fulfilled, (state, { payload }) => {
        state.messagesData = payload;
      })
      .addCase(fetchAddMessages.fulfilled, (state, { payload }) => {
        state.messagesData.push(payload.newMessageData);
      });
  },
});
export const selectMessagesData = (state) => state.allMessagesData;
export const messagesReducer = messagesDataSlice.reducer;
