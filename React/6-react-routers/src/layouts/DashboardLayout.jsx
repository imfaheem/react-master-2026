import styles from "./Dashboard.module.css"
import { Outlet } from "react-router-dom"
import { DashboardSidebar } from "../components/DashboardSidebar"

export const DashboardLayout = () => {
    return (
        <section className={styles.dashboardLayout}>
            <DashboardSidebar />
            <main>
                <Outlet />
            </main>
        </section>
    )
}
