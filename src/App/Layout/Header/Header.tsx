import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as styles from "./Header.styles";

const Header = ({ children }: any) => (
  <div css={styles.main}>
    FX Exchange
  </div>
);

export { Header };
