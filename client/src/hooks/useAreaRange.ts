import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useAreaRange = () => {
    const { area } = useSelector((state: RootState) => state.filter);

    const totalStart = useMemo(() => {
        if (area.areaTotal.totalStart == 0) {
            return "";
        }

        return area.areaTotal.totalStart.toString();
    }, [area]);

    const liveStart = useMemo(() => {
        if (area.areaLive.liveStart == 0) {
            return "";
        }

        return area.areaTotal.totalEnd.toString();
    }, [area]);

    const kitchenStart = useMemo(() => {
        if (area.areaKitchen.kitchenStart == 0) {
            return "";
        }

        return area.areaTotal.totalStart.toString();
    }, [area]);

    const totalEnd = useMemo(() => {
        console.log(123);
        if (area.areaTotal.totalEnd == Number.MAX_VALUE) {
            return "";
        }

        return area.areaTotal.totalEnd.toString();
    }, [area]);

    const liveEnd = useMemo(() => {
        if (area.areaLive.liveEnd == Number.MAX_VALUE) {
            return "";
        }

        return area.areaTotal.totalEnd.toString();
    }, [area]);

    const kitchenEnd = useMemo(() => {
        if (area.areaKitchen.kitchenEnd == Number.MAX_VALUE) {
            return "";
        }

        return area.areaTotal.totalEnd.toString();
    }, [area]);

    return [totalStart, liveStart, kitchenStart, totalEnd, liveEnd, kitchenEnd];
};

export default useAreaRange;
