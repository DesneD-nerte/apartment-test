import { createSlice } from "@reduxjs/toolkit";
import { MySelectOptions } from "../../UI/MySelect/MySelect";

export type SelectSort =
    | undefined
    | "PriceHighToLow"
    | "PriceLowToHigh"
    | "AreaLowToHigh"
    | "AreaHighToLow";

export interface PriceInput {
    priceStart: number;
    priceEnd: number;
}

export interface AreaInput {
    areaTotal: {
        totalStart: number;
        totalEnd: number;
    };
    areaLive: {
        liveStart: number;
        liveEnd: number;
    };
    areaKitchen: {
        kitchenStart: number;
        kitchenEnd: number;
    };
}

export interface ControlPanelState {
    sort: SelectSort;
    price: PriceInput;
    rooms: number[];
    area: AreaInput;
}

const initialState: ControlPanelState = {
    sort: undefined,
    price: {
        priceStart: 0,
        priceEnd: Number.MAX_SAFE_INTEGER,
    },
    rooms: [],
    area: {
        areaTotal: {
            totalStart: 0,
            totalEnd: Number.MAX_SAFE_INTEGER,
        },
        areaLive: {
            liveStart: 0,
            liveEnd: Number.MAX_SAFE_INTEGER,
        },
        areaKitchen: {
            kitchenStart: 0,
            kitchenEnd: Number.MAX_SAFE_INTEGER,
        },
    },
};

export const controlPanelSlice = createSlice({
    name: "controlPanel",
    initialState,
    reducers: {
        changeSort: (state, action: { payload: SelectSort }) => {
            state.sort = action.payload;
        },
        changePrice: (state, action: { payload: PriceInput }) => {
            if (action.payload.priceEnd == 0) {
                action.payload.priceEnd = Number.MAX_SAFE_INTEGER;
            }
            state.price = action.payload;
        },
        changeRooms: (state, action: { payload: number }) => {
            if (!state.rooms.find((oneRoom) => oneRoom == action.payload)) {
                state.rooms.push(action.payload);
            } else {
                state.rooms = state.rooms.filter((oneRoom) => oneRoom != action.payload);
            }
        },
        changeArea: (state, action: { payload: AreaInput }) => {
            if (action.payload.areaTotal.totalEnd == 0) {
                action.payload.areaTotal.totalEnd = Number.MAX_SAFE_INTEGER;
            }
            if (action.payload.areaLive.liveEnd == 0) {
                action.payload.areaLive.liveEnd = Number.MAX_SAFE_INTEGER;
            }
            if (action.payload.areaKitchen.kitchenEnd == 0) {
                action.payload.areaKitchen.kitchenEnd = Number.MAX_SAFE_INTEGER;
            }

            state.area = { ...state.area, ...action.payload };
        },
    },
});

export const { changeSort, changePrice, changeRooms, changeArea } = controlPanelSlice.actions;

export default controlPanelSlice.reducer;
