import { useCounter } from "../hooks/useCounter";

export const UserCounter = () => {
    const {
        count, 
        handleIncrement, 
        handleDecrement, 
        resetCount 
    } = useCounter();

    return (
        <div>
            <h4>User Counter</h4>
            <p>Count: {count}</p>
            <div className="flex btn-section">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={resetCount}>Reset Count</button>
            </div>
        </div>
    )
}
