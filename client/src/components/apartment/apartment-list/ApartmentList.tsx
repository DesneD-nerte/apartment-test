import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApartmentItem from "../apartment-item/ApartmentItem";
import { fetchApartments } from "../Apartment.entity";
import Pagination from "../../pagination/Pagination";
import ControlPanel from "../../controlPanel/ControlPanel";
import { usePage } from "../../../hooks/usePage";

const ApartmentList = () => {
    const [page, setPage] = useState(1);
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["apartmentData"],
        queryFn: () => fetchApartments(),
    });

    const { paginationLength, pageApartments } = usePage({ page, apartments: data });

    useEffect(() => {
        setPage(1);
    }, [paginationLength]);

    return (
        <div>
            <ControlPanel setPage={setPage}></ControlPanel>
            <div className="container mt-3 mb-3">
                <div className="row g-3">
                    {pageApartments?.length ? (
                        pageApartments.map((oneApartment) => {
                            return <ApartmentItem key={oneApartment.id} {...oneApartment} />;
                        })
                    ) : (
                        <div className="d-flex justify-content-center">Квартир не найдено</div>
                    )}
                </div>
                <div className="mt-3">
                    <Pagination paginationLength={paginationLength} page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    );
};

export default ApartmentList;
