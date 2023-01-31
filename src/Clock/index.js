import { useState, useEffect } from "react";
import { StyledClock } from "./styled.js";


export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () =>
            clearInterval(intervalID);
    }, []);

    const formattedDate = date.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" });
    const formattedTime = date.toLocaleTimeString("pl");

    return (
        <div>
            <StyledClock>
                Today is {formattedDate},&nbsp;{formattedTime}
            </StyledClock>
        </div>
    );
};
