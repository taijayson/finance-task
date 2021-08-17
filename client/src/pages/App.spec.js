import { shallow } from 'enzyme';
import TickersList from '../components/TickersList/TickersList';
import { Heading } from 'rebass';

import App from './App';

const setUp = (props) => shallow(<App {...props} />);

describe('testing react App', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should renders App page', () => {
    expect(component.exists()).toBe(true);
  });

  it('should contain Heading', () => {
    const wrapper = component.find(Heading);
    expect(wrapper.length).toBe(1);
  });

  it('should contain TickersList', () => {
    const wrapper = component.find(TickersList);
    expect(wrapper.exists()).toBe(true);
  });
});
