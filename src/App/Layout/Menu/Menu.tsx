import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Heading } from 'components/ui';
import { WidgetWallet } from 'components/widgets';
import * as styles from "./Menu.styles";

const Menu = () => (
  <div css={styles.main}>
    <Heading caption='My Wallet' level={4} />
    <WidgetWallet />
  </div>
);

export { Menu };
