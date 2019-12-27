import React from "react";
import classnames from "classnames";
import { ISpinner } from './Spinner.interfaces';
import styles from "./Spinner.module.css";

const Spinner = ({ className } : ISpinner) => (
  <div className={classnames(styles.spinner, className)} />
);

export { Spinner };