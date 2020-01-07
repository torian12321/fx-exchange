import React, { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CurrenciesProvider, useCurrenciesState } from 'apiContext';
import { useInterval, useIsOnline } from 'hooks';
import { Button } from 'components/ui';
import * as styles from './WidgetMoneyExchange.styles';
import { ConversionBadge, CurrencyBox } from './components';

const A = () => {
  const isOnline = useIsOnline();
  const conversionRate = 100;
  const { getCurrencyById, updateRates } = useCurrenciesState();

  const handleClick = () => {
    updateRates();
    const a = getCurrencyById('EUR');

    console.log('BBB', a);
  }

  return (
    <React.Fragment>
      <ConversionBadge value={conversionRate} />
      <CurrencyBox currencyCode='EUR' />
      <CurrencyBox currencyCode='USD' />
      <Button caption='Exchange' onClick={handleClick} disabled={!isOnline} block />
    </React.Fragment>
  )
}

export const WidgetMoneyExchange = () => {
  const isOnline = useIsOnline();
  
  return (
    <CurrenciesProvider>
      <div css={[
        styles.wrapper,
        isOnline && styles.wrapperActive
      ]}>
        <A />
      </div>
    </CurrenciesProvider>
  )
};
