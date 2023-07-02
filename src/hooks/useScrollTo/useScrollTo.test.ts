import { act, renderHook } from '@testing-library/react';

import { useScrollTo } from './useScrollTo';

const spyScrollTo = jest.fn();
let element: HTMLElement;

beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global.window, 'scrollTo').mockImplementation(spyScrollTo);

    element = document.createElement('div');
    element.style.height = '100px';
    element.setAttribute('id', 'id');
    jest.spyOn(element, 'offsetTop', 'get').mockReturnValue(300);
    document.body.appendChild(element);
});

afterAll(() => {
    jest.resetAllMocks();
    jest.clearAllTimers();
});

describe('useOuterClick', () => {
    it('Should scroll to top of page by default', () => {
        const hook = renderHook(() => useScrollTo());
        act(() => {
            hook.result.current.scrollTo();
        });

        act(() => {
            jest.advanceTimersByTime(0);
        });

        expect(spyScrollTo).toHaveBeenCalledWith({
            behavior: 'smooth',
            top: 0,
        });
    });

    it('Should scroll to element', () => {
        const hook = renderHook(() => useScrollTo());
        act(() => {
            hook.result.current.scrollTo(element);
        });

        act(() => {
            jest.advanceTimersByTime(0);
        });

        expect(spyScrollTo).toHaveBeenCalledWith({
            behavior: 'smooth',
            top: 300,
        });
    });

    it('Should scroll to element by delay and custom behavior', () => {
        const hook = renderHook(() => useScrollTo({ delay: 400, behavior: 'auto' }));
        act(() => {
            hook.result.current.scrollTo(element);
        });

        act(() => {
            jest.advanceTimersByTime(0);
        });

        expect(spyScrollTo).toBeCalledTimes(0);

        act(() => {
            jest.advanceTimersByTime(400);
        });

        expect(spyScrollTo).toHaveBeenCalledWith({
            behavior: 'auto',
            top: 300,
        });
    });

    it('Should scroll to element with custom behavior', () => {
        const hook = renderHook(() => useScrollTo({ behavior: 'auto' }));
        act(() => {
            hook.result.current.scrollTo(element);
        });

        act(() => {
            jest.advanceTimersByTime(0);
        });

        expect(spyScrollTo).toHaveBeenCalledWith({
            behavior: 'auto',
            top: 300,
        });
    });
});
