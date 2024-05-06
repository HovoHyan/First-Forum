import { createSlice } from "@reduxjs/toolkit";
import { fetchAddMessages, fetchDeleteMessages, fetchGetMessages } from "./API";

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
      })
      .addCase(fetchDeleteMessages.fulfilled, (state, { payload }) => {
        state.messagesData = state.messagesData.filter(
          (message) => message.id !== payload
        );
      });
  },
});
export const selectMessagesData = (state) => state.allMessagesData;
export const messagesReducer = messagesDataSlice.reducer;
