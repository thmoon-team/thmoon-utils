export declare enum DirectionType {
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    UP = "up"
}
export interface Direction {
    direction: DirectionType;
}
export declare const detectTouchDirection: (start: React.TouchEvent<HTMLElement>, end: React.TouchEvent<HTMLElement>) => Direction;
