import { Navigate, createBrowserRouter } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { LayoutHeroes } from "./heroes";
import { LoginPage } from "../auth";
import { PrivateRoute, PublicRoute } from "./";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute />,
        children: [
            {
                element: <LayoutHeroes />,
                children: [
                    {
                        path: "marvel",
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
        ]
    },
    {
        element: <PublicRoute />,
        children: [
            {
                path: "login",
                element: <LoginPage />
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/marvel" />
    },
]);