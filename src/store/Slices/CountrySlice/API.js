import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";

const { GET } = UseRequest();

export const getAllCountries = createAsyncThunk("countryData/getAllCountries", async () => {
  const result = await GET("http://localhost:3005/countryList");
  return result;
});

