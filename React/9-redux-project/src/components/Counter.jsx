import { useEffect, useState } from "react"
import { store } from "../redux/store"
import { decrement, increment, reset } from "../redux/actions/counterActions";

export const Counter = () => {

    const [count, setCount] = useState(store.getState()?.count ?? 0);

    useEffect(() => {
        const updateState = () => {
            setCount(store.getState().count);
        };

        const unsubscribe = store.subscribe(updateState);
        return unsubscribe;
    }, []);

    return (
        <div className="my-4 flex-1">
            <div className="flex gap-4 ">
                <button
                    onClick={()=> store.dispatch(increment)}
                    className="bg-blue-200 p-2 text-gray-800 rounded-md cursor-pointer hover:text-white hover:bg-blue-500">
                    Increment
                </button>
                <button
                    onClick={()=> store.dispatch(decrement)}
                    className="bg-red-200 p-2 text-gray-800 rounded-md cursor-pointer hover:text-white hover:bg-red-500">
                        Decrement
                </button>
                <button
                onClick={() => store.dispatch(reset)}
                className="bg-gray-200 p-2 text-gray-800 rounded-md cursor-pointer hover:bg-gray-400"
            >
                Reset
            </button>
            </div>
            <p className="!my-2">Count: {count}</p>
        </div>
    )
}
