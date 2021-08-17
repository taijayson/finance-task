import { createAction } from '@reduxjs/toolkit';

const loadTickersRequest = createAction('tickers/loadTickersRequest');
const loadTickersSuccess = createAction('tickers/loadTickersSuccess');
const loadTickersError = createAction('tickers/loadTickersError');

export { loadTickersRequest, loadTickersSuccess, loadTickersError };
