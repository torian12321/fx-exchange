import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CurrenciesProvider, useCurrenciesState } from 'apiContext';
import { useInterval, useIsOnline } from 'hooks';
import { Button } from 'components/ui';
import * as styles from './WidgetMoneyExchange.styles'

const A = () => {
  const isOnline = useIsOnline();
  const { getCurrencyById, updateRates } = useCurrenciesState();
  // useInterval(updateRates, 10000);



  // React.useEffect(() => {
  //   console.log('currencies', currencies);
  // }, [currencies]);

  const handleClick = () => {
    updateRates();
    const a = getCurrencyById('EUR');

    console.log('BBB', a);
  }

  return (
    <React.Fragment>
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
