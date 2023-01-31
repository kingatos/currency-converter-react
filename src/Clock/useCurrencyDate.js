import { useState, useEffect } from "react";

function useCurrencyDate() {
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

    return { formattedDate, formattedTime };
}

export default useCurrencyDate;