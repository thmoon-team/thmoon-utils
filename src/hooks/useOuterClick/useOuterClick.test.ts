/**
 * @jest-environment jsdom
 */

import { fireEvent, renderHook } from '@testing-library/react';

import { useOuterClick } from './useOuterClick';

describe('useOuterClick', () => {
    it('should be defined', () => {
        expect(useOuterClick).toBeDefined();
    });

    it('should handle outside click', () => {
        const target = document.createElement('div');
        document.body.appendChild(target);

        const outside = document.createElement('div');
        document.body.appendChild(outside);

        const ref = {
            current: target,
        };
        const callback = jest.fn();

        const view = renderHook(() => {
            useOuterClick(ref, callback);
        });

        expect(callback).toHaveBeenCalledTimes(0);
        fireEvent.click(outside);
        expect(callback).toHaveBeenCalledTimes(1);

        jest.spyOn(document, 'removeEventListener');

        view.unmount();
        expect(document.removeEventListener).toHaveBeenCalledTimes(1);

        fireEvent.click(outside);
        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should do nothing after click on the target element', () => {
        const target = document.createElement('div');
        document.body.appendChild(target);

        const ref = {
            current: target,
        };
        const callback = jest.fn();

        renderHook(() => {
            useOuterClick(ref, callback);
        });

        expect(callback).toHaveBeenCalledTimes(0);
        fireEvent.click(target);
        expect(callback).toHaveBeenCalledTimes(0);
    });
});
