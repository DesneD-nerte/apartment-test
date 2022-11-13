import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import "./RoomRange.style.scss";

interface RoomRangeProps {
    handleChangeRooms: (number: number) => void;
}

const RoomRange = ({ handleChangeRooms }: RoomRangeProps) => {
    const { rooms } = useSelector((state: RootState) => state.filter);

    return (
        <div className="d-flex flex-row">
            {[0, 1, 2, 3].map((item) => {
                return (
                    <button
                        key={item}
                        className={`room-button ${rooms.includes(item + 1) ? "is-active" : ""}`}
                        onClick={(e) => handleChangeRooms(item + 1)}
                    >
                        {item + 1}
                    </button>
                );
            })}
        </div>
    );
};

export default RoomRange;
