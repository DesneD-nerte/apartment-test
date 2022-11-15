import React from "react";
import { useNavigate } from "react-router-dom";

interface OnePlanAreaProps {
    posOnFloor: number;
    href: string;
}

const OnePlanArea = ({ posOnFloor, href }: OnePlanAreaProps) => {
    const navigate = useNavigate();

    const handleClickArea = (e: React.SyntheticEvent) => {
        e.preventDefault();
        navigate(`/${href}`);
    };

    return (
        <>
            {posOnFloor == 1 && (
                <area
                    shape="poly"
                    title="A"
                    coords="420,640, 590,640, 590,845, 362,845, 362,690, 420,690"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleClickArea(e)}
                />
            )}
            {posOnFloor == 2 && (
                <area
                    shape="poly"
                    title="B"
                    coords="100,555, 360,555, 360,845, 100,845"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleClickArea(e)}
                />
            )}
            {posOnFloor == 3 && (
                <area
                    shape="poly"
                    title="C"
                    coords="100,375, 360,375, 360,555, 100,555"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleClickArea(e)}
                />
            )}
            {posOnFloor == 4 && (
                <area
                    shape="poly"
                    title="D"
                    coords="115,192, 285,192, 285,250, 362,250, 362,375, 100,375 100,290 112,290"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleClickArea(e)}
                />
            )}
            {posOnFloor == 5 && (
                <area
                    shape="poly"
                    title="E"
                    coords="130,5, 245,5, 245,35, 393,35, 393,5, 475,5, 475,35, 505,35, 505,200, 495,200, 495,250, 432,250, 432,245, 425,245, 425,250, 290,250, 290,195, 115,195, 115,65, 120,65"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleClickArea(e)}
                />
            )}
            {posOnFloor == 6 && (
                <area
                    shape="poly"
                    title="F"
                    coords="507,35, 718,35, 718,467, 509,467, 509,308, 432,308, 432,250, 497,250, 497,202, 508,202"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleClickArea(e)}
                />
            )}
        </>
    );
};

export default OnePlanArea;
