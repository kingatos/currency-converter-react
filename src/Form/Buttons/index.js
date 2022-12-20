import "./style.css";


export const Buttons = ({ onResetClick }) => (
    <p>
        <button className="form__button">Calculate</button>
        <button
            className="form__button"
            type="reset"
            onClick={onResetClick}
        >
            Clear
        </button>
    </p>
);
