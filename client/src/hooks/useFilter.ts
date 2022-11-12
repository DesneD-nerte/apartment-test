import { useMemo } from "react";
import { Apartment } from "../components/apartment/Apartment.entity";

interface useFilterProps {
    apartments: Apartment[];
}

export const useFilter = ({ apartments }: useFilterProps) => {
    // const fitleredApartments = useMemo(() => {
    //     return apartments.filter(oneApartment => {
    //     }
    //     );
    // }, [apartments, filter])
};
