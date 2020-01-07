import React from "react";
import classNames from "classnames";
import { ReactSVG } from 'react-svg'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { IIcon } from "./Icon.interfaces";
import * as styles from "./Icon.styles";

const Icon = ({ src, className }: IIcon) => (
  <ReactSVG
    src={src}
    css={styles.icon}
    className={classNames(className)}
  />
);

export { Icon };
