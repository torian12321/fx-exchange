import React, { useState, useEffect } from "react";
import { Context } from "./apiContextWallet.context";
import { ICurrency, CurrencyCodes } from './apiContextWallet.interfaces';
import { currenciesIni } from './constants';

const WalletProvider = (props: any) => {
  const { children, } = props;
  const [currencies, setCurrencies]: [any, any] = useState(currenciesIni);
  const [lastUpdate, setLastUpdate]: [any, any] = useState(Date.now())

  useEffect(() => {
    // Set a timestamp for updates.
    setLastUpdate(Date.now());
  }, [currencies]);

  const getCurrencyById = (id: CurrencyCodes) =>
    currencies.find((c: ICurrency) => c.id === id) || {};

  const addMoney = (id: CurrencyCodes, value: number = 0) => {
    setCurrencies(
      currencies.map((c: ICurrency) => (c.id === id)
        ? {
          ...c,
          value: (c.value + value),
        } : {
          ...c
        })
    );

  };

  const removeMoney = (id: CurrencyCodes, value: number = 0) => {
    addMoney(id, value * -1)
  };

  return (
    <Context.Provider
      value={{
        currencies,
        getCurrencyById,
        addMoney,
        removeMoney,
        lastUpdate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { WalletProvider };