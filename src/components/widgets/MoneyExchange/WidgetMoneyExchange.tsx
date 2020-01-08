import React, { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CurrenciesProvider, useCurrenciesState } from 'apiContext';
import { useInterval, useIsOnline } from 'hooks';
import { Button, Form, Input, useForm } from 'components/ui';
import * as styles from './WidgetMoneyExchange.styles';
import { ConversionBadge, CurrencyBox } from './components';

const Content = () => {
  const isOnline = useIsOnline();
  const conversionRate = 100;
  const { getCurrencyById, updateRates } = useCurrenciesState();
  const { submit, values } = useForm();

  const handleClick = () => {
    updateRates();
    const a = getCurrencyById('EUR');

    console.log('BBB', a);
    console.log('aaa', values)
    submit();
  }

  console.log('aaa', values)

  return (
    <React.Fragment>
      <Input name='from' decimals='from' placeholder='0' />
      <CurrencyBox currencyCode='EUR' />
      <ConversionBadge caption={conversionRate} precentage={100} />
      <CurrencyBox currencyCode='USD' />
      <Button caption='Exchange' onClick={handleClick} disabled={!isOnline} block />
    </React.Fragment>
  )
}

export const WidgetMoneyExchange = ({ onSubmit }: any) => {
  const isOnline = useIsOnline();

  return (
    <Form onSubmit={onSubmit}>
      <div css={[
        styles.wrapper,
        isOnline && styles.wrapperActive
      ]}>
        <Content />
      </div>
    </Form>
  )
};

export const WidgetMoneyExchangeStorybook = () => (
  <CurrenciesProvider>
    <WidgetMoneyExchange />
  </CurrenciesProvider>
);
