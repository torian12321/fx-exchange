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


  const [from, setFrom]: [any, any] = useState('');
  const [to, setTo]: [any, any] = useState('');

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

  const rangeVal = (num: number, min: number, max: number) => {
    const n = num < min ? min : num;
    return n > max ? max : n;
  }
  const styleNumber = (num: number) => {
    // TODO: remove leading 0s.

    // Remove decimals if required
    return Number((num * 1).toFixed(2));
  };

  const handleFromChange = (v: any) => {
    const num = rangeVal(v, 0, maxVal);

    setFrom(styleNumber(num));
    setTo(styleNumber(num * conversionRate));
  }
  const handleToChange = (v: any) => {
    const num = rangeVal(v, 0, (maxVal * conversionRate));

    setFrom(styleNumber(num / conversionRate));
    setTo(styleNumber(num));
  }

  return (
    <React.Fragment>
      {!!isOnline ? (
        <>
          <div css={styles.moneyBox}>
            <Select
              options={currList}
              loading={!!isLoading}
              onChange={selectFromChange}
              css={styles.moneyBox__select}
            />
            <Input
              value={from}
              onChange={handleFromChange}
              css={styles.moneyBox__input}
              disabled={isLoading}
            />
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
            <Input
              value={to}
              onChange={handleToChange}
              css={styles.moneyBox__input}
              disabled={isLoading}
            />
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
