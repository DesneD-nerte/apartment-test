import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApartmentItem from "../apartment-item/ApartmentItem";
import { fetchApartments } from "../Apartment.entity";

const ApartmentList = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["apartmentData"],
        queryFn: fetchApartments,
    });

    // if (isLoading) return "Loading...";

    // if (error) return "An error has occurred: " + error;

    console.log(data);

    return (
        <div className="container ">
            <div className="row g-3">
                {data &&
                    data.map((oneApartment) => {
                        return <ApartmentItem key={oneApartment.id} {...oneApartment} />;
                    })}
            </div>
        </div>
    );
};

export default ApartmentList;
