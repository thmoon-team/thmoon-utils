export enum DirectionType {
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
    UP = 'up',
}

export interface Direction {
    direction: DirectionType;
}

export const detectTouchDirection = (
    start: React.TouchEvent<HTMLElement>,
    end: React.TouchEvent<HTMLElement>,
): Direction => {
    const startTouch = start.touches[0];
    const endTouch = end.touches[0];

    const diffY = startTouch.clientY - endTouch.clientY;
    const diffX = startTouch.clientX - endTouch.clientX;

    if (Math.abs(diffY) > Math.abs(diffX)) {
        return { direction: diffY < 0 ? DirectionType.DOWN : DirectionType.UP };
    }

    return { direction: diffX < 0 ? DirectionType.RIGHT : DirectionType.LEFT };
};
