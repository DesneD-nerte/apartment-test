import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import "./styles/styles.css";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={AppRouter} />;
        </QueryClientProvider>
    );
};

export default App;
