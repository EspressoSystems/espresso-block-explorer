import { default as React } from 'react';
export interface ProvideCappuccinoBlockDetailDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideCappuccinoBlockDetailDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a BlockDetailAsyncRetriever.
 */
export declare const ProvideCappuccinoBlockDetailDataSource: React.FC<ProvideCappuccinoBlockDetailDataSourceProps>;
export interface ProvideCappuccinoBlocksSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
    blocksPerPage?: number;
}
/**
 * ProvideCappuccinoBlocksSummaryDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a BlockSummaryAsyncRetriever.
 */
export declare const ProvideCappuccinoBlocksSummaryDataSource: React.FC<ProvideCappuccinoBlocksSummaryDataSourceProps>;
export interface ProvideCappuccinoTransactionsSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
    transactionsPerPage?: number;
}
/**
 * ProvideCappuccinoTransactionsSummaryDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a
 * TransactionSummaryAsyncRetriever.
 */
export declare const ProvideCappuccinoTransactionsSummaryDataSource: React.FC<ProvideCappuccinoTransactionsSummaryDataSourceProps>;
export declare const ProvideCappuccinoTransactionsForBlockSummaryDataSource: React.FC<ProvideCappuccinoTransactionsSummaryDataSourceProps>;
export interface ProvideCappuccinoTransactionDetailDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideCappuccinoTransactionDetailDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a
 * TransactionDetailAsyncRetriever.
 */
export declare const ProvideCappuccinoTransactionDetailDataSource: React.FC<ProvideCappuccinoTransactionDetailDataSourceProps>;
export interface ProvideCappuccinoTransactionsSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
    transactionsPerPage?: number;
}
/**
 * ProvideCappuccinoRollUpDetailDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a RollUpDetailAsyncRetriever.
 */
export declare const ProvideCappuccinoRollUpDetailDataSource: React.FC<ProvideCappuccinoTransactionsSummaryDataSourceProps>;
export interface ProvideCappuccinoTransactionsSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const kNumberOfSampleBlocks = 30;
/**
 * ProvideCappuccinoRollUpsSummaryDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a RollUpSummaryAsyncRetriever.
 */
export declare const ProvideCappuccinoRollUpsSummaryDataSource: React.FC<ProvideCappuccinoTransactionsSummaryDataSourceProps>;
interface ProvideCappuccinoLatestBlockDetailsProps {
}
export declare const ProvideCappuccinoLatestBlockDetails: React.FC<ProvideCappuccinoLatestBlockDetailsProps>;
interface ProvideCappuccinoExplorerSummaryProps {
}
export declare const ProvideCappuccinoExplorerSummary: React.FC<ProvideCappuccinoExplorerSummaryProps>;
export {};
