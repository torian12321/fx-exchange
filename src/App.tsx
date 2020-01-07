import React from 'react';
import logo from './logo.svg';
import { CurrenciesProvider, useCurrenciesState } from './apiContext';
// import { useInterval } from 'hooks';
import { WidgetMoneyExchange } from 'components/widgets';
import './App.css';

const A = () => {
  const { currencies, getCurrencyById, updateRates } = useCurrenciesState();
  // useInterval(updateRates, 10000);

  React.useEffect(() => {
    console.log('currencies', currencies);
    const a = getCurrencyById('EUR');

    console.log(a);
  }, [currencies]);

  return (
    <div>bla bla </div>
  )
}
const App: React.FC = () => {
  return (
    <CurrenciesProvider>
      <div className="App">
        <A />
        <WidgetMoneyExchange />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </CurrenciesProvider>
  );
}

export default App;
