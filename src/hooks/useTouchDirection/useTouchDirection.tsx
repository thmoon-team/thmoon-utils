import { useCallback, useState } from 'react';

import { detectTouchDirection, Direction } from 'utils';

type useTouchDirectionProps<T extends HTMLElement> = {
    onEnd: (direction: Direction) => void;
    onMove?: (e: React.TouchEvent<T>, startEvent: React.TouchEvent<T>) => void;
    onStart?: (e: React.TouchEvent<T>) => void;
};

export function useTouchDirection<T extends HTMLElement>({
    onStart = () => undefined,
    onMove = () => undefined,
    onEnd,
}: useTouchDirectionProps<T>) {
    const [startEvent, setStartEvent] = useState<React.TouchEvent<T> | undefined>(undefined);
    const [endEvent, setEndEvent] = useState<React.TouchEvent<T> | undefined>(undefined);

    const onTouchStart = useCallback(
        (e: React.TouchEvent<T>) => {
            setStartEvent(e);
            onStart(e);
        },
        [onStart],
    );

    const onTouchMove = useCallback(
        (e: React.TouchEvent<T>) => {
            setEndEvent(e);
            if (startEvent) {
                onMove(e, startEvent);
            }
        },
        [onMove, startEvent],
    );

    const onTouchEnd = useCallback(
        (e: React.TouchEvent<T>) => {
            e.stopPropagation();
            if (startEvent && endEvent) {
                onEnd(detectTouchDirection(startEvent, endEvent));
            }
            setEndEvent(undefined);
        },
        [onEnd, endEvent, startEvent],
    );

    return { onTouchStart, onTouchMove, onTouchEnd };
}
