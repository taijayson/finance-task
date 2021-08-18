import { Heading } from 'rebass';
import TickersList from '../components/TickersList/TickersList';

const App = () => {
  return (
    <>
      <Heading
        p={2}
        textAlign='center'
        backgroundColor='#282c34'
        color='lightgrey'
      >
        TickApp
      </Heading>

      <TickersList />
    </>
  );
};

export default App;
