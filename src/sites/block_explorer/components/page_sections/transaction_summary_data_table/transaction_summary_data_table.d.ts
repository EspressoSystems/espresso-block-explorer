import { default as React } from 'react';
export interface TransactionsSummaryDataTablePlaceholderProps {
    numElements?: number;
    /** Include the leading Position column. */
    withPosition?: boolean;
}
/**
 * TransactionsSummaryDataTablePlaceholder is a DataTable that contains
 * Transaction Summary State.
 */
export declare const TransactionsSummaryDataTablePlaceholder: React.FC<TransactionsSummaryDataTablePlaceholderProps>;
/**
 * TransactionsSummaryDataTable is a DataTable that contains Transaction
 * Summary State.
 */
export declare const TransactionsSummaryDataTable: React.FC;
/**
 * BlockTransactionsSummaryDataTable is the TransactionsSummaryDataTable as
 * displayed underneath a block's details, where an empty result means the
 * block simply carried no transactions rather than that nothing was found.
 */
export declare const BlockTransactionsSummaryDataTable: React.FC;
/**
 * LatestTransactionsSummaryDataTable is the TransactionsSummaryDataTable as
 * displayed in the explorer's "Latest Transactions" summary, where recency
 * matters more than the exact timestamp and the card is too narrow to fit one.
 */
export declare const LatestTransactionsSummaryDataTable: React.FC;
