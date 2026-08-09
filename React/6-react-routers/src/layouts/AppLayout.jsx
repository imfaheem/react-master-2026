import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/navbar/Navbar"

export const AppLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
