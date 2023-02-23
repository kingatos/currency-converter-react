import { useState } from "react";
import { OriginRates } from "./OriginRates";
import { useAPIdata } from "./useAPIdata";
import { Loading } from "./Loading";
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
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("AUD");
  const [result, setResult] = useState("");
  const { exchangeRates, isLoading } = useAPIdata();

  const calculateResult = () => {
    if (exchangeRates) {
      const sourceRate = exchangeRates[currencyFrom];
      const targetRate = exchangeRates[currencyTo];

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
          {isLoading ? (
            <Loading />
          ) : (
            <>
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
              <OriginRates />
              <Result result={result} />
            </>
          )}
          <Footer />
        </Label>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
