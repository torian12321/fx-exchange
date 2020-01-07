import React from 'react';
import logo from './logo.svg';
import { CurrenciesProvider, useCurrenciesState } from './apiContext';
import './App.css';

const A = () => {
  const { currencies, getCurrencyById } = useCurrenciesState();

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
