import React, { useState, useEffect} from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useCurrenciesState } from 'apiContext';
// import * as styles from "./ConversionBadge.styles";
// import { Icon } from 'components/ui';

export interface IProps {
  currencyCode: string;
}

const CurrencyBox = ({ currencyCode }: IProps) => {
  const { getCurrencyById, lastUpdate } = useCurrenciesState();
  const [currData, setCurrData]: [any, any] = useState();

  useEffect(() => {
    // Get up to date Data.
    setCurrData(getCurrencyById(currencyCode));
  }, [currencyCode, lastUpdate]);

  return (
    <div>
      <span>bla bla {currencyCode}</span>
    </div>
  );
}

export { CurrencyBox };
