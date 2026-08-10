import { NavLink } from "react-router-dom";
import { navLinks } from "../utils";

export const Sidebar = () => {
  return (
    <aside className="w-full md:max-w-64 box-sizing bg-blue-300 rounded-md overflow-y-auto p-4 shrink-0">
      <ul>
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.id}>
                <NavLink
                    end
                    to={link.path}
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 my-2 rounded-lg font-bold uppercase transition hover:bg-blue-600 hover:text-white ${
                        isActive ? "bg-blue-600 text-white" : "text-gray-800"
                    }`
                }>
                <Icon className="text-xl shrink-0" />
                <span>{link.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
