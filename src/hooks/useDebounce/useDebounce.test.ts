/**
 * @jest-environment jsdom
 */

import { act, renderHook } from '@testing-library/react';

import { useDebounce } from './useDebounce';

const setUp = (value: string, delay: number) =>
    renderHook(({ value: v, delay: d }) => useDebounce(v, d), {
        initialProps: { value, delay },
    });

describe('useBooleanState', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should be defined', () => {
        expect(useDebounce).toBeDefined();
    });

    it('should be returns the debounced value after the specified delay', async () => {
        const initialValue = '';
        const testValue = 'test';
        const delay = 1000;

        const { result, rerender } = setUp(initialValue, delay);

        expect(result.current).toEqual(initialValue);

        act(() => {
            rerender({ value: testValue, delay });
        });

        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(result.current).toEqual(initialValue);

        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(result.current).toEqual(testValue);
    });

    it('returns the debounced value after the specified delay', async () => {
        const initialValue = '';
        const middleValue = 'middle-value';
        const finalTestValue = 'test-value';
        const delay = 1000;

        const { result, rerender } = setUp(initialValue, delay);

        expect(result.current).toEqual(initialValue);

        act(() => {
            rerender({ value: middleValue, delay });
        });

        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(result.current).toEqual(initialValue);

        act(() => {
            rerender({ value: finalTestValue, delay });
        });

        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(result.current).toEqual(initialValue);

        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(result.current).toEqual(finalTestValue);
    });
});
