import React from 'react';
import Sel, { components } from 'react-select';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useCurrenciesState } from 'apiContext';
import * as styles from "./Select.styles";

const SingleValue = (props: any) => {
  const { data = {} } = props;

  return (
    <components.SingleValue {...props} css={styles.option}>
      <img src={data.img} css={styles.optionImg} />
      <span css={styles.optionTxt} >{data.id}</span>
    </ components.SingleValue>
  );
};

const Option = (props: any) => {
  const { data = {} } = props;

  return (
    <components.Option {...props} css={styles.option}>
      <img src={data.img} css={styles.optionImg} />
      <span css={styles.optionTxt} >{data.id}</span>
    </ components.Option>
  );
};

export const Select = (props: any) => {
  const { currencies = [] } = useCurrenciesState();
  const {
    name = '',
    onChange = false,
    loading = false,
    defaultValue = 0,
  } = props;

  const handleOnChange = ({ value }: any) => {
    onChange(value);
  }

  const options = currencies.map((c: any) => ({
    ...c,
    value: c.id,
  }));

  return (
    <Sel
      components={{
        Option,
        SingleValue,
      }}
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

