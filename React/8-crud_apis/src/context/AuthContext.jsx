import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        Boolean(localStorage.getItem("accessToken"))
    )

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated,
                setIsAuthenticated,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
