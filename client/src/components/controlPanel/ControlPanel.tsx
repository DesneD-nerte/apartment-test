import React from "react";
import MySelect, { MySelectOptions } from "../../UI/MySelect/MySelect";
import { Apartment } from "../apartment/Apartment.entity";

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
        name: "По площади, сначала дорогие",
    },
    {
        option: "AreaLowToHigh",
        name: "По площади, сначала дешевые",
    },
];

interface ControlPanelProps {
    dataApartments?: Apartment[];
}

const ControlPanel = ({ dataApartments }: ControlPanelProps) => {
    return (
        <div className="d-flex justify-content-between">
            <div></div>
            <MySelect optionsArray={selectOptions}></MySelect>
        </div>
    );
};

export default ControlPanel;
