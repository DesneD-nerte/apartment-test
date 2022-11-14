import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./styles/styles.css";

const queryClient = new QueryClient();

const App = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={AppRouter} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Provider>
    );
};

export default App;
