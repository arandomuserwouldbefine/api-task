import { createSlice } from '@reduxjs/toolkit';
import { CountryData } from '../Thunk/Countrythunk';

const initialState = {
    countrysdata: [],
    loading: false,
    error: null
};

const countrySlice = createSlice({
    name: 'Country',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(CountryData.pending, (state) => {
                state.loading = true;
            })
            .addCase(CountryData.fulfilled, (state, action) => {
                state.loading = false;
                state.countrysdata = action.payload;
            })
            .addCase(CountryData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default countrySlice.reducer; 