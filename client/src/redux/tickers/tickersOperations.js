import socket from '../../services/socket';

import {
  loadTickersRequest,
  loadTickersSuccess,
  loadTickersError,
} from './tickersActions';

const uploadTickers = () => (dispatch) => {
  dispatch(loadTickersRequest());
  return socket
    .on('ticker')
    .then(({ data }) => dispatch(loadTickersSuccess(data)))
    .catch((err) => dispatch(loadTickersError(err.message)));
};

export default uploadTickers;
