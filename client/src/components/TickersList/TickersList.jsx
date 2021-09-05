import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePrevious from '../../hooks/usePrevious';

import uploadTickers from '../../redux/tickers/tickersOperations';

import {
  getAllTickers,
  getLoading,
} from '../../redux/tickers/tickersSelectors';

import { Flex, Box, Text } from 'rebass';

import moment from 'moment';

const TickersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uploadTickers());
  }, [dispatch]);

  const tickers = useSelector(getAllTickers);
  const loading = useSelector(getLoading);

  const prevTickers = usePrevious(tickers) || [];

  const newTickers = tickers.map((item) => {
    const prevYld = prevTickers.find((it) => {
      if (item.ticker === it.ticker) {
        return it;
      }
      return null;
    });

    if (prevYld && item.ticker === prevYld.ticker) {
      return { ...item, prevYield: prevYld.yield };
    }
    return item;
  });

  console.log(newTickers);

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
        {newTickers.length > 0 &&
          newTickers.map(
            ({
              ticker,
              exchange,
              price,
              change,
              change_percent,
              dividend,
              yield: yld,
              last_trade_time,
              prevYield,
            }) => {
              const time = moment(last_trade_time).format('MMM DD hh:mm:ss ');
              const dividentColor = dividend < 0.5 ? 'red' : 'green';
              console.log(yld);
              const yildColor = yld < prevYield ? 'red' : 'green';

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
