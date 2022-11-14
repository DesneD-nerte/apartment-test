import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import MySelect, { MySelectOptions } from "../../UI/MySelect/MySelect";
import { changePrice, changeRooms, changeSort } from "./controlPanelSlice";
import NumberRange from "./NumberRange/NumberRange";
import RoomRange from "./RoomRange/RoomRange";
import "./ControlPanel.style.scss";
import AdditionalModal from "./AdditionalModal/AdditionalModal";

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
    setPage: Dispatch<SetStateAction<number>>;
}

const ControlPanel = ({ setPage }: ControlPanelProps) => {
    const [priceStart, setPriceStart] = useState("");
    const [priceEnd, setPriceEnd] = useState("");
    const debouncedPriceStart = useDebounce(priceStart);
    const debouncedPriceEnd = useDebounce(priceEnd);

    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch();

    const handleChangeSort = (selectedSort: SelectSort) => {
        dispatch(changeSort(selectedSort));
    };

    const handleChangeRooms = (numberRooms: number) => {
        dispatch(changeRooms(numberRooms));
    };

    useEffect(() => {
        dispatch(
            changePrice({
                priceStart: Number(debouncedPriceStart.replace(/\s/gi, "")),
                priceEnd: Number(debouncedPriceEnd.replace(/\s/gi, "")),
            })
        );
    }, [debouncedPriceStart, debouncedPriceEnd]);

    //Disable scroll when modal is open
    useEffect(() => {
        if (openModal) {
            document.body.style.position = "fixed";
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.right = `-${window.scrollX}px`;
            document.body.style.left = `-${window.scrollX}px`;
        } else {
            document.body.style.position = "unset";
            document.body.style.top = "unset";
            document.body.style.right = "unset";
            document.body.style.left = "unset";
        }
    }, [openModal]);

    return (
        <div className="bg-white">
            <div className="container pt-3 pb-3">
                <div className="row align-items-center" style={{ height: "55px" }}>
                    <div className="col-4 d-flex flex-column h-100">
                        Стоимость
                        <NumberRange
                            priceStart={priceStart}
                            priceEnd={priceEnd}
                            setPriceStart={setPriceStart}
                            setPriceEnd={setPriceEnd}
                        />
                    </div>
                    <div className="col-4 d-flex flex-column h-100">
                        Комнатность
                        <RoomRange handleChangeRooms={handleChangeRooms} />
                    </div>
                    <div className="col-4 d-flex justify-content-end h-100">
                        <MySelect
                            handleChangeSort={handleChangeSort}
                            optionsArray={selectOptions}
                        ></MySelect>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center mt-3">
                    <div className="col-6 d-flex justify-content-center">
                        <button className="control-button" onClick={() => setOpenModal(true)}>
                            <div className="d-flex align-items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <span className="ms-2">Расширенный поиск</span>
                            </div>
                        </button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        {/* TODO We don't need this button, cuz we have automatic filter logic, but for the UI we may leave it */}
                        <button
                            className="control-button control-button__main"
                            onClick={() => setPage(1)}
                        >
                            Поиск предложений
                        </button>
                    </div>
                </div>
            </div>
            {openModal && <AdditionalModal setOpenModal={setOpenModal}></AdditionalModal>}
        </div>
    );
};

export default ControlPanel;
