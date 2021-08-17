import * as reactRedux from 'react-redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import TickersList from './TickersList';
import store from '../../redux/store';

describe('testing TickersList', () => {
  const useMock = jest.spyOn(reactRedux, 'useSelector');
  beforeEach(() => {
    useMock.mockClear();
  });

  it('should renders TickersList element same as example', async () => {
    await useMock.mockReturnValue([
      {
        ticker: 'TSLA',
        exchange: 'NASDAQ',
        price: 299.64,
        change: 19.5,
        change_percent: 0.16,
        dividend: 0.16,
        yield: 0.16,
        last_trade_time: '2021-08-17T07:22:15.000Z',
      },
    ]);
    const component = shallow(
      <Provider store={store}>
        <TickersList />
      </Provider>
    );
    expect(component.exists()).toBe(true);
  });
});
