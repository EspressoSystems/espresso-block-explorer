import { default as React } from 'react';
export interface KeepWhileLoadingProps {
    /**
     * The loaded data's context first, then those describing what it was loaded
     * for (the page, the block). Must be the same list on every render.
     */
    contexts: readonly React.Context<unknown>[];
    children?: React.ReactNode | React.ReactNode[];
}
/**
 * KeepWhileLoading shows its children the last loaded values of `contexts`
 * until new data arrives, so the current page stays on screen while the next
 * one loads. The values never move ahead of the data. The first load, and
 * errors, pass through as they are.
 */
export declare const KeepWhileLoading: React.FC<KeepWhileLoadingProps>;
