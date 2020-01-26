import React, { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { WalletProvider, useWalletState } from 'apiContext';
import { Pocket } from './components/Pocket';
import * as styles from "./WidgetWallet.styles";

export const WidgetWallet = () => {
  const { currencies } = useWalletState();

  return (
    <div css={styles.wrapper}>
      {currencies.map((c: any) => <Pocket value={c} key={c.id} />)}
    </div>
  )
}

export const WidgetWalletStoryBook = () => (
  <WalletProvider>
    <WidgetWallet />
  </WalletProvider>
);
