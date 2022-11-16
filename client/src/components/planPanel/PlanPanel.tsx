import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import { useFilter } from "../../hooks/useFilter";
import { usePage } from "../../hooks/usePage";
import { Apartment, fetchApartments } from "../apartment/Apartment.entity";
import Pagination from "../pagination/Pagination";
import OnePlanArea from "./onePlanArea";

export const PlanPanel = () => {
    const [floor, setFloor] = useState(1);

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["apartmentData"],
        queryFn: () => fetchApartments(),
    });

    const [filteredApartments, setFilteredApartments] = useState<Apartment[]>();

    useEffect(() => {
        setFilteredApartments(() => {
            return data?.filter((oneApartment) => {
                return oneApartment.floor == floor;
            });
        });
    }, [floor, data]);

    const paginationLength = useMemo(() => {
        if (data) {
            return Math.ceil(data.length / 6);
        }

        return 0;
    }, [data]);

    return (
        <div>
            <figure id="figura" title="План этажа">
                <map name="recortes" id="recortes">
                    {filteredApartments?.map((oneApartment) => {
                        return (
                            <OnePlanArea
                                href={oneApartment.id}
                                posOnFloor={oneApartment.posOnFloor}
                                key={oneApartment.id}
                            ></OnePlanArea>
                        );
                    })}
                    <img
                        src="plan.png"
                        id="capaRecorte"
                        alt="Workplace"
                        height="100%"
                        width="100%"
                    />
                </map>
                <img
                    src="https://lh3.googleusercontent.com/-HqFCpcmlv1U/VjZqE6e7u0I/AAAAAAAAGao/hIQohrsu0xI/s800-Ic42/transparente.gif"
                    id="imagen"
                    useMap="#recortes"
                />
            </figure>
            <div className="position-fixed w-100" style={{ bottom: 0 }}>
                <div className="d-flex justify-content-center align-items-center">
                    <Pagination
                        paginationLength={paginationLength}
                        page={floor}
                        setPage={setFloor}
                    />
                </div>
            </div>
        </div>
    );
};
