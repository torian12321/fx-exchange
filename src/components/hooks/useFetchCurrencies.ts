import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

const API = 'f67b0d18f95c43c4a246d6d2dc63fb86';

const useFetchCurrencies = () => {
  const [currencies, setCurrencies]: [any, any] = useState({});
  const {data, isFetching, reload, errors} = useFetch(
    `https://openexchangerates.org/api/latest.json?app_id=${API}`,
  );

  useEffect(() => {
    // const currenciesData = data.data || [];

    setCurrencies(data);
    // setCurrencies(
    //   currenciesData.map((curr: any) => ({
    //     id: curr.id,
    //     url: curr.images.downsized.url,
    //     alt: curr.title
    //   }))
    // );
  }, [data]);

  return {
    currencies,
    isFetching,
    errors,
    reload,
  };
};

export { useFetchCurrencies };
