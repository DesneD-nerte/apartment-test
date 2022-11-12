import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApartmentItem from "../apartment-item/ApartmentItem";
import { fetchApartments } from "../Apartment.entity";
import Pagination from "../../pagination/Pagination";
import ControlPanel from "../../controlPanel/ControlPanel";
import { useFilter } from "../../../hooks/useFilter";

const ApartmentList = () => {
    const [page, setPage] = useState(1);
    const { isLoading, error, data } = useQuery({
        queryKey: ["apartmentData"],
        queryFn: () => fetchApartments(),
    });

    const paginationLength = useMemo(() => {
        if (data) {
            return data?.length / 8;
        }
        return 0;
    }, [data]);

    const filteredApartments = useFilter({ page: page, apartments: data });

    return (
        <div>
            <ControlPanel dataApartments={data}></ControlPanel>
            <div className="container">
                <div className="row g-3">
                    {filteredApartments &&
                        filteredApartments.map((oneApartment) => {
                            return <ApartmentItem key={oneApartment.id} {...oneApartment} />;
                        })}
                </div>
                <div className="mt-3">
                    <Pagination paginationLength={paginationLength} page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    );
};

export default ApartmentList;
