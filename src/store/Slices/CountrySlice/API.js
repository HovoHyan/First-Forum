import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { GET } = UseRequest();

export const fetchGetAllCountries = createAsyncThunk("countryData/fetchGetAllCountries", async () => {
  const result = await GET("http://localhost:3005/countryList");
  return result;
});

