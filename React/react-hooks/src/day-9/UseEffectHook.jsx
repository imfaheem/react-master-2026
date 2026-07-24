import { useEffect, useState } from "react";

export const UseEffectHook = ({setShowProject}) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    console.log("Rendering...");

    useEffect(()=> {
        console.log("Effect executed")
    }, []);

    console.log(count);
    console.log(name);

    useEffect(() => {

        const id = setInterval(() => {
            console.log("Running");
        }, 1000);

        return () => {
            clearInterval(id);
        };

    }, []);

    return (
        <div>
            <h2>UseEffectHook</h2>
            <input value={name} onChange={()=> setName(event.target.value)} />
            <button onClick={()=> setCount(prev => prev + 1)}>Click Counter: {count}</button>
            <br />
            <button onClick={()=> setShowProject(prev => !prev)}>Show Final Project: Day - 9</button>
        </div>
    )
}
