import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const getActiveClass = ({isActive}) => isActive ? 
        "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : 
        "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white";

    return (
        <nav className='sticky bg-gray-800 px-4 py-2 rounded-md'>
            <div className="flex flex-1 items-center justify-start md:items-stretch md:justify-between radius">
                <div className="flex shrink-0 items-center">
                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto" />
                </div>
                <div className='flex gap-8 items-center'>
                    <NavLink to="form-hook/practice" className={getActiveClass}>
                        Form Hook Practice
                    </NavLink>
                    <NavLink to="form-hook/exercise" className={getActiveClass}>
                        Form Hook Exercise
                    </NavLink>
                    <NavLink to="css-styles" className={getActiveClass}>
                        CSS Styling Project
                    </NavLink>
                    <NavLink to="tailwind-dashboard" className={getActiveClass}>
                        Tailwind Dashboard
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
