import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState((state) => ({ ...state, isLoading: true }));
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setState((state) => ({
        ...state,
        data,
        hasError: null,
        isLoading: false,
      }));
    } catch (error) {
      setState((state) => ({ ...state, hasError: error, isLoading: false }));
    }
  };

  const onFetch = () => {
    getFetch();
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    onFetch,
  };
};
