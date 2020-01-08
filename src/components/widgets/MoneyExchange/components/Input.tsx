import React from "react";
import classNames from "classnames";
// import { IInput } from "./Input.interfaces";
import { useForm } from "components/ui";
// import './Input.module.css';

const Input = (props: any) => {
  const { name, onChange, className, decimals = 2, max, ...rest } = props;
  const { getValue, setValue } = useForm();
  const value = getValue(name);

  const styleNumber = (num: number) => {
    // Remove decimals if required
    return decimals ? Number((num * 1).toFixed(decimals)) : num;
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const val = e.target.value;

    setValue(
      name,
      styleNumber((val < max) ? val : max)
    );

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      type='number'
      max={max}
      {...rest}
    />
  );
};

export { Input };
