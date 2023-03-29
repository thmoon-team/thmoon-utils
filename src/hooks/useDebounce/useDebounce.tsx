import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

export const useDebounce = (newValue: string, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(newValue);

    const handleSetDebounceValue = useMemo(() => debounce((value: string) => setDebouncedValue(value), delay), [delay]);

    useEffect(() => {
        handleSetDebounceValue(newValue);

        return () => {
            handleSetDebounceValue.cancel();
        };
    }, [delay, handleSetDebounceValue, newValue]);

    return debouncedValue;
};
