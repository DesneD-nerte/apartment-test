import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MySelect, { MySelectOptions } from "../../UI/MySelect/MySelect";
import { Apartment } from "../apartment/Apartment.entity";
import { changeSort } from "./controlPanelSlice";

type SelectSort =
    | undefined
    | "PriceHighToLow"
    | "PriceLowToHigh"
    | "AreaLowToHigh"
    | "AreaHighToLow";
const selectOptions: MySelectOptions<SelectSort>[] = [
    {
        option: undefined,
        name: "По умолчанию",
    },
    {
        option: "PriceHighToLow",
        name: "По цене, сначала дорогие",
    },
    {
        option: "PriceLowToHigh",
        name: "По цене, сначала дешевые",
    },
    {
        option: "AreaHighToLow",
        name: "По площади, сначала большие",
    },
    {
        option: "AreaLowToHigh",
        name: "По площади, сначала малые",
    },
];

interface ControlPanelProps {
    dataApartments?: Apartment[];
}

const ControlPanel = ({ dataApartments }: ControlPanelProps) => {
    const filter = useSelector((state: RootState) => state.filter.sort);
    const dispatch = useDispatch();

    const handleChangeSort = (selectedSort: SelectSort) => {
        dispatch(changeSort(selectedSort));
    };
    // console.log(filter);
    return (
        <div
            className="d-flex justify-content-between align-items-center"
            style={{ height: "100px", backgroundColor: "white" }}
        >
            <div></div>
            <MySelect handleChangeSort={handleChangeSort} optionsArray={selectOptions}></MySelect>
        </div>
    );
};

export default ControlPanel;
