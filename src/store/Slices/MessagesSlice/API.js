import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST } = UseRequest();

export const fetchAddMessages = createAsyncThunk("allMessagesData/fetchAddMessages", async (newMessage) => {
  const newMessageData = await POST("http://localhost:3005/messagesData", newMessage);

  return { newMessageData };
});
