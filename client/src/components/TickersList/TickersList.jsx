import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllTickers,
  getLoading,
} from '../../redux/tickers/tickersSelectors';

import uploadTickers from '../../redux/tickers/tickersOperations';

import { Flex, Box, Text } from 'rebass';

const List = () => {
  const dispatch = useDispatch();
  const tickers = useSelector(getAllTickers);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(uploadTickers());
  }, [dispatch]);

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
              ChangePercent
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
            }) => (
              <li key={ticker}>
                {/* LTT: {last_trade_time} */}
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
                    <Text p={1} color='background' bg='primary'>
                      {yld}
                    </Text>
                  </Box>
                </Flex>
              </li>
            )
          )}
      </ul>
    </>
  );
};

export default List;
