import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchUrl();
  }, []);

  const fetchUrl = async () =>{
    setIsFetching(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setErrors(null);
    } catch(err) {
      setData(null);
      setErrors(err);
    } finally {
      setIsFetching(false);
    }
  };

  return {
    data,
    isFetching,
    errors,
    reload: fetchUrl,
  };
};

export { useFetch };