import { default as React } from '../../../../../node_modules/react';

/**
 * PageType represents the different page types we are expecting to be on.
 * they may correspond beyond 1 to 1 for different paths.
 */
export declare enum PageType {
    explorer = "explorer",
    blocks = "blocks",
    transactions = "transactions",
    rollups = "rollups",
    nodes = "nodes",
    unknown = "unknown"
}
/**
 * CurrentPagePathContext represents the current Page Path of the page that
 * we are currently on.
 */
declare const CurrentPagePathContext: React.Context<PageType>;
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
    page: PageType;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * OverridePagePath allows descendent components to be given a new relative
 * page path.
 */
export declare const OverridePagePath: React.FC<OverridePagePathProps>;
