import { createSlice } from "@reduxjs/toolkit";
import { CountryData } from "../Thunk/Countrythunk";



const Countryslice = createSlice({
    name:"counrty",
    initialState:{
        countrysdata:[],
        loading:false,
        error:false,
    },
    extraReducers:(builder)=>{
        builder
             .addCase(CountryData.pending, (state) => {
               state.loading = true;
               state.error = null;
             })
             .addCase(CountryData.fulfilled, (state, action) => {
               state.loading = false;
               console.log('Payload:', action.payload);
               state.countrysdata = action.payload
               console.log("statedata",state.data);
             })
             .addCase(CountryData.rejected, (state, action) => {
               state.loading = false;
               state.error = action.error.message;
             });
            }
        });
export  default Countryslice.reducer;