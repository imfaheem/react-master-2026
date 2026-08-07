import { useState } from "react"

export const useToggle = () => {
    const [isActive, setIsActive] = useState(false);
    
    const toggle = ()=> {
        setIsActive(prev => !prev);
    }

    return {
        isActive, toggle
    }
}
