import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext";

export const Footer = () => {
    
    const language = useContext(LanguageContext);

    return (
         <div>Language: {language}</div>
    )
}
