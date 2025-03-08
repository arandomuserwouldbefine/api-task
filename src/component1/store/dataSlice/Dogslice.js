import { createSlice } from "@reduxjs/toolkit";
import { Doggetdata } from "../Thunk/Dogapithunk";
const DogapiSlice = createSlice({
  name: "dogapislice",
  initialState: {
    dogapi: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Doggetdata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Doggetdata.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Payload:", action.payload);
        state.dogapi = action.payload;
        console.log(state.dogapi,"dogsatete");
        
      })
      .addCase(Doggetdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default DogapiSlice.reducer;
