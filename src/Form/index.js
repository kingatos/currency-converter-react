import { currencies } from "../Currencies";
import { useEffect, useState } from "react";
import { Result } from "./Result";
import { Buttons } from "./Buttons";
import { Clock } from "../Clock";
import { Footer } from "../Footer";
import {
  StyledForm,
  Fieldset,
  Legend,
  Label,
  LabelText,
  Input,
  Currency,
} from "./styled.js";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].name);
  const [currencyTo, setCurrencyTo] = useState(currencies[1].name);
  const [result, setResult] = useState("");
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const response = await fetch("https://api.exchangerate.host/latest");
      const data = await response.json();
      setExchangeRates(data.rates);
    };
    fetchExchangeRates();
  }, []);

  const calculateResult = () => {
    if (exchangeRates) {
      const sourceRate = exchangeRates[currencyFrom].rate;
      const targetRate = exchangeRates[currencyTo].rate;

      setResult({
        currencyFrom,
        currencyTo,
        targetAmount: (targetRate / sourceRate) * amount,
        sourceAmount: +amount,
      });
    }
  };

  const onResetClick = () => {
    setResult("");
    setAmount("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  const currencyOptions = Object.keys(exchangeRates);

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Currency Calculator</Legend>
        <Label>
          <Clock />
          <LabelText>Enter the amount:</LabelText>
          <Input
            type="number"
            required
            min="0.01"
            step="0.01"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            autoFocus
          />
        </Label>
        <p>
          <Label>
            <LabelText>Input currency:</LabelText>
            <Currency
              name="currencyFrom"
              value={currencyFrom}
              onChange={({ target }) => setCurrencyFrom(target.value)}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
              ;
            </Currency>
          </Label>
        </p>
        <p>
          <Label>
            <LabelText>Output currency:</LabelText>
            <Currency
              name="currencyTo"
              value={currencyTo}
              onChange={({ target }) => setCurrencyTo(target.value)}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
              ;
            </Currency>
          </Label>
        </p>
        <Buttons onResetClick={onResetClick} />
        <Result result={result} />
        <Footer />
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
