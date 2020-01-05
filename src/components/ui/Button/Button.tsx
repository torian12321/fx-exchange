import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import classNames from "classnames";
import { Ellipsis } from ".././Loader";
import { IButton } from "./Button.interfaces";
// import styles from "./Button.module.css";
import * as styles from './Button.styles'

const Button = (props: IButton) => {
  const {
    children,
    caption,
    className,
    disabled = false,
    isLoading = false,
    form,
    onClick,
    alt = caption,
    type = "button"
  } = props;

  const content = children || caption;
  const isClickable = !disabled && !isLoading;

  const onClickHandler = () => {
    if (onClick && isClickable) {
      onClick();
    }
  };

  return (
    <button
      css={[
        styles.btn,
        !isClickable && styles.btnDisabled
      ]}
      className={classNames(
        // styles.wrapper,
        // isLoading && styles.wrapper_IsLoading,
        className
      )}
      type={type}
      aria-label={alt}
      form={form}
      onClick={onClickHandler}
      disabled={!isClickable}
    >
      <span>{content}</span>
      {isLoading && <Ellipsis css={styles.loader} />}
    </button>
  );
}

export { Button };
