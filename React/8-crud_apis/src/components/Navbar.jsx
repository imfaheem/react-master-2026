import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { FaDatabase } from "react-icons/fa6";
import AuthContext from "../context/AuthContext";

export const Navbar = () => {
    const { logout } = useContext(AuthContext);

    const getIsActiveStyles = ({ isActive }) => 
        isActive ? "bg-neutral-900 text-white" : "bg-neutral-700 text-gray-300 hover:bg-neutral-900 hover:text-white";

    return (
        <nav className="p-4 bg-zinc-800">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FaDatabase className="text-2xl text-white" />
                    <h4 className="text-white font-semibold">AXIOS OPERATIONS</h4>
                </div>
                <div className="flex justify-between w-[700px]">
                    <ul className="flex w-96 justify-between">
                        <li>
                            <NavLink
                                end
                                to="/"
                                className={({ isActive }) =>
                                    `block px-3 py-1 uppercase text-sm font-semibold rounded transition-all duration-300 ${getIsActiveStyles({ isActive })}`
                                }
                            >
                                Get
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="post"
                                className={({ isActive }) =>
                                    `block px-3 py-1 uppercase text-sm font-semibold rounded transition-all duration-300 ${getIsActiveStyles({ isActive })}`
                                }
                            >
                                Post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="put"
                                className={({ isActive }) =>
                                    `block px-3 py-1 uppercase text-sm font-semibold rounded transition-all duration-300 ${getIsActiveStyles({ isActive })}`
                                }
                            >
                                Put
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="patch"
                                className={({ isActive }) =>
                                    `block px-3 py-1 uppercase text-sm font-semibold rounded transition-all duration-300 ${getIsActiveStyles({ isActive })}`
                                }
                            >
                                Patch
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="delete"
                                className={({ isActive }) =>
                                    `block px-3 py-1 uppercase text-sm font-semibold rounded transition-all duration-300 ${getIsActiveStyles({ isActive })}`
                                }
                            >
                                Delete
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="flex w-20 justify-end">
                        <li>
                            <NavLink
                                onClick={logout}
                                className="block px-3 py-1 uppercase text-sm font-semibold rounded transition-all duration-300 bg-neutral-700 text-gray-300 hover:bg-neutral-900 hover:text-white"
                            >
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
