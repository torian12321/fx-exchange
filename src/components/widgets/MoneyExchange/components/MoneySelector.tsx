import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Select } from './Select';
import { Input } from './Input';
import * as styles from '../WidgetMoneyExchange.styles';

export interface IProps {
  isLoading: boolean,
  value: number,
  defaultValue: number,
  onChangeCurrency: Function,
  onChangeValue: Function,
}

const MoneySelector = (props: IProps) => {
  const {
    isLoading = false,
    value = 0,
    defaultValue = 0,
    onChangeCurrency,
    onChangeValue
  } = props

  return (
    <div css={styles.moneyBox}>
      <Select
        defaultValue={defaultValue}
        loading={!!isLoading}
        onChange={onChangeCurrency}
        css={styles.moneyBox__select}
      />
      <Input
        value={value}
        onChange={onChangeValue}
        css={styles.moneyBox__input}
        disabled={!!isLoading}
      />
    </div>
  );
}

export { MoneySelector };
