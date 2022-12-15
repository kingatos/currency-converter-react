import "./style.css";


export const Buttons = ({ setResult, setAmount }) => (
    <p>
        <button className="form__button">Calculate</button>
        <button
            className="form__button"
            type="reset"
            onClick={() => {
                setResult("");
                setAmount("");
            }}
        >
            Clear
        </button>
    </p>
);
