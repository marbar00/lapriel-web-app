import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import { Outlet } from "react-router-dom"

export function Layout() {
    return(
        <div className="min-vh-100 d-flex flex-column">
            <Navbar />
                <main className="flex-grow-1 p-0">
                    <Outlet />
                </main>
            <Footer />
        </div>
    )
}