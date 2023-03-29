import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

export const useDebouncedValue = (newValue: string, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(newValue);

    const handleSetDebouncedValue = useMemo(
        () => debounce((value: string) => setDebouncedValue(value), delay),
        [delay],
    );

    useEffect(() => {
        handleSetDebouncedValue(newValue);

        return () => {
            handleSetDebouncedValue.cancel();
        };
    }, [delay, handleSetDebouncedValue, newValue]);

    return debouncedValue;
};
