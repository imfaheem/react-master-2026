import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const getIsActiveStyles = ({ isActive }) => 
        isActive ? "bg-neutral-900 text-white" : "bg-neutral-700 text-gray-300 hover:bg-neutral-900 hover:text-white";

    return (
        <nav className="p-4 bg-zinc-800">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h4 className="text-white font-semibold">REACT REDUX</h4>
                </div>
                <div className="flex justify-end w-[700px]">
                    <ul className="flex w-96 justify-between">
                        <li>
                            <NavLink
                                end
                                to="/"
                                className={({ isActive }) =>
                                    `block px-3 py-1 uppercase text-sm font-semibold rounded transition-all duration-300 ${getIsActiveStyles({ isActive })}`
                                }
                            >
                                Traditional
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="toolkit"
                                className={({ isActive }) =>
                                    `block px-3 py-1 uppercase text-sm font-semibold rounded transition-all duration-300 ${getIsActiveStyles({ isActive })}`
                                }
                            >
                                Redux Toolkit
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="project"
                                className={({ isActive }) =>
                                    `block px-3 py-1 uppercase text-sm font-semibold rounded transition-all duration-300 ${getIsActiveStyles({ isActive })}`
                                }
                            >
                                Project
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
