import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Heading } from 'components/ui';
import { WidgetMoneyExchange } from 'components/widgets';
import * as styles from "./Body.styles";

const Body = ({ children }: any) => (
  <div css={styles.main}>
    <Heading caption='Convert Money' level={4} />
    <WidgetMoneyExchange />
  </div>
);

export { Body };
