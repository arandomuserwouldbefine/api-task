import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const CountryData = createAsyncThunk(
    'country/fetchdata',
    async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      console.log("responsedata", response);
      return response.data;
    }
);