import { createAction } from '@reduxjs/toolkit';

const loadTickersRequest = createAction('Tickers/loadTickersRequest');
const loadTickersSuccess = createAction('Tickers/loadTickersSuccess');
const loadTickersError = createAction('Tickers/loadTickersError');

export { loadTickersRequest, loadTickersSuccess, loadTickersError };
