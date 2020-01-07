import React from 'react';
import { CurrenciesProvider, useCurrenciesState } from 'apiContext';
import { useInterval, useIsOnline } from 'hooks';
import { Button } from 'components/ui';

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
    <Button caption='Exchange' onClick={handleClick} disabled={!isOnline} />
  )
}

export const WidgetMoneyExchange = () => (
  <CurrenciesProvider>
    <A />
  </CurrenciesProvider>
);
