import React, { useState, useEffect } from "react";
import { useFetch } from 'hooks';
import { Context } from "./apiContextCurrencies.context";
import { ICurrency } from './apiContextCurrencies.interfaces';
import { API, currenciesIni } from './constants';

const CurrenciesProvider = (props: any) => {
  const { children, } = props;
  const {
    data: currenyValues,
    reload,
  } = useFetch(`https://openexchangerates.org/api/latest.json?app_id=${API}`);
  const { data: currenyNames } = useFetch(`https://openexchangerates.org/api/currencies.json`);
  const [currencies, setCurrencies]: [any, any] = useState(currenciesIni);

  useEffect(() => {
    if (!!currenyValues) {
      const { rates = [] } = currenyValues;

      setCurrencies(
        currencies.map((c: ICurrency) => ({
          ...c,
          rate: rates[c.id],
        }))
      );
    }
  }, [currenyValues]);

  useEffect(() => {
    if (!!currenyNames) {
      setCurrencies(
        currencies.map((c: ICurrency) => ({
          ...c,
          name: currenyNames[c.id] || ''
        }))
      )
    }
  }, [currenyNames]);

  const updateRates = () => {
    reload();
  }


  const getCurrencyById = (id: string) =>
    currencies.find((c: ICurrency) => c.id === id) || {};

  return (
    <Context.Provider
      value={{
        currencies,
        getCurrencyById,
        updateRates,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { CurrenciesProvider };