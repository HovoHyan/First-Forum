import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { GET } = UseRequest();

export const fetchGetTexnikaData = createAsyncThunk("texnikaData/fetchGetTexnikaData", async () => {
  const result = await GET("http://localhost:3005/technicaData");
  return result;
});


