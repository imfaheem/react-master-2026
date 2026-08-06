import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const NotFound = () => {
    const { pathname } = useContext(AppContext);
    
    return (
        <div className="not-found-page">
            <h1>404</h1>
            <h2>Product Not Found</h2>
            <p>The requested product does not exist.</p>
            <Link to={!pathname.includes('products') ? '/' : '/products'}>Back to {!pathname.includes('products') ? "Home" : "Products"}</Link>
        </div>
    )
}
