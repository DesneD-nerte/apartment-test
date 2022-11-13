import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { RootState } from "../../store/store";
import MySelect, { MySelectOptions } from "../../UI/MySelect/MySelect";
import { Apartment } from "../apartment/Apartment.entity";
import { changePrice, changeSort } from "./controlPanelSlice";

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
    const [priceStart, setPriceStart] = useState("");
    const [priceEnd, setPriceEnd] = useState("");

    const debouncedPriceStart = useDebounce(priceStart);
    const debouncedPriceEnd = useDebounce(priceEnd);

    const dispatch = useDispatch();

    const handleChangeSort = (selectedSort: SelectSort) => {
        dispatch(changeSort(selectedSort));
    };

    const handleChangePrice = (value: string, setPriceState: Dispatch<SetStateAction<string>>) => {
        const valueNumberFormat = value.replace(/\s/gi, "");
        if (value == "" || Number(valueNumberFormat) > 0) {
            setPriceState(Intl.NumberFormat("ru-RU").format(Number(valueNumberFormat)));
        }
        if (Number(valueNumberFormat) == 0) {
            setPriceState("");
        }
    };

    useEffect(() => {
        dispatch(
            changePrice({
                priceStart: Number(debouncedPriceStart.replace(/\s/gi, "")),
                priceEnd: Number(debouncedPriceEnd.replace(/\s/gi, "")),
            })
        );
    }, [debouncedPriceStart, debouncedPriceEnd]);

    return (
        <div className="bg-white">
            <div className="container" style={{ height: "100px" }}>
                <div className="row align-items-center h-100">
                    <div className="col-4 d-flex flex-column">
                        Стоимость
                        <div className="d-flex flex-row">
                            <input
                                type="text"
                                value={priceStart}
                                onChange={(e) =>
                                    handleChangePrice(e.currentTarget.value, setPriceStart)
                                }
                                min="0"
                                placeholder="От"
                                className="w-100"
                            ></input>
                            <input
                                type="text"
                                value={priceEnd}
                                onChange={(e) =>
                                    handleChangePrice(e.currentTarget.value, setPriceEnd)
                                }
                                placeholder="До"
                                className="w-100"
                            ></input>
                        </div>
                    </div>
                    <div className="col-4 d-flex flex-column">
                        Комнатность
                        <div>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4+</button>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <MySelect
                            handleChangeSort={handleChangeSort}
                            optionsArray={selectOptions}
                        ></MySelect>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;
