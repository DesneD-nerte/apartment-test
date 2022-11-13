import React, { useState, useRef, useEffect } from "react";
import "./MySelect.style.scss";

export interface MySelectOptions<T> {
    option?: T;
    name: string;
}

interface MySelectProps<T> {
    optionsArray: MySelectOptions<T>[];
    handleChangeSort: (selectedSort: T) => void;
}

const MySelect = <T extends unknown>({ optionsArray, handleChangeSort }: MySelectProps<T>) => {
    const [openedList, setOpenedList] = useState(false);

    const refDiv = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setOpenedList(!openedList);
    };

    useEffect(() => {
        const closeList = (event: MouseEvent) => {
            if (openedList && !refDiv.current?.contains(event.target as Node)) {
                setOpenedList(!openedList);
            }
        };

        document.addEventListener("mousedown", closeList);

        return () => {
            document.removeEventListener("mousedown", closeList);
        };
    }, [openedList]);

    const handleItem = (value?: T) => {
        handleChangeSort(value);
        setOpenedList(false);
    };

    return (
        <div ref={refDiv} className="my-select">
            <button
                onClick={handleClick}
                className={`my-select__button ${openedList ? "active" : ""}`}
            >
                <div className="d-flex flex-row align-items-center">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    <div className="d-none d-sm-block ms-2 me-2">По умолчанию</div>
                    <div>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M6.882 9.471a.748.748 0 0 1 1.057 0l3.884 3.876a.25.25 0 0 0 .354 0l3.884-3.876a.748.748 0 0 1 1.057 1.058l-4.411 4.41a1 1 0 0 1-1.414 0l-4.411-4.41a.748.748 0 0 1 0-1.058z"></path>
                        </svg>
                    </div>
                </div>
            </button>

            {openedList && (
                <ul className="select-container" tabIndex={0}>
                    {optionsArray.map((oneOptions, index) => {
                        return (
                            <li className="select-container__item" key={index}>
                                <button
                                    onClick={() => handleItem(oneOptions.option)}
                                    className="select-container__button"
                                >
                                    {oneOptions.name}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default MySelect;
