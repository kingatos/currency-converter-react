import { useState, useEffect } from "react";
import "./style.css";


export const Clock = () => {
    const [date, currentDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            currentDate(new Date());
        }, 1000);
        return () =>
            clearInterval(intervalID);
    }, []);

    const formattedDate = date.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" });
    const formattedTime = date.toLocaleTimeString("pl");

    return (
        <div>
            <p className="clock">
                Today is {formattedDate},&nbsp;{formattedTime}
            </p>
        </div>
    );
};
