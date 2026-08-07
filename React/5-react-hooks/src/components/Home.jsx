import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Home = () => {

    const theme = useContext(ThemeContext);
    
    return (
         <div>Theme: {theme}</div>
    )
}
