import { Outlet } from "react-router-dom"
import { DashboardSidebar } from "../components/DashboardSidebar"

export const DashboardLayout = () => {
    return (
        <section className="dashboard-layout">
            <DashboardSidebar />
            <main>
                <Outlet />
            </main>
        </section>
    )
}
