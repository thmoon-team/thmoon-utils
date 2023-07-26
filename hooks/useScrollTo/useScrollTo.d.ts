export declare const useScrollTo: (props?: {
    behavior?: ScrollBehavior;
    delay?: number;
}) => {
    scrollTo: <T extends HTMLElement>(anchor?: string | T | null | undefined) => void;
};
