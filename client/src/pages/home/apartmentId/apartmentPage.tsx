import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ApartmentDetail from "../../../components/apartment/apartment-detail/ApartmentDetail";
import { fetchOneApartment } from "../../../components/apartment/Apartment.entity";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

type MyApartmentIdParam = {
    apartmentId: string;
};

const ApartmentPage = () => {
    const { apartmentId } = useParams<MyApartmentIdParam>() as MyApartmentIdParam;
    const { status, isLoading, error, data, isSuccess } = useQuery({
        queryKey: ["apartmentData", apartmentId],
        queryFn: () => fetchOneApartment(apartmentId),
    });

    console.log(status);

    return (
        <>
            <Header />
            <main>
                <div className="pt-3 pb-3">
                    {data ? <ApartmentDetail oneApartment={data} /> : <div>Check your request</div>}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ApartmentPage;
