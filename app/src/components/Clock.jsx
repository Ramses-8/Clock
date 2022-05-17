import React, { useEffect } from "react";
import "./Clock.css";
import { DateTime } from "luxon";

function Clock({city}) {  

    const timerRef = React.useRef(null);

    useEffect(() => {
        const continent = city?.continent ?? 'America';
        const name = city?.name ?? 'Mexico_City';
        const intervalId = setInterval(() => {
            let timer = DateTime.utc().setZone(`${continent}/${name}`);
            timerRef.current.innerText = timer.toString().substring(11, 19);
        }, 1000);
        console.log('Subscribing interval', intervalId);
        return () => {
            clearInterval(intervalId);
            console.log('Unsubscribing interval', intervalId);
        }
    }, [city]);
    
    return (
        <div className="clock">
            <div ref={timerRef} className="clock__time"></div>
        </div>
    )
}

export default Clock;
