import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllTickers,
  getLoading,
} from '../../redux/tickers/tickersSelectors';

import uploadTickers from '../../redux/tickers/tickersOperations';

const List = () => {
  const dispatch = useDispatch();
  const tickers = useSelector(getAllTickers);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(uploadTickers());
  }, [dispatch]);

  return (
    <div className='List'>
      {loading && <h1>LOADING...</h1>}
      <ul className='list'>
        {tickers.length > 0 &&
          tickers.map(
            ({
              ticker,
              exchange,
              price,
              change,
              change_percent,
              dividend,
              yield: yld,
              last_trade_time,
            }) => (
              <li key={ticker}>
                Name: {ticker}, Exch: {exchange}, Price:
                {price}, Change: {change}, Ch%: {change_percent}, DivD:
                {dividend}
                {dividend}, Yield: {yld}, LTT: {last_trade_time}
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default List;
