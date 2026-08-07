import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Dashboard = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <p>Current Theme: {theme}</p>
        </div>
    )
}
