import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as styles from "./Pocket.styles";

export interface IProps {
  value: any;
}

const Pocket = ({ value = 0 }: IProps) => {
  const { img = '', symbol = '' } = value;

  return (
    <div css={styles.wrapper}>
      <img src={img} css={styles.image} />
      <span css={styles.label}>
        {`${value.value} ${symbol}`}
      </span>
    </div>
  )
};

export { Pocket };
