import { default as React } from 'react';
export declare enum CollapseState {
    collapsed = 0,
    expanded = 1
}
/**
 * CollapseStateContext provides a React Context that represents the current
 * collapse state of a UI element.
 */
export declare const CollapseStateContext: React.Context<CollapseState>;
/**
 * SetCollapseStateContext provides a React Context that represents the setter
 * function to update the current collapse state of a UI element.
 */
export declare const SetCollapseStateContext: React.Context<React.Dispatch<React.SetStateAction<CollapseState>>>;
/**
 * ProvideCollapseState is a React Component that defines a collapse state,
 * and provides contexts for reading, and setting it.
 */
export declare const ProvideCollapseState: React.FC<React.PropsWithChildren>;
