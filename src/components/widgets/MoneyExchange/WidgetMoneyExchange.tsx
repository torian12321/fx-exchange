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

const currList = [
  { value: 'EUR', label: 'Euro'},
  { value: 'USD', label: 'Dollar'},
  { value: 'GBP', label: 'Pound'},
];
const FIELD_FROM_VAL = 'from';
const FIELD_TO_VAL = 'from';

const Content = ({
  isOnline = false,
  isLoading = false,
} : any) => {
  const { getCurrencyById, updateRates, lastUpdate } = useCurrenciesState();
  const { getCurrencyById: getUserCurr } = useWalletState();
  const { submit, values } = useForm();

  const [conversionRate, setConversionRate] = useState(100);
  const [currFrom, setCurrFrom] = useState('EUR');
  const [currTo, setCurrTo] = useState('USD');
  const [maxVal, setMaxVal] = useState(0);

  // Get periodically new rate values
  useInterval(updateRates, 10000);
  
  useEffect(() => {
    const c = getUserCurr(currFrom);

    // Max transaction size is based on users wallet.
    setMaxVal(c.value || 0);
  }, [currFrom]);

  useEffect(() => {
    console.log('aaaa', currFrom);
    const f = getCurrencyById(currFrom);
    const t = getCurrencyById(currTo);

    if (f.rate && t.rate) {
      setConversionRate(t.rate / f.rate)
    }

    console.log('ffff', f);
    console.log(conversionRate)
    // setIsFetching(loadingValues || loadingNames)

    // setConversionRate();
  }, [currFrom, currTo, lastUpdate]);



  const handleClick = () => {
    // updateRates();
    // const a = getCurrencyById('EUR');

    // console.log('BBB', a);
    // console.log('aaa', values)
    submit();
  }

  const selectFromChange = (opVal: string) => {
    setCurrFrom(opVal);
  }
  const selectToChange = (opVal: string) => {
    setCurrTo(opVal);
  }

  return (
    <React.Fragment>
      {!!isOnline ? (
        <>
          <Select
            options={currList}
            loading={!!isLoading}
            onChange={selectFromChange}
          />
          {maxVal}
          <Input name={FIELD_FROM_VAL} placeholder='0' max={maxVal} />
          {/* <CurrencyBox currencyCode='EUR' /> */}
          <ConversionBadge
            caption={`1 ${currFrom} is ${conversionRate.toFixed(2)} ${currTo}`}
            precentage={(values.from / maxVal) * 100}
          />
          {/* <CurrencyBox currencyCode='USD' /> */}
          <Select
            options={currList}
            loading={!!isLoading}
            onChange={selectToChange}
          />
          <Input name={FIELD_TO_VAL} placeholder='0' max={maxVal * conversionRate} />
        </>
        ) : <span>You are currently offline...</span>
      }
      <Button caption='Exchange' onClick={handleClick} disabled={!isOnline} block isLoading={!!isLoading}/>
    </React.Fragment>
  )
}

export const WidgetMoneyExchange = ({ onSubmit, ...rest }: any) => {
  const isOnline = useIsOnline();

  return (
    <Form onSubmit={onSubmit}>
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
