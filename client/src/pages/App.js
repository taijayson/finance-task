import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTickers, getLoading } from '../redux/tickers/tickersSelectors';
import TickersList from '../components/TickersList/TickersList';
import uploadTickers from '../redux/tickers/tickersOperations';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uploadTickers());
  }, [dispatch]);

  return (
    <div className='App'>
      <header className='App-header'>TickFin</header>
      <TickersList className='tickersList' />
    </div>
  );
};

export default App;
