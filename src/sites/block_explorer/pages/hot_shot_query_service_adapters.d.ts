import { ExplorerSummaryEntry } from '../../../../../../../../../../../src/models/block_explorer/explorer_summary';
import { ExplorerGetExplorerSummaryResponse } from '../../../../../../../../../../../src/service/hotshot_query_service/explorer/get_explorer_summary_response';
import { default as React } from 'react';
export interface ProvideBlockDetailDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideBlockDetailDataSource is a component that converts
 * the HotShot Query Service into a BlockDetailAsyncRetriever.
 */
export declare const ProvideBlockDetailDataSource: React.FC<ProvideBlockDetailDataSourceProps>;
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
/**
 * ProvideRollUpsSummaryDataSource is a component that converts
 * the HotShot Query Service into a RollUpSummaryAsyncRetriever.
 */
export declare const ProvideRollUpsSummaryDataSource: React.FC<ProvideTransactionsSummaryDataSourceProps>;
interface ProvideLatestBlockDetailsProps {
}
export declare const ProvideLatestBlockDetails: React.FC<ProvideLatestBlockDetailsProps>;
export declare function transformExplorerSummaryResponse(summaryResponse: ExplorerGetExplorerSummaryResponse): ExplorerSummaryEntry;
export interface ProvideExplorerSummaryAsyncStreamProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const ProvideExplorerSummaryAsyncStream: React.FC<ProvideExplorerSummaryAsyncStreamProps>;
interface ProvideExplorerSummaryProps {
}
export declare const ProvideExplorerSummary: React.FC<ProvideExplorerSummaryProps>;
export {};
