import { Outlet } from "react-router-dom"
import { Navbar } from "../layouts/Navbar"
import { Sidebar } from "../layouts/Sidebar"

export const Dashboard = () => {
    
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <main className="flex-1 h-[calc(100dvh-136px)] p-4 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </>
    )
}
