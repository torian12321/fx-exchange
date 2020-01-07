import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as styles from "./ConversionBadge.styles";
import { Icon } from 'components/ui';
import iconSrc from 'assets/img/icons/profit.svg';

export interface IProps {
  value: string | number;
}

const ConversionBadge = ({ value }: IProps) => (
  <div css={styles.badge} >
    <Icon src={iconSrc} />
    <span>{ value }</span>
  </div>
);

export { ConversionBadge };
