import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApartmentItem from "../apartment-item/ApartmentItem";
import { fetchApartments } from "../Apartment.entity";
import Pagination from "../../pagination/Pagination";
import ControlPanel from "../../controlPanel/ControlPanel";
import { useFilter } from "../../../hooks/useFilter";
import { usePage } from "../../../hooks/usePage";

const ApartmentList = () => {
    const [page, setPage] = useState(1);
    const { isLoading, error, data } = useQuery({
        queryKey: ["apartmentData"],
        queryFn: () => fetchApartments(),
    });

    const { paginationLength, pageApartments } = usePage({ page, apartments: data });

    return (
        <div>
            <ControlPanel></ControlPanel>
            <div className="container mt-3">
                <div className="row g-3">
                    {pageApartments?.length ? (
                        pageApartments.map((oneApartment) => {
                            return <ApartmentItem key={oneApartment.id} {...oneApartment} />;
                        })
                    ) : (
                        <div>Квартир не найдено</div>
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
