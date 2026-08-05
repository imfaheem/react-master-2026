import { NavLink } from "react-router-dom"

export const Navbar = () => {
    const getIsActiveStyles = ({ isActive }) => isActive ? 'active' : 'inactive';

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={getIsActiveStyles} end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={getIsActiveStyles}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={getIsActiveStyles}>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={getIsActiveStyles}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={getIsActiveStyles}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={getIsActiveStyles}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}
