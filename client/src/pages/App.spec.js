import { shallow } from 'enzyme';

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

  // it('should contain TickersList', () => {

  //   const wrapper = component.find('.tickersLIst');
  //   expect(wrapper.length).toBe(1);
  // });
});
