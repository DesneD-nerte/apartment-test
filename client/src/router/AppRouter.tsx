import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import ErrorPage from "../pages/error/errorPage";
import ApartmentDetail from "../components/apartment/apartment-detail/ApartmentDetail";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/:apartmentId",
        element: <ApartmentDetail />,
    },
]);
