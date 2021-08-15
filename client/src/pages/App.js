// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import uploadTickers from '../redux/tickers/tickersOperations';
import List from '../components/TickersList/TickersList';
import './App.css';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(uploadTickers());
  // }, [dispatch]);

  return (
    <div className='App'>
      <header className='App-header'>Hello world!!!</header>
      <List />
    </div>
  );
};

export default App;
