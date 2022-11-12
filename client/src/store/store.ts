import { configureStore } from "@reduxjs/toolkit";
import controlPanelReducer from "../components/controlPanel/controlPanelSlice";

export const store = configureStore({
    reducer: {
        filter: controlPanelReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
