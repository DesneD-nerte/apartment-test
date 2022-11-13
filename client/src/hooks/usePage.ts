import React, { useMemo } from "react";
import { Apartment } from "../components/apartment/Apartment.entity";
import { useFilter } from "./useFilter";

interface usePageProps {
    page: number;
    apartments?: Apartment[];
}

export const usePage = ({ page, apartments }: usePageProps) => {
    const filteredApartments = useFilter({ apartments: apartments });

    const paginationLength = useMemo(() => {
        if (filteredApartments) {
            return Math.ceil(filteredApartments.length / 8);
        }

        return 0;
    }, [filteredApartments]);

    const pageApartments = useMemo(() => {
        const fromPosition = (page - 1) * 8;
        const toPosition = (page - 1) * 8 + 8;

        return filteredApartments?.slice(fromPosition, toPosition);
    }, [page, filteredApartments]);

    return { paginationLength, pageApartments };
};
