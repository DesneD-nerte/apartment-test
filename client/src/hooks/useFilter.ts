import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Apartment } from "../components/apartment/Apartment.entity";
import { RootState } from "../store/store";

interface useFilterProps {
    apartments?: Apartment[];
}

export const useFilter = ({ apartments }: useFilterProps) => {
    const { sort, price, rooms, area } = useSelector((state: RootState) => state.filter);
    const [newApartments, setNewApartments] = useState<Apartment[]>();

    useEffect(() => {
        if (apartments) {
            setNewApartments(apartments);
        }
    }, [apartments]);

    const priceFilter = useMemo(() => {
        if (price.priceStart || price.priceEnd) {
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
        } else {
            return apartments;
        }
    }, [apartments, price]);

    const roomsFilter = useMemo(() => {
        if (rooms.length) {
            return apartments?.filter((oneApartment) => {
                return rooms.includes(oneApartment.rooms);
            });
        } else {
            return apartments;
        }
    }, [apartments, rooms]);

    const areaFilter = useMemo(() => {
        if (area.areaTotal || area.areaLive || area.areaKitchen) {
            return apartments?.filter((oneApartment) => {
                return (
                    oneApartment.areaTotal >= area.areaTotal.totalStart &&
                    oneApartment.areaTotal <= area.areaTotal.totalEnd &&
                    oneApartment.areaLive >= area.areaLive.liveStart &&
                    oneApartment.areaTotal <= area.areaLive.liveEnd &&
                    oneApartment.areaKitchen >= area.areaKitchen.kitchenStart &&
                    oneApartment.areaKitchen <= area.areaKitchen.kitchenEnd
                );
            });
        } else {
            return apartments;
        }
    }, [apartments, area]);

    const intersectedApartments = useMemo(() => {
        const filteredArray = [priceFilter, roomsFilter, areaFilter];

        return filteredArray.reduce((a, b) => a?.filter((c) => b?.includes(c)));
    }, [newApartments, sort, price, rooms, area]);

    const filteredApartments = useMemo(() => {
        return intersectedApartments?.sort((oneApartment, secondApartment) => {
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
    }, [intersectedApartments]);

    return filteredApartments;
};
