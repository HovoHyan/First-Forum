import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { POST, GET, DELETE, PATCH } = UseRequest();

export const fetchGetAllCountries = createAsyncThunk(
  "countryData/fetchGetAllCountries",
  async () => {
    const result = await GET("http://localhost:3005/countryList");
    return result;
  }
);

export const fetchGetAllUsers = createAsyncThunk(
  "allUsersData/fetchGetAllUsers",
  async () => {
    const result = await GET("http://localhost:3005/usersData");
    return result;
  }
);

export const fetchAddNewUser = createAsyncThunk(
  "allUsersData/fetchAddNewUser",
  async (newUser) => {
    const result = await POST("http://localhost:3005/usersData", newUser);
    return result;
  }
);

export const fetchGetActiveUsers = createAsyncThunk(
  "allUsersData/fetchGetActiveUsers",
  async () => {
    const result = await GET("http://localhost:3005/activeLoginData");
    return result;
  }
);

export const fetchAddActiveUser = createAsyncThunk(
  "allUsersData/fetchAddActiveUser",
  async (newUser) => {
    const result = await POST("http://localhost:3005/activeLoginData", newUser);
    return result;
  }
);

export const fetchPopActiveUser = createAsyncThunk(
  "allUsersData/fetchPopActiveUser",
  async (id) => {
    const result = await DELETE(`http://localhost:3005/activeLoginData/${id}`);
    return result;
  }
);

export const fetchAddNewPost = createAsyncThunk(
  "postsData/fetchAddNewPost",
  async ({ data, updateData }) => {
    const result = await POST("http://localhost:3005/technicaData", data);
    const result2 = await PATCH({
      url: `http://localhost:3005/usersData/${data.userId}`,
      updateData,
      newData: [...updateData, data.id],
    });
    return { result, result2 };
  }
);


