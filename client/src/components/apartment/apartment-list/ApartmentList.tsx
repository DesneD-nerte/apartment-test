import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApartmentItem from "../apartment-item/ApartmentItem";
import { fetchApartments } from "../Apartment.entity";
import Pagination from "../../pagination/Pagination";
import ControlPanel from "../../controlPanel/ControlPanel";
import { usePage } from "../../../hooks/usePage";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const initialState = { contentRange: 8, data: [] };

const ApartmentList = () => {
    const [page, setPage] = useState(1);

    const { sort, price, rooms, area } = useSelector((state: RootState) => state.filter);
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["apartmentData", page, price, rooms, area, sort],
        queryFn: () => fetchApartments(page, price, rooms, area, sort),
    });

    const { paginationLength, apartments } = usePage({
        fetchList: data || initialState,
        itemsPerPage: 8,
    });

    useEffect(() => {
        setPage(1);
    }, [sort, price, rooms, area]);

    return (
        <div>
            <ControlPanel setPage={setPage}></ControlPanel>
            <div className="container pt-3 pb-3">
                <div className="row g-3">
                    {apartments?.length ? (
                        apartments.map((oneApartment) => {
                            return <ApartmentItem key={oneApartment.id} {...oneApartment} />;
                        })
                    ) : (
                        <div className="d-flex justify-content-center">Квартир не найдено</div>
                    )}
                </div>
                {apartments?.length ? (
                    <div className="mt-3">
                        <Pagination
                            paginationLength={paginationLength}
                            page={page}
                            setPage={setPage}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ApartmentList;
