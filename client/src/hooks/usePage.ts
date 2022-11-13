import React, { useMemo } from "react";
import { Apartment } from "../components/apartment/Apartment.entity";

interface usePageProps {
    page: number;
    apartments?: Apartment[];
}

export const usePage = ({ page, apartments }: usePageProps) => {
    const paginationLength = useMemo(() => {
        if (apartments) {
            return Math.ceil(apartments.length / 8);
        }

        return 0;
    }, [apartments]);

    const pageApartments = useMemo(() => {
        const fromPosition = (page - 1) * 8;
        const toPosition = (page - 1) * 8 + 8;

        return apartments?.slice(fromPosition, toPosition);
    }, [page, apartments]);

    return { paginationLength, pageApartments };
};
