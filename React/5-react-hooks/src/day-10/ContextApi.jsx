import { useContext } from "react"
import { ThemeSwitcher } from "../context/ThemeSwitcher"
import { NavbarAssign } from "../components/assignment8-comp/NavbarAssign";
import { HomeAssign } from "../components/assignment8-comp/HomeAssign";
import { FooterAssign } from "../components/assignment8-comp/FooterAssign";

export const ContextApi = () => {
    const { theme, toggleTheme } = useContext(ThemeSwitcher);

    return (
        <div className="m-20" style={{ backgroundColor: `${theme === 'dark' ? "#333" : "#ddd"}` }}>
            <h2>Context API - Assignment no. 8</h2>
            <h3>Theme: {theme}</h3>
            <NavbarAssign />
            <HomeAssign />
            <FooterAssign />
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}
