import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const todosdata = createAsyncThunk(
    'todos/todosdata',
    async()=>{
           const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log('API response:', response.data); 
            return response.data;
       })