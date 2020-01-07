import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Heading } from 'components/ui';
import * as styles from "./Menu.styles";

const Menu = ({ children }: any) => (
  <div css={styles.main}>
    <Heading caption='My Wallet' level={3} />
    Menu content
    {children}
  </div>
);

export { Menu };
