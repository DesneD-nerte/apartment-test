import { createSlice } from "@reduxjs/toolkit";
import { MySelectOptions } from "../../UI/MySelect/MySelect";

type SelectSort =
    | undefined
    | "PriceHighToLow"
    | "PriceLowToHigh"
    | "AreaLowToHigh"
    | "AreaHighToLow";

interface ControlPanelState {
    sort: SelectSort;
}

const initialState: ControlPanelState = {
    sort: undefined,
};

export const controlPanelSlice = createSlice({
    name: "controlPanel",
    initialState,
    reducers: {
        changeSort: (state, action) => {
            state.sort = action.payload;
        },
    },
});

export const { changeSort } = controlPanelSlice.actions;

export default controlPanelSlice.reducer;
