import { NavLink } from "react-router-dom"

export const Products = () => {

    return (
        <div>
            <h1>This is Products Page.</h1>
            <NavLink to="/products/3">Product Details with ID</NavLink>
            <br /><br />
            <NavLink to="/new-products?search=phone&category=Electronics&page=1">New Product</NavLink>
        </div>
    )
}
