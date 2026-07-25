import { useEffect, useRef, useState } from "react";

export const StopWatch = () => {

    const timerId = useRef(null);
    const [elapsedTime, setElapsedTime] = useState(0);

    const seconds = elapsedTime % 60;
    const minutes = Math.floor(elapsedTime / 60) % 60;
    const hours = Math.floor(elapsedTime / 3600) % 60;


    const handleTimerStart = ()=> {
        if(timerId.current !== null) return;

        timerId.current = setInterval(()=> {
            setElapsedTime(prev => prev+1);
        }, 1000);
    }

    const handleTimerStop = ()=> {
        clearInterval(timerId.current);
        timerId.current = null;
    }

    const handleResetTimer = ()=> {
        clearInterval(timerId.current);
        timerId.current = null;
        setElapsedTime(0);
    }

    useEffect(()=> {
        return () => {
            clearInterval(timerId.current);
        }
    }, [])

    return (
        <div className="m-20">
            <h2>StopWatch</h2>

            <div className="flex">
                <h1>{hours}</h1>
                <h1>:</h1>
                <h1>{minutes}</h1>
                <h1>:</h1>
                <h1>{seconds}</h1>
            </div>

            <button onClick={handleTimerStart}>Start</button>
            <br />
            <button onClick={handleTimerStop}>Stop</button>
            <br />
            <button onClick={handleResetTimer}>Reset</button>
        </div>
    )
}
