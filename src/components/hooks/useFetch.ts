import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(undefined);
  const [errors, setErrors] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const resetValues = () => {
    setIsFetching(true);
    setErrors(null);
    setData(undefined);
  }

  const getUserAsync = async() =>{
    setIsFetching(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    } catch(err) {
      setErrors(err)
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    resetValues();
    getUserAsync();
  }, [url]);
  
  return {
    data,
    isFetching,
    errors
  };
};

export { useFetch };