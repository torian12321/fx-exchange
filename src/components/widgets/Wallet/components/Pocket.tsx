import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as styles from "./Pocket.styles";

export interface IProps {
  value: any;
}

const Pocket = ({ value = 0 }: IProps) => {
  const { img = '', symbol = '', value: v = 0 } = value;

  return (
    <div css={styles.wrapper}>
      <img src={img} css={styles.image} />
      <span css={styles.label}>
        {`${v.toFixed(2)} ${symbol}`}
      </span>
    </div>
  )
};

export { Pocket };
