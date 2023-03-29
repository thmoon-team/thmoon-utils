import { useCallback, useEffect, useState } from 'react';

export const useWindowSize = (): number | null => {
    const [width, setWidth] = useState<number | null>(
        typeof document === 'undefined' ? null : document.documentElement.clientWidth,
    );

    const handleWindowResize = useCallback(() => {
        setWidth(document.documentElement.clientWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [handleWindowResize]);

    return width;
};
