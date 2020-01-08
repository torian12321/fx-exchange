import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useForm } from "components/ui";
import * as styles from "./Input.styles";
// import './Input.module.css';

const Input = (props: any) => {
  const { name, onChange, className, decimals = 2, max, disabled = false, ...rest } = props;
  const { getValue, setValue } = useForm();
  const value = getValue(name);

  const styleNumber = (num: number) => {
    // Remove decimals if required
    return decimals ? Number((num * 1).toFixed(decimals)) : num;
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const val = e.target.value;
    const v = (val < max) ? val : max;

    if (!(v < 0)) {
      setValue(
        name,
        styleNumber(v)
      );

      if (onChange) {
        onChange(v);
      }
    }
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      type='number'
      max={max}
      css={[
        styles.input,
        disabled && styles.input_disabled,
      ]}
      {...rest}
    />
  );
};

export { Input };
