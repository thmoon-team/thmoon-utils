export enum Direction {
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
    UP = 'up',
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
        return diffY < 0 ? Direction.DOWN : Direction.UP;
    }

    return diffX < 0 ? Direction.RIGHT : Direction.LEFT;
};
