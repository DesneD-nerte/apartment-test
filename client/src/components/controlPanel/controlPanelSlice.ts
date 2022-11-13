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
    rooms: number[];
}

const initialState: ControlPanelState = {
    sort: undefined,
    price: {
        priceStart: 0,
        priceEnd: 0,
    },
    rooms: [],
};

export const controlPanelSlice = createSlice({
    name: "controlPanel",
    initialState,
    reducers: {
        changeSort: (state, action: { payload: SelectSort }) => {
            state.sort = action.payload;
        },
        changePrice: (state, action: { payload: PriceInput }) => {
            state.price = action.payload;
        },
        changeRooms: (state, action: { payload: number }) => {
            if (!state.rooms.find((oneRoom) => oneRoom == action.payload)) {
                state.rooms.push(action.payload);
            } else {
                state.rooms = state.rooms.filter((oneRoom) => oneRoom != action.payload);
            }
        },
    },
});

export const { changeSort, changePrice, changeRooms } = controlPanelSlice.actions;

export default controlPanelSlice.reducer;
