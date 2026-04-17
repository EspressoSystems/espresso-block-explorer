import { default as React } from 'react';
/**
 * ProvideBlockDetailDataSource is a component that converts
 * the HotShot Query Service into a BlockDetailAsyncRetriever.
 */
export declare const ProvideBlockDetailDataSource: React.FC<React.PropsWithChildren>;
export interface ProvideBlocksSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
    blocksPerPage?: number;
}
/**
 * ProvideBlocksSummaryDataSource is a component that converts
 * the HotShot Query Service into a BlockSummaryAsyncRetriever.
 */
export declare const ProvideBlocksSummaryDataSource: React.FC<ProvideBlocksSummaryDataSourceProps>;
export interface ProvideTransactionsSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
    transactionsPerPage?: number;
}
/**
 * ProvideTransactionsSummaryDataSource is a component that converts
 * the HotShot Query Service into a
 * TransactionSummaryAsyncRetriever.
 */
export declare const ProvideTransactionsSummaryDataSource: React.FC<ProvideTransactionsSummaryDataSourceProps>;
export declare const ProvideTransactionsForBlockSummaryDataSource: React.FC<ProvideTransactionsSummaryDataSourceProps>;
export interface ProvideTransactionDetailDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideTransactionDetailDataSource is a component that converts
 * the HotShot Query Service into a
 * TransactionDetailAsyncRetriever.
 */
export declare const ProvideTransactionDetailDataSource: React.FC<ProvideTransactionDetailDataSourceProps>;
export interface ProvideTransactionsSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
    transactionsPerPage?: number;
}
/**
 * ProvideRollUpDetailDataSource is a component that converts
 * the HotShot Query Service into a RollUpDetailAsyncRetriever.
 */
export declare const ProvideRollUpDetailDataSource: React.FC<ProvideTransactionsSummaryDataSourceProps>;
export interface ProvideTransactionsSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const kNumberOfSampleBlocks = 30;
export declare const ProvideExplorerSummaryAsyncStream: React.FC<React.PropsWithChildren>;
export declare const ProvideExplorerSummary: React.FC<React.PropsWithChildren>;
