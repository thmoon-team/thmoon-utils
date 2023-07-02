import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

export function useMergedRef<T>(
    initialValue: T,
    additionalRefs?: (MutableRefObject<T> | undefined)[],
): MutableRefObject<T> {
    const ref = useRef<T>(initialValue);

    useEffect(() => {
        (additionalRefs || []).forEach((el) => {
            if (el) {
                // eslint-disable-next-line no-param-reassign
                el.current = ref.current;
            }
        });
    }, [additionalRefs, ref]);

    return ref;
}
