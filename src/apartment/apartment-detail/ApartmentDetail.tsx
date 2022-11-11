import React from "react";
import { useParams } from "react-router-dom";

const ApartmentDetail = () => {
    const { apartmentId } = useParams();

    return <div>{apartmentId} HELLO</div>;
};

export default ApartmentDetail;
