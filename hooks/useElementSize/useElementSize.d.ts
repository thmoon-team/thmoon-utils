export interface ContainerSize {
    height: number | undefined;
    left: number | undefined;
    right: number | undefined;
    top: number | undefined;
    width: number | undefined;
}
export declare const useElementSize: <T extends HTMLElement>() => {
    ref: import("react").RefObject<T>;
    container: ContainerSize;
};
