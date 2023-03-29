import { useCallback, useState } from 'react';

export const useBooleanState = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const setTrue = useCallback(() => setState(true), []);

    const setFalse = useCallback(() => setState(false), []);

    const toggle = useCallback(() => setState((prev) => !prev), []);

    return [state, setTrue, setFalse, toggle, setState] as const;
};
