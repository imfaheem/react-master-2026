import { useCounter } from "../hooks/useCounter";

export const TimeCounter = () => {
    const {
        count, 
        handleIncrement, 
        handleDecrement, 
        resetCount 
    } = useCounter();

    return (
        <div>
            <h4>TimeCounter</h4>
            <p>Count: {count}</p>
            <div className="flex btn-section">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={resetCount}>Reset Count</button>
            </div>
        </div>
    )
}
