import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  loadTickersRequest,
  loadTickersSuccess,
  loadTickersError,
} from './tickersActions';

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

export default combineReducers({
  tickers,
  loading,
  error,
});
