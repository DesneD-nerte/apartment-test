import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import ErrorPage from "../pages/error/errorPage";
import ApartmentPage from "../pages/home/apartmentId/apartmentPage";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/:apartmentId",
        element: <ApartmentPage />,
        errorElement: <ErrorPage />,
    },
]);
