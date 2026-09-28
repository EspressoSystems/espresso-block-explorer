import { default as React } from 'react';
export interface BlockSummaryDataTablePlaceholderProps {
    numElements?: number;
}
/**
 * BlockSummaryDataTablePlaceholder is a placeholder that acts like a
 * normal BlockSummaryDataTable, but with loading indicator placeholders.
 */
export declare const BlockSummaryDataTablePlaceholder: React.FC<BlockSummaryDataTablePlaceholderProps>;
/**
 * BlockSummaryDataTable is the DataTable for the Blocks Summary display
 */
export declare const BlockSummaryDataTable: React.FC;
/**
 * LatestBlocksSummaryDataTable is the BlockSummaryDataTable as displayed in
 * the explorer's "Latest Blocks" summary, where recency matters more than the
 * exact timestamp and the card is too narrow to fit one.
 */
export declare const LatestBlocksSummaryDataTable: React.FC;
