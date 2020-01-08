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
import { ConversionBadge, /* CurrencyBox, */ Select, Input } from './components';

const FIELD_FROM_VAL = 'from';
const FIELD_TO_VAL = 'to';
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
  const { submit, values, setValue, getValue, reset } = useForm();

  const [conversionRate, setConversionRate] = useState(100);
  const [currFrom, setCurrFrom] = useState('EUR');
  const [currTo, setCurrTo] = useState('USD');
  const [maxVal, setMaxVal] = useState(0);

  const val = getValue(FIELD_FROM_VAL);

  // Get periodically new rate values
  useInterval(updateRates, 10000);

  useEffect(() => {
    const c = getUserCurr(currFrom);

    // Max transaction size is based on users wallet.
    setMaxVal(c.value || 0);
  }, [currFrom]);

  useEffect(() => {
    reset();
  }, [currFrom, currTo]);

  useEffect(() => {
    const f = getCurrencyById(currFrom);
    const t = getCurrencyById(currTo);

    if (f.rate && t.rate) {
      setConversionRate(t.rate / f.rate)
    }

  }, [currFrom, currTo, lastUpdate]);



  const handleClick = () => {
    onSubmit({
      from: currFrom,
      to: currTo,
      ammount: val, //getValue(FIELD_FROM_VAL),
      conversionRate,
    });
  }

  const selectFromChange = (opVal: string) => {
    console.log(opVal)
    setCurrFrom(opVal);
  }
  const selectToChange = (opVal: string) => {
    setCurrTo(opVal);
  }

  const updateTo = (val: any) => {
    // setValue(
    //   FIELD_TO_VAL,
    //   (val * conversionRate).toFixed(2)
    // );
  }
  const updateFrom = (val: any) => {
    setValue(
      FIELD_FROM_VAL,
      (val / conversionRate).toFixed(2)
    );
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
              name={FIELD_FROM_VAL}
              css={styles.moneyBox__input}
              placeholder='0' max={maxVal}
              onChange={updateTo}
              disabled={isLoading}
            />
          </div>
          <ConversionBadge
            caption={`1 ${currFrom} is ${conversionRate.toFixed(2)} ${currTo}`}
            precentage={(values.from / maxVal) * 100}
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
              value={(val * conversionRate)}
              name={FIELD_TO_VAL}
              css={styles.moneyBox__input}
              placeholder='0'
              max={maxVal * conversionRate}
              onChange={updateFrom}
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
    <Form initialValues={{
      [FIELD_FROM_VAL]: 0,
      [FIELD_TO_VAL]: 0,
    }}>
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
