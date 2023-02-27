import { useEffect, useState } from "react";

export const useAPIdata = () => {
  const [exchangeRates, setExchangeRates] = useState({ status: "loading"});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const url = "https://api.exchangerate.host/latest";
      const fetchExchangeRates = async () => {
        try {
          const response = await fetch(url);
          const { data, rates} = await response.json();
          setExchangeRates({ status: "success", data, rates});
          setLoading(false);
          setError(false);
        } catch (error) {
          setExchangeRates({ status: "error" });
          setError(true);
          setLoading(false);
        }
      };
      fetchExchangeRates();
    }, 3000);
  }, []);

  if (error) {
    return {
      exchangeRates: {},
      isLoading: false,
      error: true, 
    };
  }


  return { exchangeRates, isLoading, error };
};
