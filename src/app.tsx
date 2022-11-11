import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import "./styles/styles.css";

const App = () => {
    return <RouterProvider router={AppRouter} />;
};

export default App;
