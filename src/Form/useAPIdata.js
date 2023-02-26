import { useEffect, useState } from "react";

export const useAPIdata = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const url = "https://api.exchangerate.host/latest";
      const fetchExchangeRates = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setExchangeRates(data.rates);
          setLoading(false);
          setError(false);
        } catch (error) {
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
      error: "Something went wrong. Please try again later.",
    };
  }

  return { exchangeRates, isLoading, error };
};
