import { default as React } from 'react';
interface NodesSummaryDataTablePlaceholderProps {
    numElements?: number;
}
/**
 * NodesSummaryDataTablePlaceholder is a component that renders a placeholder
 * version of the Node Summary Data Table.
 */
export declare const NodesSummaryDataTablePlaceholder: React.FC<NodesSummaryDataTablePlaceholderProps>;
/**
 * NodesSummaryDataTablePopulated is a component that renders the populated
 * version of the Node Summary Data Table.
 */
export declare const NodesSummaryDataTablePopulated: React.FC;
/**
 * NodeSummaryDataTable handles the display of the Node Summary Data Table.
 * Additionally, it handles the sorting of the data via the manipulation of the
 * headers of the table data.
 */
export declare const NodesSummaryDataTable: React.FC;
export {};
