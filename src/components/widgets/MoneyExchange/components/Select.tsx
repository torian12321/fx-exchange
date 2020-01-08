import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Sel from 'react-select';

export const Select = (props: any) => {
  const {
    name = '',
    options = [{}],
    onChange = false,
    loading = false,
    defaultValue = 0,
  } = props;

  const handleOnChange = ({ value }: any) => {
    onChange(value);
  }

  return (
    <Sel
      // className="basic-single"
      defaultValue={options[defaultValue]}
      isDisabled={!!loading}
      isLoading={!!loading}
      isClearable={false}
      isSearchable={true}
      name={name}
      onChange={handleOnChange}
      options={options}
    />
  )
};

