import React from 'react';
import { CurrenciesProvider } from './apiContext';
import { Layout } from './App/Layout';

const App: React.FC = () => (
  <CurrenciesProvider>
    <Layout />
  </CurrenciesProvider>
);

export default App;
