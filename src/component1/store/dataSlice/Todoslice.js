import { createSlice } from "@reduxjs/toolkit";
import { todosdata } from "../Thunk/Todothunk"

const Todoslice = createSlice({
    name:"todo",
    initialState:{
        todosdatas:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(todosdata.pending,(state)=>{
            state.loading = true;
            state.error =null;
            
        })
        .addCase(todosdata.fulfilled,(state,action)=>{
            state.loading = false;
            console.log('Payload:',action.payload);
            state.todosdatas = action.payload; 
    
           
        })
        .addCase(todosdata.rejected,(state,action) =>{
                state.loading = false;
                state.error = action.error.message;
              })}
})
export default Todoslice.reducer;