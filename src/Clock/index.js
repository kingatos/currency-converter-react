import { useCurrentDate } from "./useCurrentDate.js";
import { Wrapper } from "./styled.js";

const formattedDate = (date) => date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long"
});

const formattedTime = (date) => date.toLocaleTimeString("pl");

export const Clock = () => {
    const date = useCurrentDate();


    return (
        <Wrapper>
            Today is {formattedDate(date)},&nbsp;{formattedTime(date)}
        </Wrapper>
    )
};
