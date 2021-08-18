import socket from '../../services/socket';

import {
  loadTickersRequest,
  loadTickersSuccess,
  loadTickersError,
} from './tickersActions';

const uploadTickers = () => (dispatch) => {
  dispatch(loadTickersRequest());
  return socket.on('ticker', (data) => {
    if (data) {
      return dispatch(loadTickersSuccess(data));
    }
    return dispatch(loadTickersError(new Error('Tickers fetching failed')));
  });
};

export default uploadTickers;
