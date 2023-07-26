import type { MutableRefObject } from 'react';
export declare function useMergedRef<T>(initialValue: T, additionalRefs?: (MutableRefObject<T> | undefined)[]): MutableRefObject<T>;
