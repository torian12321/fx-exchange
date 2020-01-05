import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { IEllipsis } from './Ellipsis.interfaces';
import * as styles from './Ellipsis.styes'

const Ellipsis = ({ className }: IEllipsis) => (
  <div css={styles.wrapp} className={className}>
    <span css={styles.dot} />
    <span css={styles.dot} />
    <span css={styles.dot} />
  </div>
);

export { Ellipsis };
