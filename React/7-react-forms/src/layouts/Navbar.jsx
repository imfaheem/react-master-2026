import { IoLogoTux } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";

export const Navbar = () => {
    return (
        <nav className="bg-gray-200 justify-between flex rounded-md px-4 py-3">
            <div className="flex items-center gap-2">
                <div className="block lg:hidden border p-2 cursor-pointer rounded-md hover:text-gray-900 hover:bg-gray-300">
                    <RxHamburgerMenu />
                </div>
                <div className="flex gap-2 items-center">
                    <IoLogoTux className="text-zinc-900 text-3xl" />
                    <p className="font-bold uppercase text-lg">Project Logo</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <input type="search" className="border border-gray-500 hidden md:block rounded-md px-2 py-1.5 placeholder:text-zinc-500" placeholder="Search Anything..." />
                </div>
                <div>
                    <IoIosNotificationsOutline className="text-3xl cursor-pointer hover:text-zinc-900" />
                </div>
                <div className="text-xl cursor-pointer hover:text-zinc-900">
                    Profile
                </div>
            </div>
        </nav>
    )
}
