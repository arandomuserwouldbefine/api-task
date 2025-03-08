import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getdata = createAsyncThunk(
  'lunches/fetchdata',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v5/launches/latest');
      console.log('API response:', response.data); 
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
