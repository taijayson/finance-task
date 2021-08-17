// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import theme from '../services/theme';
import { ThemeProvider } from 'theme-ui';
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
      <header className='App-header'>TickFin</header>
      <ThemeProvider theme={theme}>
        <List />
      </ThemeProvider>
    </div>
  );
};

export default App;
