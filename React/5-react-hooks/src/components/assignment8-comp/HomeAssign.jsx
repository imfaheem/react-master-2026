import { useContext } from "react"
import { ThemeSwitcher } from "../../context/ThemeSwitcher"

export const HomeAssign = () => {
    const { theme } = useContext(ThemeSwitcher);

    return (
        <div className="m-20" style={{ backgroundColor: `${theme === 'dark' ? "#ff0000" : "#ddd"}` }}>
            HomeAssign
        </div>
    )
}
