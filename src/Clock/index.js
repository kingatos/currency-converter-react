import useCurrencyDate from "./useCurrencyDate.js";
import { StyledClock } from "./styled.js";


export const Clock = () => {
const { formattedDate, formattedTime } = useCurrencyDate();

    return (
        <div>
            <StyledClock>
                Today is {formattedDate},&nbsp;{formattedTime}
            </StyledClock>
        </div>
    );
};
