import React from "react";
import classnames from "classnames";
import { IEllipsis } from './Ellipsis.interfaces';
import styles from "./Ellipsis.module.css";

const Ellipsis = ({ className } : IEllipsis) => (
  <div className={classnames(styles.wrapp, className)}>
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
  </div>
);

export { Ellipsis };