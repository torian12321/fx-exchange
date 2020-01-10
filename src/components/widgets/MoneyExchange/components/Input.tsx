import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as styles from "./Input.styles";

const Input = (props: any) => {
  const { name, onChange, className, decimals = 2, max, disabled = false, value = 0, ...rest } = props;

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      type="number"
      value={value}
      placeholder='0'
      onChange={handleChange}
      css={[
        styles.input,
        disabled && styles.input_disabled,
      ]}
      {...rest}
    />
  );
};

export { Input };
