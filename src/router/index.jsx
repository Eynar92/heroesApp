import { Navigate, createBrowserRouter } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { LayoutHeroes } from "./heroes";
import { LoginPage } from "../auth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutHeroes />,
        children: [
            {
                path: "marvel",
                index: true,
                element: <MarvelPage />,
            },
            {
                path: "dc",
                element: <DcPage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "hero/:id",
                element: <HeroPage />
            },
        ]
    },
    {
        path: "login",
        element: <LoginPage />
    },
    {
        path: "*",
        element: <Navigate to="/marvel" />
    },
])