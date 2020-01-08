import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Heading } from 'components/ui';
import { WidgetMoneyExchange } from 'components/widgets';
import { useWalletState } from 'apiContext';
import * as styles from "./Body.styles";

const Body = ({ children }: any) => {
  const { addMoney } = useWalletState();

  const handleExchange = (values: any) => {
    const { fromValue } = values;

    addMoney('EUR', 55);
    console.log('AAAA', values);
  };


  return (
    <div css={styles.main}>
      <Heading caption='Convert Money' level={4} />
      <WidgetMoneyExchange onSubmit={handleExchange} />
    </div>
  );
};

export { Body };
