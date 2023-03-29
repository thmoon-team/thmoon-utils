/**
 * @jest-environment jsdom
 */

import { act, renderHook } from '@testing-library/react';

import { useBooleanState } from './useBooleanState';

const setUp = (initialValue?: boolean) => renderHook(() => useBooleanState(initialValue));

describe('useBooleanState', () => {
    it('should be defined', () => {
        expect(useBooleanState).toBeDefined();
    });

    it('should return boolean, and functions', () => {
        const { result } = setUp(false);

        expect(result.current[0]).toBe(false);
        expect(result.current[1]).toBeInstanceOf(Function);
        expect(result.current[2]).toBeInstanceOf(Function);
        expect(result.current[3]).toBeInstanceOf(Function);
        expect(result.current[4]).toBeInstanceOf(Function);
    });

    it('should correct start value', () => {
        let hook = setUp();
        expect(hook.result.current[0]).toBe(false);

        hook = setUp(false);
        expect(hook.result.current[0]).toBe(false);

        hook = setUp(true);
        expect(hook.result.current[0]).toBe(true);
    });

    it('should correct changes values', () => {
        const { result } = setUp(false);
        const [isOn, on, off, toggle] = result.current;

        expect(isOn).toBe(false);

        act(() => {
            on();
        });
        expect(result.current[0]).toBe(true);

        act(() => {
            off();
        });
        expect(result.current[0]).toBe(false);

        act(() => {
            toggle();
        });
        expect(result.current[0]).toBe(true);

        act(() => {
            toggle();
        });
        expect(result.current[0]).toBe(false);
    });
});
