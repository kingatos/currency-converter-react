import { useEffect, useState } from "react";

export const useAPIdata = () => {
  const [exchangeRates, setExchangeRates] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          "http://api.exchangeratesapi.io/v1/latest?access_key=aab5e1520ee550cc33070b4c008ee32e"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { rates, date } = await response.json();

        setExchangeRates({
          status: "success",
          rates,
          date,
        });
      } catch {
        setExchangeRates({
          status: "error",
        });
      }
    };
    setTimeout(fetchExchangeRates, 3000);
  }, []);

  return exchangeRates;
};
