import useCurrencyDate from "./useCurrencyDate.js";
import { StyledClock } from "./styled.js";

export const Clock = () => {
    const date = useCurrencyDate();
    const formattedDate = date.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" });
    const formattedTime = date.toLocaleTimeString("pl");
    
    return (
        <StyledClock>
            Today is {formattedDate},&nbsp;{formattedTime}
        </StyledClock>
    )
};
