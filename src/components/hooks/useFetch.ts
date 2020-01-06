import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(undefined);
  const [errors, setErrors] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetchAsync = async() => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  useEffect(() => {
    setIsFetching(true);
    setErrors(null);
    setData(undefined);

    fetchAsync()
      .then(data => setData(data))
      .catch(reason => setErrors(reason.message))
      .finally(() => setIsFetching(false))
  }, [url]);

  
  return {
    data,
    isFetching,
    errors
  };
};

export { useFetch };