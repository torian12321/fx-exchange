### Usage

```js
import React from 'react';
import { CurrenciesProvider, useCurrenciesState } from 'apiContext';
import { Button } from 'components/ui';

const MyComponent = () => {
  const { getCurrencyById, updateRates } = useCurrenciesState();
  const euro = getCurrencyById('EUR');

  return (
    <div>
      <span>
        {`${euro.shortName} has now a value of ${euro.rate}$`}
      </span>
      <Button
        caption='Update Rates'
        onClick={updateRates}
      />
    </div>
  )
}

const MoneyExchange = () => (
  <CurrenciesProvider>
    <MyComponent />
  </CurrenciesProvider>
);
```

## TODO
  - Add typing.
  - API key should be externally provided.
  - Probably all currencies info should come from a single endpoint.
  - Implement `useReducer` for more scalable solution???.
