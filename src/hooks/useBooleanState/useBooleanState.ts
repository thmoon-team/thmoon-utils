import { useCallback, useState } from 'react';

export const useBooleanState = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const open = useCallback(() => setState(true), []);

    const close = useCallback(() => setState(false), []);

    const toggle = useCallback(() => setState((prev) => !prev), []);

    return [state, open, close, toggle, setState] as const;
};
