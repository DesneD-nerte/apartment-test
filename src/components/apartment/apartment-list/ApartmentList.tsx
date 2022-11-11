import React, { useState } from "react";
import ApartmentItem from "../apartment-item/apartmentItem";

const fetchApartments = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
};

const ApartmentList = () => {
    const [apartmentData, setApartmentData] = useState();
    return (
        <div>
            <ApartmentItem></ApartmentItem>
            <ApartmentItem></ApartmentItem>
            <ApartmentItem></ApartmentItem>
        </div>
    );
};

export default ApartmentList;
