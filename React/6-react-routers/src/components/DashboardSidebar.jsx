import { NavLink } from "react-router-dom"

export const DashboardSidebar = () => {
    const getIsActiveClass = ({ isActive }) => isActive ? 'active-link' : 'inactive-link';

    return (
        <aside>
            <h2>Dashboard Sidebar</h2>
            <nav>
                <NavLink to="/dashboard" end className={getIsActiveClass}>Dashboard</NavLink>
                <NavLink to="profile" className={getIsActiveClass}>Profile</NavLink>
                <NavLink to="settings" className={getIsActiveClass}>Settings</NavLink>
            </nav>
        </aside>
    )
}
