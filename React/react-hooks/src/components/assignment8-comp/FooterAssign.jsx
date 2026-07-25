import { useContext } from "react"
import { ThemeSwitcher } from "../../context/ThemeSwitcher"

export const FooterAssign = () => {
    const { theme } = useContext(ThemeSwitcher);
    return (
        <div className="m-20" style={{ backgroundColor: `${theme === 'dark' ? "darkblue" : "#ddd"}` }}>
            FooterAssign
        </div>
    )
}
