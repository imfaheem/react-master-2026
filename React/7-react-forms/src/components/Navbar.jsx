import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const getActiveClass = ({isActive}) => isActive ? "active-link" : "inactive-link";

    return (
        <nav className='navbar'>
            <NavLink to="form-hook/practice" className={getActiveClass}>
                Form Hook Practice
            </NavLink>
            <NavLink to="form-hook/exercise" className={getActiveClass}>
                Form Hook Exercise
            </NavLink>
            <NavLink to="form-hook/project" className={getActiveClass}>
                Form Hook Project
            </NavLink>
        </nav>
    )
}
