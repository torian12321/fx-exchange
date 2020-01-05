import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ISpinner } from './Spinner.interfaces';
import * as styles from "./Spinner.styles";

const Spinner = ({ className }: ISpinner) => (
  <div css={styles.spinner} className={className} />
);

export { Spinner };