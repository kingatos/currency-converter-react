import "./style.css";

export const Result = ({ result }) => {
    if (result !== "")
    return (
        <p>
             <strong className="form__result"> Result: {result.sourceAmount} {result.currencyFrom}= {(result.targetAmount).toFixed(2)} {result.currencyTo}</strong>
        </p>
    )
};
