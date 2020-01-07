import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { WidgetMoneyExchange } from 'components/widgets';
import * as styles from "./Body.styles";

const Body = ({ children }: any) => (
  <div css={styles.main}>
    <WidgetMoneyExchange />
  </div>
);

export { Body };
