import { useCallback, useEffect, useState } from 'react';

interface WindowSizes {
    height: number;
    width: number;
}

export const useWindowSize = (): WindowSizes | null => {
    const [windowSizes, setWidthSizes] = useState<WindowSizes | null>(
        typeof document === 'undefined'
            ? null
            : {
                  width: document.documentElement.clientWidth,
                  height: document.documentElement.clientHeight,
              },
    );

    const handleWindowResize = useCallback(() => {
        setWidthSizes({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [handleWindowResize]);

    return windowSizes;
};
