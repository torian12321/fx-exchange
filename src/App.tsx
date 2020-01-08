import React from 'react';
import { CurrenciesProvider, WalletProvider } from './apiContext';
import { Layout } from './App/Layout';

const App: React.FC = () => (
  <CurrenciesProvider>
    <WalletProvider>
      <Layout />
    </WalletProvider>
  </CurrenciesProvider>
);

export default App;
