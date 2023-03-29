/**
 * @jest-environment jsdom
 */

import React, { useRef } from 'react';
import { fireEvent, render, renderHook } from '@testing-library/react';

import { useTouchDirection } from './useTouchDirection';

describe('useTouchDirection', () => {
    it('should be defined', () => {
        expect(useTouchDirection).toBeDefined();
    });

    it('should handle outside click', () => {
        const handleTouchStart = jest.fn();
        const handleTouchMove = jest.fn();
        const handleTouchEnd = jest.fn();

        const { result } = renderHook(() =>
            useTouchDirection<HTMLDivElement>({
                onStart: handleTouchStart,
                onMove: handleTouchMove,
                onEnd: handleTouchEnd,
            }),
        );

        const { onTouchEnd, onTouchMove, onTouchStart } = result.current;

        const { result: useRefResult } = renderHook(() => useRef<HTMLDivElement>(null));
        render(
            <div
                ref={useRefResult.current}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onTouchStart={onTouchStart}
                style={{ width: '1000px', height: '1000px' }}
            />,
        );

        fireEvent.touchStart(useRefResult.current.current as HTMLDivElement, { clientX: 0, clientY: 0 });
        expect(handleTouchStart).toBeCalled();
    });
});
