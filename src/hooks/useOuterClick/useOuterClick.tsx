import React, { RefObject, useCallback, useEffect } from 'react';

export const useOuterClick = (
    element: RefObject<HTMLElement>,
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
    const clickOutOfElement = useCallback(
        (event: Event) => element.current != null && !element.current?.contains(event.target as Node),
        [element],
    );

    const handleOutsideClick = useCallback(
        (event: Event) => {
            if (clickOutOfElement(event)) setIsOpened(false);
        },
        [clickOutOfElement, setIsOpened],
    );

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideClick, true);
        };
    }, [handleOutsideClick]);
};
