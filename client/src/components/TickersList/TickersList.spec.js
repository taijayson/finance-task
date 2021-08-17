import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';
import TickersList from './TickersList';

describe('testing TickersList', () => {
  const useMock = jest.spyOn(reactRedux, 'useSelector');
  beforeEach(() => {
    useMock.mockClear();
  });

  it('should renders TickersList same as required', async () => {
    await useMock.mockReturnValue([
      {
        ticker: 'GOOGL',
        exchange: 'NASDAQ',
        price: 237.08,
        change: 154.38,
        change_percent: 0.1,
        dividend: 0.46,
        yield: 1.18,
        last_trade_time: '2021-04-30T11:53:21.000Z',
      },
    ]);
    const component = shallow(<TickersList />);
    expect(component.exists()).toBe(true);
  });
});
