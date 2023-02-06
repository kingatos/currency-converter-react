import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Buttons } from "./Buttons";
import { Clock } from "../Clock";
import { Footer } from "../Footer";
import { StyledForm, Fieldset, Legend, Label, LabelText, Input, Currency, theme } from "./styled.js";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState(currencies[0].name);
    const [currencyTo, setCurrencyTo] = useState(currencies[1].name);
    const [result, setResult] = useState("");

    const findCurrency = (currencyName) => currencies.find(({ name }) => name === currencyName);
    const calculateResult = () => {
        setResult({
            currencyFrom,
            currencyTo,
            targetAmount: (findCurrency(currencyFrom).rate * amount) / findCurrency(currencyTo).rate,
            sourceAmount: +amount,
        });
    };

    const onResetClick = () => {
        setResult("");
        setAmount("");
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Fieldset>
                <Legend theme={theme}>
                    Currency Calculator
                </Legend>
                <Label theme={theme}>
                    <Clock />
                    <LabelText theme={theme}>
                        Enter the amount:
                    </LabelText>
                    <Input
                        theme={theme}
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
                    <Label theme={theme}>
                        <LabelText theme={theme}>
                            Input currency:
                        </LabelText>
                        <Currency
                            theme={theme}
                            name="currencyFrom"
                            value={currencyFrom}
                            onChange={({ target }) => setCurrencyFrom(target.value)}>
                            {currencies.map(currencyFrom => (
                                <option key={currencyFrom.id} value={currencyFrom.name}>
                                    {currencyFrom.name}
                                </option>
                            ))};
                        </Currency>
                    </Label>
                </p>
                <p>
                    <Label theme={theme}>
                        <LabelText theme={theme}>
                            Output currency:
                        </LabelText>
                        <Currency
                            theme={theme}
                            name="currencyTo"
                            value={currencyTo}
                            onChange={({ target }) => setCurrencyTo(target.value)}>
                            {currencies.map(currencyTo => (
                                <option key={currencyTo.id} value={currencyTo.name}>
                                    {currencyTo.name}
                                </option>
                            ))};
                        </Currency>
                    </Label>
                </p>
                <Buttons onResetClick={onResetClick} />
                <Result result={result} />
                <Footer />
            </Fieldset>
        </StyledForm>
    )
};


export default Form;