import { useState, useEffect } from "react";
import "./style.css";


export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () =>
            clearInterval(intervalID);
    }, []);
    return (
        <div>
            <p className="clock">
                Today is {time.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long"})},&nbsp;
                {time.toLocaleTimeString("pl")}
            </p>
        </div>
    );
};
