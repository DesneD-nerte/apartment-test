import React, { useMemo } from "react";
import { fetchList } from "../components/apartment/Apartment.entity";

interface usePageProps {
    fetchList: fetchList;
    itemsPerPage: number;
}

export const usePage = ({ fetchList, itemsPerPage }: usePageProps) => {
    const { contentRange, data } = fetchList;

    const paginationLength = useMemo(() => {
        if (data) {
            return Math.ceil(contentRange / itemsPerPage);
        }

        return 0;
    }, [data]);

    return { paginationLength, apartments: data };
};
