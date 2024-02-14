import { Outlet } from "react-router-dom"
import { Navbar } from "../../ui"

export const LayoutHeroes = () => {
    return (
        <>
            <Navbar />
            <main className="container mt-4">
                <Outlet />
            </main>
        </>
    )
}
