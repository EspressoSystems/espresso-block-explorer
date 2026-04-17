import { default as React } from 'react';
/**
 * ExplorerOverviewHeading is a component that lists the overview of the
 * Block Explorer.
 */
export declare const ExplorerOverviewHeading: React.FC;
/**
 * ExplorerOverviewDetails is a component that displays the details of the
 * Espresso Chain in terms of statistics.
 */
export declare const ExplorerOverviewDetails: React.FC;
/**
 * ExplorerOverviewDetailsPlaceholder is a component that displays the loading
 * state of the Explorer Overview.
 */
export declare const ExplorerOverviewDetailsPlaceholder: React.FC;
interface ExplorerOverviewPlaceholderProps {
    className?: string;
}
export declare const ExplorerOverviewPlaceholder: React.FC<ExplorerOverviewPlaceholderProps>;
interface ExplorerOverviewContentProps {
}
export declare const ExplorerOverviewContent: React.FC<ExplorerOverviewContentProps>;
interface ExplorerOverviewProps {
    className?: string;
}
/**
 * ExplorerOverviewFromExplorerSummary is a component that handles displaying
 * the loading state of the Explorer, and the extractions of the Explorer
 * Overview data from the Explorer API Explorer Summary.
 *
 */
export declare const ExplorerOverviewFromExplorerSummary: React.FC<ExplorerOverviewProps>;
export {};
