import React, { Dispatch, SetStateAction } from "react";

interface PriceRangeProps {
    priceStart: string;
    priceEnd: string;
    setPriceStart: Dispatch<SetStateAction<string>>;
    setPriceEnd: Dispatch<SetStateAction<string>>;
}

const NumberRange = (props: PriceRangeProps) => {
    const { priceStart, priceEnd, setPriceStart, setPriceEnd } = props;

    const handleChangePrice = (value: string, setPriceState: Dispatch<SetStateAction<string>>) => {
        const valueNumberFormat = value.replace(/\s/gi, "");
        if (value == "" || Number(valueNumberFormat) > 0) {
            setPriceState(Intl.NumberFormat("ru-RU").format(Number(valueNumberFormat)));
        }
        if (Number(valueNumberFormat) == 0) {
            setPriceState("");
        }
    };

    return (
        <div className="d-flex flex-row">
            <input
                type="text"
                value={priceStart}
                onChange={(e) => handleChangePrice(e.currentTarget.value, setPriceStart)}
                min="0"
                placeholder="От"
                className="w-100"
            ></input>
            <input
                type="text"
                value={priceEnd}
                onChange={(e) => handleChangePrice(e.currentTarget.value, setPriceEnd)}
                placeholder="До"
                className="w-100"
            ></input>
        </div>
    );
};

export default NumberRange;
