import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { LanguageContext } from "../context/LanguageContext";

export const Navbar = () => {

    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    const user = useContext(AuthContext);

    return (
        <div>
            <p>Theme: {theme}</p>
            <p>Language: {language}</p>
            <p>User: {user}</p>
        </div>
    )
}
