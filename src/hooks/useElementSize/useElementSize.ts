import { useEffect, useRef, useState } from 'react';

export interface ContainerSize {
    height: number | undefined;
    left: number | undefined;
    right: number | undefined;
    top: number | undefined;
    width: number | undefined;
}

export const useElementSize = <T extends HTMLElement>() => {
    const [container, setContainer] = useState<ContainerSize>({
        width: undefined,
        height: undefined,
        left: undefined,
        right: undefined,
        top: undefined,
    });

    const ref = useRef<T>(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            const [entry] = entries;
            const rect = entry.target?.getBoundingClientRect();
            setContainer({
                width: rect?.width,
                height: rect?.height,
                right: rect?.right,
                left: rect?.left,
                top: rect?.top,
            });
        });

        const element = ref.current;

        if (element) {
            resizeObserver.observe(element);
        }

        return () => {
            if (element) {
                resizeObserver.unobserve(element);
            }
        };
    }, []);

    return { ref, container };
};
