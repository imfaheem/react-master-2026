import { Link } from "react-router-dom"

export const Home = () => {

    return (
        <div>
            <h1>Welcome to ProductHub</h1>
            <p>Explore products and find detailed information about each product.</p>

            <Link to="/products">View Products</Link>
        </div>
    )
}
