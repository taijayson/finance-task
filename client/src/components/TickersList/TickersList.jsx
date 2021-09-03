import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import uploadTickers from '../../redux/tickers/tickersOperations';

import {
  getAllTickers,
  getLoading,
} from '../../redux/tickers/tickersSelectors';

import { Flex, Box, Text } from 'rebass';

import moment from 'moment';

const oldArr = [];
// const newArr = [];

const TickersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uploadTickers());
  }, [dispatch]);

  const tickers = useSelector(getAllTickers);
  const loading = useSelector(getLoading);

  let tickArr = [];
  const oldTickArr = oldArr.slice(-6);
  // console.log(tickers);

  const newYld = tickers.map((item) => {
    // console.log(item);
    return {
      ticker: item.ticker,
      yield: item.yield,
    };
  });
  const yldColorArr = () => {
    let initial = [];

    for (const i of oldTickArr) {
      const tick = newYld.map((item) => {
        if (item.name === i.name && item.yield > i.yield) {
          return 'green';
        }
        return 'red';
      });
      if (tick) {
        initial = tick;
        // return tick;
      }
    }
    return { ...initial };
  };
  console.log(yldColorArr());

  // function makeIterator(array) {
  //   var nextIndex = 0;

  //   return {
  //     next: function () {
  //       return nextIndex < array.length
  //         ? { value: array[nextIndex++], done: false }
  //         : { done: true };
  //     },
  //   };
  // }
  // var it = makeIterator(yldColorArr());
  // console.log(it.next().value);
  // console.log(it.next().value);
  // console.log(it.next().value);
  // console.log(it.next().value);
  // console.log(it.next().value);
  // console.log(it.next().value);
  // console.log(it.next().done);
  // const colorZzz = () => {
  //   const iterratorArr = yldColorArr().values();
  //   for (const item of iterratorArr) {
  //     return item;
  //   }
  // };
  // console.log(colorZzz());

  // const colorZzz = () => {
  //   for (const color of yldColorArr()) {
  //     return color;
  //   }
  // };
  // console.log(colorZzz());
  // const qweqwe = makeIterator(yldColorArr());
  // console.log(value);
  // const yldColor = () => {
  //   for (let color of yldColArr) {
  //     return color;
  //   }
  // };
  // console.log(yldColor());

  return (
    <>
      {loading && <h1 style={{ textAlign: 'center' }}>...LOADING...</h1>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Flex mx={-2} textAlign='center'>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#ffffff' bg='#000000'>
              Ticker
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#ffffff' bg='#000000'>
              Price
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#ffffff' bg='#000000'>
              Exchange
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#ffffff' bg='#000000'>
              Change
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#ffffff' bg='#000000'>
              Change Percent
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#ffffff' bg='#000000'>
              Divident
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#ffffff' bg='#000000'>
              Yield
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#ffffff' bg='#000000'>
              LTT
            </Text>
          </Box>
        </Flex>
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
            }) => {
              oldArr.push({ ticker: ticker, yield: yld });

              const time = moment(last_trade_time).format('MMM DD hh:mm:ss ');
              const dividentColor = dividend < 0.5 ? 'red' : 'green';
              const yildColor =
                yld < 0.5 ? 'red' : yld > 1 ? 'green' : 'orange';

              return (
                <li key={ticker}>
                  <Flex mx={-2} textAlign='center'>
                    <Box width={1 / 2} px={2} p={2}>
                      <Text
                        p={1}
                        color='darkblue'
                        bg='lightblue'
                        sx={{ borderRadius: 8 }}
                      >
                        {ticker}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2} p={2}>
                      <Text p={1} color='background' bg='primary'>
                        {price}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2} p={2}>
                      <Text p={1} color='background' bg='primary'>
                        {exchange}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2} p={2}>
                      <Text p={1} color='background' bg='primary'>
                        {change}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2} p={2}>
                      <Text p={1} color='background' bg='primary'>
                        {change_percent}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2} p={2}>
                      <Text p={1} color={dividentColor} bg='primary'>
                        {dividend}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2} p={2}>
                      <Text p={1} color={yildColor} bg='primary'>
                        {yld}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2} p={2}>
                      <Text p={1} color='background' bg='primary'>
                        {time}
                      </Text>
                    </Box>
                  </Flex>
                </li>
              );
            }
          )}
      </ul>
    </>
  );
};

export default TickersList;
