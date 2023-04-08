/// <reference types="react" />
import { Direction } from 'utils';
type useTouchDirectionProps<T extends HTMLElement> = {
    onEnd: (direction: Direction) => void;
    onMove?: (e: React.TouchEvent<T>, startEvent: React.TouchEvent<T>) => void;
    onStart?: (e: React.TouchEvent<T>) => void;
};
export declare function useTouchDirection<T extends HTMLElement>({ onStart, onMove, onEnd, }: useTouchDirectionProps<T>): {
    onTouchStart: (e: React.TouchEvent<T>) => void;
    onTouchMove: (e: React.TouchEvent<T>) => void;
    onTouchEnd: (e: React.TouchEvent<T>) => void;
};
export {};
