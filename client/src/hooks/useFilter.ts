import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Apartment } from "../components/apartment/Apartment.entity";
import { RootState } from "../store/store";

interface useFilterProps {
    apartments?: Apartment[];
}

export const useFilter = ({ apartments }: useFilterProps) => {
    const { sort, price } = useSelector((state: RootState) => state.filter);
    const [newApartments, setNewApartments] = useState<Apartment[]>();

    useEffect(() => {
        if (price.priceStart || price.priceEnd) {
            setNewApartments(() => {
                return apartments?.filter((oneApartment) => {
                    if (price.priceStart && price.priceEnd) {
                        return (
                            oneApartment.price >= price.priceStart &&
                            oneApartment.price <= price.priceEnd
                        );
                    }
                    if (price.priceStart) return oneApartment.price >= price.priceStart;
                    if (price.priceEnd) return oneApartment.price <= price.priceEnd;
                });
            });
        } else {
            setNewApartments(apartments);
        }
    }, [price]);

    useEffect(() => {
        if (apartments) {
            setNewApartments(apartments);
        }
    }, [apartments]);

    const filteredApartments = useMemo(() => {
        if (!newApartments) {
            return;
        }

        return Array.from(newApartments).sort((oneApartment, secondApartment) => {
            if (sort == "PriceLowToHigh") {
                return oneApartment.price - secondApartment.price;
            }
            if (sort == "PriceHighToLow") {
                return secondApartment.price - oneApartment.price;
            }
            if (sort == "AreaLowToHigh") {
                return oneApartment.areaTotal - secondApartment.areaTotal;
            }
            if (sort == "AreaHighToLow") {
                return secondApartment.areaTotal - oneApartment.areaTotal;
            }

            return oneApartment.price;
        });
    }, [newApartments, sort, price]);

    return filteredApartments;
};
