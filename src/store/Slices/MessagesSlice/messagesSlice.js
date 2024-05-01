import { createSlice } from "@reduxjs/toolkit";
import { fetchAddMessages } from "./API";

const messagesData = createSlice({
  name: "allMessagesData",
  initialState: {
    isLoading: false,
    messagesData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddMessages.fulfilled, (state, { payload }) => {
      state.messagesData.push(payload);
    });
  },
});
export const selectMessagesData = (state) => state.allMessagesData;
export const messagesReducer = messagesData.reducer;
