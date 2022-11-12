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
import { Provider } from "react-redux";
import { store } from "./store/store";

const queryClient = new QueryClient();

const App = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={AppRouter} />;
            </QueryClientProvider>
        </Provider>
    );
};

export default App;
