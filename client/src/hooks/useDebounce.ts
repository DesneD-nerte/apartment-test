import React, { useEffect, useState } from "react";

export const useDebounce = (value: string, delay = 500) => {
    const [debounced, setDebounced] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debounced;
};
