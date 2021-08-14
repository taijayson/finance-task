import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  loadTickersRequest,
  loadTickersSuccess,
  loadTickersError,
} from './TickersActions';

const tickers = createReducer([], {
  [loadTickersSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [loadTickersRequest]: () => true,
  [loadTickersSuccess]: () => false,
  [loadTickersError]: () => false,
});

const error = createReducer(null, {
  [loadTickersRequest]: () => null,
  [loadTickersError]: (_, { payload }) => payload,
});

export default combineReducer({
  tickers,
  loading,
  error,
});
