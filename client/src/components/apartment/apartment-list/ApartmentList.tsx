import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ApartmentItem from "../apartment-item/ApartmentItem";

const fetchApartments = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
};

const backendApi = process.env.BACKEND_API_URL;

const ApartmentList = () => {
    // const [apartmentData, setApartmentData] = useState();
    const { isLoading, error, data } = useQuery({
        queryKey: ["apartmentData"],
        queryFn: () => {
            fetch(`${backendApi}/apartments`).then((res) => res.json());
        },
    });

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error;

    return (
        <div>
            <ApartmentItem></ApartmentItem>
            <ApartmentItem></ApartmentItem>
            <ApartmentItem></ApartmentItem>
        </div>
    );
};

export default ApartmentList;
