# Hooks list

* [useIsOnline](#useIsOnline)
* [useInterval](#useIsInterval)

## `useInterval`

> React hook for create an interval than will autoClear on unmount.

Check [https://overreacted.io/making-setinterval-declarative-with-react-hooks/](here) for more information

### Usage

```js
import React, { useState } from 'react';
import { useInterval } from 'hooks';

const MyComponent = () => {
  let [count, setCount] = useState(0);

  // useInterval(updateRates, 1000);
  // OR
  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}
```

## `useIsOnline`

> React hook for subscribing to `online`/`offline` events and the `navigator.onLine` property to see current status

### Usage

```js
import React, { useState } from 'react';
import { useIsOnline } from 'hooks';

const MyComponent = () => {
  const isOnline = useIsOnline();

  return (
    <div>
      <h1>You are {isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
}
```