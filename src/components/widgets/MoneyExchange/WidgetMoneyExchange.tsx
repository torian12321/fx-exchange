import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  CurrenciesProvider, useCurrenciesState,
  WalletProvider, useWalletState,
} from 'apiContext';
import { useInterval, useIsOnline } from 'hooks';
import { Button, Form, useForm } from 'components/ui';
import * as styles from './WidgetMoneyExchange.styles';
import { ConversionBadge, Select, Input } from './components';

const currList = [
  { value: 'EUR', label: 'Euro' },
  { value: 'USD', label: 'Dollar' },
  { value: 'GBP', label: 'Pound' },
];

const Content = ({
  onSubmit,
  isOnline = false,
  isLoading = false,
}: any) => {
  const { getCurrencyById, updateRates, lastUpdate } = useCurrenciesState();
  const { getCurrencyById: getUserCurr } = useWalletState();

  const [conversionRate, setConversionRate] = useState(100);
  const [currFrom, setCurrFrom] = useState('EUR');
  const [currTo, setCurrTo] = useState('USD');
  const [maxVal, setMaxVal] = useState(0);


  const [from, setFrom]: [any, any] = useState(0);
  const [to, setTo]: [any, any] = useState(0);

  // Get periodically new rate values
  useInterval(updateRates, 10000);

  useEffect(() => {
    const c = getUserCurr(currFrom);

    // Max transaction size is based on users wallet.
    setMaxVal(c.value || 0);
  }, [currFrom]);

  useEffect(() => {
    resetFields();
  }, [currFrom, currTo]);

  useEffect(() => {
    const f = getCurrencyById(currFrom);
    const t = getCurrencyById(currTo);

    if (f.rate && t.rate) {
      setConversionRate(t.rate / f.rate)
    }

  }, [currFrom, currTo, lastUpdate]);


  const resetFields = () => {
    setFrom('');
    setTo('');
  }
  const handleClick = () => {
    onSubmit({
      from: currFrom,
      to: currTo,
      ammount: from,
      conversionRate,
    });

    resetFields();
  }

  const selectFromChange = (opVal: string) => {
    setCurrFrom(opVal);
  }
  const selectToChange = (opVal: string) => {
    setCurrTo(opVal);
  }


  const [name, setName]: [any, any] = useState('');
  const [surname, setSurname]: [any, any] = useState('');

  const rangeVal = (num: number, min: number, max: number) => {
    const n = num < min ? min : num;
    return n > max ? max : n;
  }
  const styleNumber = (num: number) => {
    // TODO: remove leading 0s.

    // Remove decimals if required
    return Number((num * 1).toFixed(2));
  };

  const handleName = (v: any) => {
    const num = rangeVal(v, 0, maxVal);

    setName(styleNumber(num));
    setSurname(styleNumber(num * conversionRate));
  }
  const handleSurname = (v: any) => {
    const num = rangeVal(v, 0, (maxVal * conversionRate));

    setName(styleNumber(num / conversionRate));
    setSurname(styleNumber(num));
  }

  return (
    <React.Fragment>
      {!!isOnline ? (
        <>
          <div css={styles.moneyBox}>
            <input
              type="number"
              value={name}
              onChange={e => handleName(e.target.value)}
            />
            <input
              type="number"
              value={surname}
              onChange={e => handleSurname(e.target.value)}
            />



            <Select
              options={currList}
              loading={!!isLoading}
              onChange={selectFromChange}
              css={styles.moneyBox__select}
            />
            <Input
              value={surname}
              onChange={handleSurname}
              css={styles.moneyBox__input}
              disabled={isLoading}
            />
            {/* <Input
              value={to}
              name={FIELD_FROM_VAL}
              css={styles.moneyBox__input}
              placeholder='0' max={maxVal}
              onChange={updateFrom}
              disabled={isLoading}
            /> */}
          </div>
          <ConversionBadge
            caption={`1 ${currFrom} is ${conversionRate.toFixed(2)} ${currTo}`}
            precentage={(from / maxVal) * 100}
          />
          <div css={styles.moneyBox}>
            <Select
              options={currList}
              loading={!!isLoading}
              onChange={selectToChange}
              defaultValue={1}
              css={styles.moneyBox__select}
            />
            {/* <Input
              value={to}
              name={FIELD_TO_VAL}
              css={styles.moneyBox__input}
              placeholder='0'
              max={maxVal * conversionRate}
              onChange={updateTo}
              disabled={isLoading}
            /> */}
          </div>
        </>
      ) : <span>You are currently offline...</span>
      }
      <Button caption='Exchange' onClick={handleClick} disabled={!isOnline} block isLoading={!!isLoading} />
    </React.Fragment>
  )
}

export const WidgetMoneyExchange = ({ ...rest }: any) => {
  const isOnline = useIsOnline();

  return (
    <Form>
      <div css={[
        styles.wrapper,
        isOnline && styles.wrapperActive
      ]}>
        <Content {...rest} isOnline={isOnline} />
      </div>
    </Form>
  )
};

export const WidgetMoneyExchangeStorybook = () => (
  <CurrenciesProvider>
    <WalletProvider>
      <WidgetMoneyExchange />
    </WalletProvider>
  </CurrenciesProvider>
);
