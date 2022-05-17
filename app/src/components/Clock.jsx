import React, { useEffect, useState } from "react";
import "./Clock.css";
import { DateTime } from "luxon";


var country = "America";
var ciudad = "Mexico_City";

function Clock() {  

    const [clockState, setClockState] = useState();
    useEffect(() => {
        setInterval(() => {
            var cTime = DateTime.utc().setZone(`${country}/${ciudad}`);
            setClockState(cTime.toString().slice(11, 19));
        }, 1000);
    }, []);

    
    return (
        <div className="clock">
            <div className="clock__time">{
                clockState
            }</div>
        </div>
    )
}

export default Clock;
