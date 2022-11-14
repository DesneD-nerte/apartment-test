import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAreaRange from "../../../hooks/useAreaRange";
import { useDebounce } from "../../../hooks/useDebounce";
import { RootState } from "../../../store/store";
import { changeArea } from "../controlPanelSlice";
import NumberRange from "../NumberRange/NumberRange";
import "./AdditionalModal.style.scss";

interface AdditionalModalProps {
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const AdditionalModal = ({ setOpenModal }: AdditionalModalProps) => {
    const [totalStart, liveStart, kitchenStart, totalEnd, liveEnd, kitchenEnd] = useAreaRange();

    const [areaTotalStart, setAreaTotalStart] = useState(totalStart);
    const [areaTotalEnd, setAreaTotalEnd] = useState(totalEnd);
    const debouncedAreaTotalStart = useDebounce(areaTotalStart);
    const debouncedAreaTotalEnd = useDebounce(areaTotalEnd);

    const [areaLiveStart, setAreaLiveStart] = useState(liveStart);
    const [areaLiveEnd, setAreaLiveEnd] = useState(liveEnd);
    const debouncedAreaLiveStart = useDebounce(areaLiveStart);
    const debouncedAreaLiveEnd = useDebounce(areaLiveEnd);

    const [areaKitchenStart, setAreaKitchenStart] = useState(kitchenStart);
    const [areaKitchenEnd, setAreaKitchenEnd] = useState(kitchenEnd);
    const debouncedAreaKitchenStart = useDebounce(areaKitchenStart);
    const debouncedAreaKitchenEnd = useDebounce(areaKitchenEnd);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            changeArea({
                areaTotal: {
                    totalStart: Number(debouncedAreaTotalStart.replace(/\s/gi, "")),
                    totalEnd: Number(debouncedAreaTotalEnd.replace(/\s/gi, "")),
                },
                areaLive: {
                    liveStart: Number(debouncedAreaLiveStart.replace(/\s/gi, "")),
                    liveEnd: Number(debouncedAreaLiveEnd.replace(/\s/gi, "")),
                },
                areaKitchen: {
                    kitchenStart: Number(debouncedAreaKitchenStart.replace(/\s/gi, "")),
                    kitchenEnd: Number(debouncedAreaKitchenEnd.replace(/\s/gi, "")),
                },
            })
        );
    }, [
        debouncedAreaTotalStart,
        debouncedAreaTotalEnd,
        debouncedAreaLiveStart,
        debouncedAreaLiveEnd,
        debouncedAreaKitchenStart,
        debouncedAreaKitchenEnd,
    ]);

    return (
        <div
            className="background-wrapper"
            onClick={(e) => {
                setOpenModal(false);
            }}
        >
            <div className="content-container">
                <div onClick={(e) => e.stopPropagation()} className="p-4">
                    <div>
                        <div>
                            Общая площадь м<sup>2</sup>
                            <NumberRange
                                priceStart={areaTotalStart}
                                priceEnd={areaTotalEnd}
                                setPriceStart={setAreaTotalStart}
                                setPriceEnd={setAreaTotalEnd}
                            />
                        </div>
                        <div className="mt-3">
                            Жилая площадь м<sup>2</sup>
                            <NumberRange
                                priceStart={areaLiveStart}
                                priceEnd={areaLiveEnd}
                                setPriceStart={setAreaLiveStart}
                                setPriceEnd={setAreaLiveEnd}
                            />
                        </div>

                        <div className="mt-3">
                            Площадь кухни м<sup>2</sup>
                            <NumberRange
                                priceStart={areaKitchenStart}
                                priceEnd={areaKitchenEnd}
                                setPriceStart={setAreaKitchenStart}
                                setPriceEnd={setAreaKitchenEnd}
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-sm-row flex-column-reverse justify-content-end buttonsContainer mt-3">
                        <button className="control-button" onClick={() => setOpenModal(false)}>
                            Отмена
                        </button>
                        <button
                            className="control-button control-button__main"
                            onClick={() => setOpenModal(false)}
                        >
                            Показать предложения
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalModal;
