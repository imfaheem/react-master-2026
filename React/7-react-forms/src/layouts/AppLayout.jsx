import { Navbar } from "../components/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const AppLayout = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    
    return (
       <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {pathname !== "/" && (
                <button className="back-to-home" onClick={()=> navigate("/")}>
                    Back to Home - Form Hook
                </button>
            )}
        </div>
    )
}
