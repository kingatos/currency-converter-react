import { useEffect, useState } from "react";

export const useAPIdata = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);

      setTimeout(async () => {
        const response = await fetch("https://api.exchangerate.host/latest");
        const data = await response.json();
        setExchangeRates(data.rates);
        setLoading(false);
      }, 3000);
    };
    fetchExchangeRates();
  }, []);

  return { exchangeRates, isLoading };
};

