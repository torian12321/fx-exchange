import React from 'react';
import logo from './logo.svg';
import { useFetchCurrencies } from './components/hooks';
import './App.css';

const App: React.FC = () => {
  const { currencies, errors } = useFetchCurrencies();

  React.useEffect(() => {
    console.log('currencies', currencies);
  }, [currencies]);
  React.useEffect(() => {
    console.log('errors', errors);
  }, [errors]);

  return (
    <div className="App">
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
  );
}

export default App;
