import { useEffect, useState } from "react";

export const useAPIdata = () => {
  const [exchangeRates, setExchangeRates] = useState({ 
    status: "loading",
  });

  useEffect(() => {
      const url = "https://api.exchangerate.host/latest";
      const fetchExchangeRates = async () => {
        try {
          const response = await fetch(url);

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
