import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CurrenciesProvider, useCurrenciesState } from 'apiContext';
import { useInterval, useIsOnline } from 'hooks';
import { Button, Form, Input, useForm } from 'components/ui';
import * as styles from './WidgetMoneyExchange.styles';
import { ConversionBadge, CurrencyBox } from './components';

const Content = ({
  isOnline = false,
  isLoading = false,
} : any) => {
  // const conversionRate = 100;
  const [conversionRate, setConversionRate] = useState(100);
  const [currFrom, setCurrFrom] = useState('EUR');
  const [currTo, setCurrTo] = useState('USD');

  const { getCurrencyById, updateRates, lastUpdate } = useCurrenciesState();
  const { submit, values } = useForm();
  // const idFrom = 'EUR';
  // const idTo = 'USD';

  useEffect(() => {
    const f = getCurrencyById(currFrom);
    const t = getCurrencyById(currTo);

    if (f.rate && t.rate) {
      setConversionRate(f.rate / t.rate)
    }

    console.log('ffff', f);
    // setIsFetching(loadingValues || loadingNames)

    // setConversionRate();
  }, [currFrom, currFrom, lastUpdate]);



  const handleClick = () => {
    // updateRates();
    // const a = getCurrencyById('EUR');

    // console.log('BBB', a);
    // console.log('aaa', values)
    submit();
  }

  console.log('aaa', values)

  return (
    <React.Fragment>
      {!!isOnline ? (
        <>
          <Input name='from' decimals='from' placeholder='0' />
          <CurrencyBox currencyCode='EUR' />
          <ConversionBadge caption={conversionRate} precentage={100} />
          <CurrencyBox currencyCode='USD' />
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
    <WidgetMoneyExchange />
  </CurrenciesProvider>
);
