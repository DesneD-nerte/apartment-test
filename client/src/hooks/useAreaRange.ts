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

        return area.areaLive.liveStart.toString();
    }, [area]);

    const kitchenStart = useMemo(() => {
        if (area.areaKitchen.kitchenStart == 0) {
            return "";
        }

        return area.areaKitchen.kitchenStart.toString();
    }, [area]);

    const totalEnd = useMemo(() => {
        if (area.areaTotal.totalEnd == Number.MAX_SAFE_INTEGER) {
            return "";
        }

        return area.areaTotal.totalEnd.toString();
    }, [area]);

    const liveEnd = useMemo(() => {
        if (area.areaLive.liveEnd == Number.MAX_SAFE_INTEGER) {
            return "";
        }

        return area.areaLive.liveEnd.toString();
    }, [area]);

    const kitchenEnd = useMemo(() => {
        if (area.areaKitchen.kitchenEnd == Number.MAX_SAFE_INTEGER) {
            return "";
        }

        return area.areaKitchen.kitchenEnd.toString();
    }, [area]);

    return [totalStart, liveStart, kitchenStart, totalEnd, liveEnd, kitchenEnd];
};

export default useAreaRange;
