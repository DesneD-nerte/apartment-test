import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Apartment } from "../components/apartment/Apartment.entity";
import { RootState } from "../store/store";

interface useFilterProps {
    page: number;
    apartments?: Apartment[];
}

export const useFilter = ({ page, apartments }: useFilterProps) => {
    const filter = useSelector((state: RootState) => state.filter.sort);

    const fitleredApartments = useMemo(() => {
        if (!apartments) {
            return;
        }
        const apartmentsCopy = [...apartments];
        return apartmentsCopy.sort((oneApartment, secondApartment) => {
            if (filter == "PriceLowToHigh") {
                return oneApartment.price - secondApartment.price;
            }
            if (filter == "PriceHighToLow") {
                return secondApartment.price - oneApartment.price;
            }
            if (filter == "AreaLowToHigh") {
                return oneApartment.areaTotal - secondApartment.areaTotal;
            }
            if (filter == "AreaHighToLow") {
                return secondApartment.areaTotal - oneApartment.areaTotal;
            }

            return oneApartment.price;
        });
    }, [apartments, filter]);

    function sliceApartments() {
        const fromPosition = (page - 1) * 8;
        const toPosition = (page - 1) * 8 + 8;

        return fitleredApartments?.slice(fromPosition, toPosition);
    }

    return sliceApartments();
};
