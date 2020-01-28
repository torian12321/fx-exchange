import React from "react";
// import { IInput } from "./Input.interfaces";
import { useForm } from "../Form";
import './Input.module.css';

const Input = (props: any) => {
  const { name, onChange, className, decimals = 2, ...rest } = props;
  const { getValue, setValue } = useForm();
  const value = getValue(name);

  const styleNumber = (num: number) => {
    return decimals ? Number((num * 1).toFixed(decimals)) : num;
  };

  const handleChange = (e: any) => {
    const val = e.target.value;

    setValue(
      name,
      styleNumber(val)
    );
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      type='number'
      // className={classNames(styles.input, className)}
      {...rest}
    />
  );
};

export { Input };
