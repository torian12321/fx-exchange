import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Body } from './Body';
import { Header } from './Header';
import { Menu } from './Menu';
import * as styles from "./Layout.styles";

const Layout = ({ children }: any) => (
  <div css={styles.main}>
    <div css={styles.header}>
      <Header />
    </div>
    <div css={styles.menu}>
      <Menu />
    </div>
    <div css={styles.body}>
      <Body />
    </div>
  </div>
);

export { Layout };
