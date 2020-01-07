import React from "react";
import classNames from "classnames";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ISpinner } from './Spinner.interfaces';
import * as styles from "./Spinner.styles";

const Spinner = ({ className }: ISpinner) => (
  <div css={styles.spinner} className={classNames(className)} />
);

export { Spinner };