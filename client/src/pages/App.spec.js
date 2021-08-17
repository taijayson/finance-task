import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import store from '../redux/store';

// const initialState = { output: 10 };
// const mockStore = configureStore();
const setUp = (props) =>
  shallow(
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );

describe('testing react App', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should renders App page', () => {
    expect(component.exists()).toBe(true);
  });

  // it('should contain TickersList', () => {
  //   // const component = shallow(
  //   //   <Provider store={store}>
  //   //     <App />
  //   //   </Provider>
  //   // );
  //   const wrapper = component.find('.tickersLIst');
  //   expect(wrapper.length).toBe(1);
  // });
});
