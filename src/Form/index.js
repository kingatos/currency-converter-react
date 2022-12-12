import "./style.css";
import { currencies } from "../Currencies";
import { useState } from "react";
import { Result } from "./Result";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].name);
    const [result, setResult] = useState("");

    const findCurrency = () => currencies.find(({ name }) => name === currency);
    const calculateResult = () => {
        setResult({
            currency,
            targetAmount: amount / findCurrency().rate,
            rate: findCurrency().rate,
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
                        placeholder="PLN"
                        type="number"
                        required
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)} />
                </label>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Output currency:</span>
                        <select
                            className="form__currency"
                            name="currency"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}>
                            {currencies.map(currency => (
                                <option key={currency.name} value={currency.name}>
                                    {currency.name}
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