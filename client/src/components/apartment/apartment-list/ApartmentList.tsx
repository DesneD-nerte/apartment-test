import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApartmentItem from "../apartment-item/ApartmentItem";
import { fetchApartments } from "../Apartment.entity";
import Pagination from "../../pagination/Pagination";
import ControlPanel from "../../controlPanel/ControlPanel";

const ApartmentList = () => {
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(0);

    const { isLoading, error, data } = useQuery({
        queryKey: ["apartmentData", page],
        queryFn: () => fetchApartments(page),
    });

    useEffect(() => {
        const fetchData = async () => {
            return await fetchApartments();
        };

        fetchData().then((res) => {
            setPageLength(res.length / 8);
        });
    }, []);

    return (
        <div>
            <ControlPanel dataApartments={data}></ControlPanel>
            <div className="container">
                <div className="row g-3">
                    {data &&
                        data.map((oneApartment) => {
                            return <ApartmentItem key={oneApartment.id} {...oneApartment} />;
                        })}
                </div>
                <div className="mt-3">
                    <Pagination pageLength={pageLength} page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    );
};

export default ApartmentList;
