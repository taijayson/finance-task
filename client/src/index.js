import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import mainStore from './redux/store';

ReactDOM.render(
  <Provider store={mainStore.store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
