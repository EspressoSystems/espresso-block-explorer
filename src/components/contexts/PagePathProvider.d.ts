import React from 'react';
/**
 * CurrentPagePathContext represents the current Page Path of the page that
 * we are currently on.
 */
declare const CurrentPagePathContext: React.Context<string>;
export { CurrentPagePathContext };
export interface ProvideCurrentPagePathProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideDerivedPagePath will provide the CurrentPagePathContext with the
 * value retrieved from location.pathname.
 */
export declare const ProvideDerivedPagePath: React.FC<ProvideCurrentPagePathProps>;
export interface OverridePagePathProps {
    pathname: string;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * OverridePagePath allows descendent components to be given a new relative
 * page path.
 */
export declare const OverridePagePath: React.FC<OverridePagePathProps>;
