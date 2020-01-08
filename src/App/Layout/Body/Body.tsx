import React, { useState } from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Heading } from 'components/ui';
import { WidgetMoneyExchange } from 'components/widgets';
import { useWalletState } from 'apiContext';
import * as styles from "./Body.styles";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Body = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { exchangeMoney } = useWalletState();

  const handleExchange = async (args: any) => {
    const {
      from,
      to,
      ammount,
      conversionRate,
    } = args;

    // Mock an API call delay
    setIsLoading(true);
    await sleep(2000);
    setIsLoading(false);

    exchangeMoney(
      from,
      to,
      ammount,
      conversionRate
    )
  };

  return (
    <div css={styles.main}>
      <Heading caption='Convert Money' level={4} />
      <WidgetMoneyExchange onSubmit={handleExchange} isLoading={isLoading} />
    </div>
  );
};

export { Body };
