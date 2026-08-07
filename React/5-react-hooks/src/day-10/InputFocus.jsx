import { useEffect, useRef } from "react";

export const InputFocus = () => {
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
        
    }, [])

    const handleInputFocus = ()=> {
        inputRef.current.focus();
    }

    const handleInputValue = ()=> {
        inputRef.current.value = "";
    }

    return (
        <div className="m-20">
            <h2>InputFocus</h2>
            <div>
                <input type="text" ref={inputRef} />
            </div>
            <div>
                <button onClick={handleInputFocus}>Focus</button>
                <button onClick={handleInputValue}>Clear</button>
            </div>
        </div>
        
    )
}
