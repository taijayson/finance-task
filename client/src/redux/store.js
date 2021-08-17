import { configureStore } from '@reduxjs/toolkit';
import tickersReducer from './tickers/tickersReducers';

const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
});

export default store;
