import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Buttons } from "./Buttons";

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
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Currency Calculator</legend>
                <label className="form__label">
                    <span className="form__labelText">
                        Enter the amount:
                    </span>
                    <input
                        className="form__input"
                        type="number"
                        required
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        autoFocus
                    />
                </label>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Input currency:</span>
                        <select
                            className="form__currency"
                            name="currencyFrom"
                            value={currencyFrom}
                            onChange={({ target }) => setCurrencyFrom(target.value)}>
                            {currencies.map(currencyFrom => (
                                <option key={currencyFrom.id} value={currencyFrom.name}>
                                    {currencyFrom.name}
                                </option>
                            ))};
                        </select>
                    </label>
                </p>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Output currency:</span>
                        <select
                            className="form__currency"
                            name="currencyTo"
                            value={currencyTo}
                            onChange={({ target }) => setCurrencyTo(target.value)}>
                            {currencies.map(currencyTo => (
                                <option key={currencyTo.id} value={currencyTo.name}>
                                    {currencyTo.name}
                                </option>
                            ))};
                        </select>
                    </label>
                </p>
                <Buttons onResetClick={onResetClick} />              
                <Result result={result} />
            </fieldset>
            <p className="form__currentRates">
                *exchange rate are from October 28, 2022
            </p>
        </form>
    )
};


export default Form;