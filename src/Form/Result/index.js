import { StyledResult } from "./styled.js";

export const Result = ({ result }) => {
    if (result !== "")
        return (
            <p>
                <StyledResult>
                    Result: {result.sourceAmount} {result.currencyFrom} =
                    &nbsp;{(result.targetAmount).toFixed(2)} {result.currencyTo}
                </StyledResult>
            </p>
        )
};
