import { createSlice } from "@reduxjs/toolkit";
import { MySelectOptions } from "../../UI/MySelect/MySelect";

type SelectSort =
    | undefined
    | "PriceHighToLow"
    | "PriceLowToHigh"
    | "AreaLowToHigh"
    | "AreaHighToLow";

interface PriceInput {
    priceStart: number;
    priceEnd: number;
}

interface ControlPanelState {
    sort: SelectSort;
    price: PriceInput;
}

const initialState: ControlPanelState = {
    sort: undefined,
    price: {
        priceStart: 0,
        priceEnd: 0,
    },
};

export const controlPanelSlice = createSlice({
    name: "controlPanel",
    initialState,
    reducers: {
        changeSort: (state, action) => {
            state.sort = action.payload;
        },
        changePrice: (state, action: { payload: PriceInput }) => {
            state.price = action.payload;
        },
    },
});

export const { changeSort, changePrice } = controlPanelSlice.actions;

export default controlPanelSlice.reducer;
