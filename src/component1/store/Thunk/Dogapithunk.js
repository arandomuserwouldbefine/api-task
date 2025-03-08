import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Doggetdata = createAsyncThunk(
    'dogapi/fetchdata',
    async()=>{
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        console.log('Api response:',response.data);
        return response.data;
    }
)