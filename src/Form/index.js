import "./style.css";
import { currenciesFrom, currenciesTo } from "../Currencies";
import { useState } from "react";
import { Result } from "./Result";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState(currenciesFrom[0].name);
    const [currencyTo, setCurrencyTo] = useState(currenciesTo[0].name);
    const [result, setResult] = useState("");

    const findCurrencyFrom = () => currenciesFrom.find(({ name }) => name === currencyFrom);
    const findCurrencyTo = () => currenciesTo.find(({ name }) => name === currencyTo);
    const calculateResult = () => {
        setResult({
            currencyFrom,
            currencyTo,
            targetAmount: (findCurrencyFrom().rate * amount) / findCurrencyTo().rate, 
            sourceAmount: +amount,
        });
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
                        onChange={({ target }) => setAmount(target.value)} />
                </label>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Input currency:</span>
                        <select
                            className="form__currency"
                            name="currencyFrom"
                            value={currencyFrom}
                            onChange={({ target }) => setCurrencyFrom(target.value)}>
                            {currenciesFrom.map(currencyFrom => (
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
                            {currenciesTo.map(currencyTo => (
                                <option key={currencyTo.id} value={currencyTo.name}>
                                    {currencyTo.name}
                                </option>
                            ))};
                        </select>
                    </label>
                </p>
                <p>
                    <button className="form__button">Calculate</button>
                    <button className="form__button" type="reset">Clear</button>
                </p>
                <Result result={result}/>
            </fieldset>
            <p className="form__currentRates">
                *exchange rate are from October 28, 2022
            </p>
        </form>
    )
};


export default Form;