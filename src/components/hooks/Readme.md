# `useIsOnline`

> React hook for subscribing to `online`/`offline` events and the `navigator.onLine` property to see current status

## Usage

```js
import { useIsOnline } from './components/hooks';

const MyComponent = () => {
  const isOnline = useIsOnline();

  return (
    <div>
      <h1>You are {isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
}
```