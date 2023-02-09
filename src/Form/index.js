import { currencies } from "../currencies";
import { useState } from "react";
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
    Currency
} from "./styled.js";

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
                <Legend>
                    Currency Calculator
                </Legend>
                <Label>
                    <Clock />
                    <LabelText>
                        Enter the amount:
                    </LabelText>
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
                        <LabelText>
                            Input currency:
                        </LabelText>
                        <Currency
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
                    <Label>
                        <LabelText>
                            Output currency:
                        </LabelText>
                        <Currency
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