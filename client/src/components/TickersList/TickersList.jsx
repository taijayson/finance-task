import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllTickers,
  getLoading,
} from '../../redux/tickers/tickersSelectors';

// import uploadTickers from '../../redux/tickers/tickersOperations';

import { Flex, Box, Text } from 'rebass';

import moment from 'moment';
// import variants from '../../services/theme';

// import usePrev from '../../services/usePrev';

// import variants from '../../services/variants';
// console.log(variants);
const TickersList = () => {
  const tickers = useSelector(getAllTickers);
  const loading = useSelector(getLoading);
  return (
    <>
      {loading && <h1>LOADING...</h1>}
      <ul style={{ listStyle: 'none' }}>
        <Flex mx={-2}>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#000000' bg='primary'>
              Ticker
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#000000' bg='primary'>
              Price
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#000000' bg='primary'>
              Exchange
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#000000' bg='primary'>
              Change
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#000000' bg='primary'>
              Change Percent
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#000000' bg='primary'>
              Divident
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#000000' bg='primary'>
              Yield
            </Text>
          </Box>
          <Box width={1 / 2} px={2}>
            <Text p={1} color='#000000' bg='primary'>
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
              const time = moment(last_trade_time).format('MMM DD hh:mm:ss ');
              const colorSwitch = change_percent < 0.5 ? 'up' : 'down';
              const yildColor =
                yld < 0.5 ? 'red' : yld > 1 ? 'green' : 'orange';
              // console.log(colorSwitch);
              // let color = '';
              // if (prevNum) {
              //   console.log('old', prevNum);
              // }
              // console.log('new', price);
              // setPrevNum(price);
              return (
                <li key={ticker}>
                  <Flex mx={-2}>
                    <Box width={1 / 2} px={2}>
                      <Text p={1} color='background' bg='primary'>
                        {ticker}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2}>
                      <Text p={1} color='background' bg='primary'>
                        {price}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2}>
                      <Text p={1} color='background' bg='primary'>
                        {exchange}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2}>
                      <Text p={1} color='background' bg='primary'>
                        {change}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2}>
                      <Text p={1} color='background' bg='primary'>
                        {change_percent}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2}>
                      <Text p={1} color='background' bg='primary'>
                        {dividend}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2}>
                      <Text p={1} color={yildColor} bg='primary'>
                        {yld}
                      </Text>
                    </Box>
                    <Box width={1 / 2} px={2}>
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
