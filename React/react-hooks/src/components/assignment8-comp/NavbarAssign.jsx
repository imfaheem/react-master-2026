import { useContext } from "react"
import { ThemeSwitcher } from "../../context/ThemeSwitcher"

export const NavbarAssign = () => {
    const { theme } = useContext(ThemeSwitcher);
    return (
        <div className="m-20" style={{ backgroundColor: `${theme === 'dark' ? "darkgreen" : "#ddd"}` }}>
            NavbarAssign
        </div>
    )
}
