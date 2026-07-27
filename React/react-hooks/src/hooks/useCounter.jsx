import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=> {
        setCount(prev=> prev+1);
    }

    const handleDecrement = ()=> {
        setCount(prev=> prev-1);
    }

    const resetCount = ()=> {
        setCount(0);
    }

    return { 
        count,
        handleIncrement,
        handleDecrement,
        resetCount
    }
}
