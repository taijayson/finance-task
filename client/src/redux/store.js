import { configureStore } from '@reduxjs/toolkit';
import tickersReducer from './tickers/tickersReducers';
// import { combineReducers } from 'redux';
// import authReducer from './auth/authReducer';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
  //   devTools: process.env.NODE_ENV === 'development',
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
});

// const persistor = persistStore(store);

export default store;
