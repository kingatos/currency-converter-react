import "./style.css";

export const Result = ({ result }) => {
    if (result !== "")
    return (
        <p>
            Result: <strong className="form__result"> {result.sourceAmount} PLN = {(result.targetAmount).toFixed(2)} {result.currencyTo}</strong>
        </p>
    )
};
