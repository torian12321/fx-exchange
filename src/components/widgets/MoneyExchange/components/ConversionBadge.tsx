import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as styles from "./ConversionBadge.styles";
import { Icon } from 'components/ui';
import iconSrc from 'assets/img/icons/profit.svg';

export interface IProps {
  caption: string | number;
  precentage?: number;
}
export interface IBadge {
  caption: string | number;
  highlighted?: boolean;
}


const Badge = ({ caption, highlighted }: IBadge) => (
  <div css={[
    styles.badge,
    highlighted && styles.badgeHighlighted,
  ]}
  >
    <Icon src={iconSrc} css={styles.icon} />
    <span css={styles.text}>{caption}</span>
  </div>
);

const ConversionBadge = ({ caption, precentage = 0 }: IProps) => (
  <div css={styles.wrapper}>
    <div css={styles.progressBar} />
    <div css={[styles.progressBar, styles.badgeHighlighted]} style={{ width: `${precentage}%` }} />

    <Badge
      caption={caption}
      highlighted={precentage === 100}
    />
  </div>
);

export { ConversionBadge };
