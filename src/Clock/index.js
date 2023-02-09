import { useCurrencyDate } from "./useCurrencyDate.js";
import { Wrapper } from "./styled.js";

const formattedDate = (date) => date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long"
});

const formattedTime = (date) => date.toLocaleTimeString("pl");

export const Clock = () => {
    const date = useCurrencyDate();


    return (
        <Wrapper>
            Today is {formattedDate(date)},&nbsp;{formattedTime(date)}
        </Wrapper>
    )
};
