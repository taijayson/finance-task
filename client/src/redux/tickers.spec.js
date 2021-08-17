import store from './store';
import SocketMock from 'socket.io-mock';

import {
  loadTickersRequest,
  loadTickersSuccess,
  loadTickersError,
} from './tickers/tickersActions';
import uploadTickers from './tickers/tickersOperations';
import reducers from './tickers/tickersReducers';

describe('testing actions', () => {
  it('loadTickersRequest should return {}', () => {
    expect(loadTickersRequest()).toMatchObject({
      type: 'tickers/loadTickersRequest',
    });
  });
  it('loadTickersSuccess should return {}', () => {
    expect(loadTickersSuccess(11112222)).toMatchObject({
      type: 'tickers/loadTickersSuccess',
      payload: 11112222,
    });
  });
  it('loadTickersError should return {}', () => {
    expect(loadTickersError()).toMatchObject({
      type: 'tickers/loadTickersError',
    });
  });
});

describe('testing operations', () => {
  const socket = new SocketMock();

  it('uploadTickers should return tickers in state', () => {
    socket.on('ticker', function (data) {
      expect(data).toBe('connect');
    });
    socket.socketClient.emit('ticker', 'connect');

    const expected = {
      tickers: {
        tickers: [],
        loading: true,
        error: null,
      },
    };

    store.dispatch(uploadTickers());

    expect(store.getState()).toMatchObject(expected);
  });
});

describe('testing reducers', () => {
  const initialState = {
    tickers: [],
    loading: false,
    error: null,
  };
  it('reducer should return tickers in state', () => {
    const successAction = {
      type: 'tickers/loadTickersSuccess',
      payload: ['ticker'],
    };

    const testState = reducers(initialState, successAction);

    expect(testState).toMatchObject({
      tickers: ['ticker'],
      loading: false,
      error: null,
    });
  });

  it('reducer should return loading in state', () => {
    const requestAction = {
      type: 'tickers/loadTickersRequest',
    };

    const testState = reducers(initialState, requestAction);

    expect(testState).toMatchObject({
      tickers: [],
      loading: true,
      error: null,
    });
  });

  it('reducer should return error in state', () => {
    const errorAction = {
      type: 'tickers/loadTickersError',
      payload: { message: 'fail' },
    };

    const testState = reducers(initialState, errorAction);

    expect(testState).toMatchObject({
      tickers: [],
      loading: false,
      error: { message: 'fail' },
    });
  });
});
