import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { GET, POST, DELETE } = UseRequest();

export const fetchAddMessages = createAsyncThunk(
  "messagesData/fetchAddMessages",
  async (newMessage) => {
    const newMessageData = await POST(
      "http://localhost:3005/messagesData",
      newMessage
    );
    return { newMessageData };
  }
);

export const fetchGetMessages = createAsyncThunk(
  "messagesData/fetchGetMessages",
  async () => {
    const result = await GET("http://localhost:3005/messagesData");
    return result;
  }
);

export const fetchDeleteMessages = createAsyncThunk(
  "messagesData/fetchDeleteMessages",
  async (message) => {
    const deletedMessage = await DELETE(
      `http://localhost:3005/messagesData/${message.id}`
    );
    console.log(message.id);
    return message.id;
  }
);
