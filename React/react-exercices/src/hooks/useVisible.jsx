import { useState } from "react";

export const useVisible = () => {
    const [state, setState] = useState(false);

    const toggle = ()=> {
        setState(prev => !prev);
    }

    return { state, toggle };
}
