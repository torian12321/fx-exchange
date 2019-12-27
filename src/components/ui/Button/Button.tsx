import React from 'react';
import classNames from "classnames";
import { IButton } from "./Button.interfaces";
import "./Button.css";

const Button = (props: IButton) => {
  const {
    children,
    caption,
    className,
    disabled = false,
    loading = false,
    form,
    onClick,
    alt = caption,
    type = "button"
  } = props;

  const content = children || caption;
  const isClickable = !disabled && !loading;

  const onClickHandler = () => {
    if (isClickable) {
      onClick();
    }
  };

  return (
    <button
      className={classNames(
        'btn',
        className
      )}
      type={type}
      aria-label={alt}
      form={form}
      onClick={onClick && onClickHandler}
      disabled={!isClickable}
    >
      {content}
    </button>
  );
}

export { Button };
