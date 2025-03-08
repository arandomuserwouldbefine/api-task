import { configureStore } from '@reduxjs/toolkit';
import datareducer from './dataSlice/Dataslice';
import todoreducer from './dataSlice/Todoslice';
import dogapireducer from './dataSlice/Dogslice';
import countryreducer from './dataSlice/CountrySlice';

const store = configureStore({
  reducer: {
    lunchdata: datareducer,
     todo:todoreducer,
     dogapislice:dogapireducer,
     Country: countryreducer
  }
});

export default store;
