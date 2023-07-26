import { useCallback } from 'react';

export const useScrollTo = (props?: { behavior?: ScrollBehavior; delay?: number }) => {
    const behavior = props?.behavior ?? 'smooth';
    const delay = props?.delay ?? 0;

    const handleScrollTo: <T extends HTMLElement>(anchor?: T | null | string) => void = useCallback(
        (anchor) => {
            const element = typeof anchor === 'string' ? document.querySelector(anchor) : anchor;
            setTimeout(() => {
                window.scrollTo({
                    behavior,
                    top: element instanceof HTMLElement ? element.offsetTop : 0,
                });
            }, delay);
        },
        [behavior, delay],
    );

    return { scrollTo: handleScrollTo };
};
