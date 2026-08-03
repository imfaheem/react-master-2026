import { useRef, useState } from "react"
import { InputFocus } from "./InputFocus";
import { StopWatch } from "./StopWatch";

export const UseRefHook = () => {
    const [state, setState] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef(null);

    const handleUseRef = ()=> {
        //useRef
        countRef.current++;
        console.log(countRef);
        console.log(countRef.current);

        //useState
        setState(prev => prev+1);
        console.log(state);

    }

    const handleFocusInput = ()=> {
        inputRef.current.focus();
        inputRef.current.value = "Input Focus";
        console.log("Input Focus");
    }

    return (
        <div>
            <h2>UseRef Hook</h2>
            <p>State value: {state}</p>
            <p>Ref Value: {JSON.stringify(countRef)}</p>
            <button onClick={handleUseRef}>
                Click to handle UseRef & UseState
            </button>
            <div>
                <input type="text" ref={inputRef} /><br />
                <button onClick={handleFocusInput}>Focus on Input</button>
            </div>

            <InputFocus />
            <StopWatch />
        </div>
    )
}
