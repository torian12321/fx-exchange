import React, { useState, useEffect } from "react";
import { useFetch } from 'hooks';
import { Context } from "./apiContextCurrencies.context";
import { ICurrency } from './apiContextCurrencies.interfaces';
import { API, currenciesIni } from './constants';

const CurrenciesProvider = (props: any) => {
  const { children, } = props;

  const {
    data: currenyValues,
    isFetching: loadingValues,
    reload,
  } = useFetch(`https://openexchangerates.org/api/latest.json?app_id=${API}`);
  const {
    data: currenyNames,
    isFetching: loadingNames,
  } = useFetch(`https://openexchangerates.org/api/currencies.json`);

  const [currencies, setCurrencies]: [any, any] = useState(currenciesIni);
  const [isFetching, setIsFetching]: [boolean, any] = useState(false);
  const [lastUpdate, setLastUpdate]: [any, any] = useState(Date.now())

  useEffect(() => {
    setIsFetching(loadingValues || loadingNames)
  }, [loadingValues, loadingNames]);

  useEffect(() => {
    // Set a timestamp for updates.
    setLastUpdate(Date.now());
  }, [currencies]);

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
        isFetching,
        lastUpdate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { CurrenciesProvider };