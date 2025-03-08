import { createSlice } from '@reduxjs/toolkit';
import { getdata } from '../Thunk/Thunk';

const DataSlice = createSlice({
  name:'lunchdata',
  initialState: {
    data: [],
    loading: false,
    error: null,
  
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getdata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getdata.fulfilled, (state, action) => {
        state.loading = false;
        console.log('Payload:', action.payload);
        state.data = action.payload; 
      })
      .addCase(getdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
 
});

export default DataSlice.reducer;
