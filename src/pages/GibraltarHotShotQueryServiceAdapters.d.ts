import React from 'react';
export interface ProvideGibraltarBlockDetailDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideGibraltarBlockDetailDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a BlockDetailAsyncRetriever.
 */
export declare const ProvideGibraltarBlockDetailDataSource: React.FC<ProvideGibraltarBlockDetailDataSourceProps>;
export interface ProvideGibraltarBlocksSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideGibraltarBlocksSummaryDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a BlockSummaryAsyncRetriever.
 */
export declare const ProvideGibraltarBlocksSummaryDataSource: React.FC<ProvideGibraltarBlocksSummaryDataSourceProps>;
export interface ProvideGibraltarTransactionsSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideGibraltarTransactionsSummaryDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a
 * TransactionSummaryAsyncRetriever.
 */
export declare const ProvideGibraltarTransactionsSummaryDataSource: React.FC<ProvideGibraltarTransactionsSummaryDataSourceProps>;
export declare const ProvideGibraltarTransactionsForBlockSummaryDataSource: React.FC<ProvideGibraltarTransactionsSummaryDataSourceProps>;
export interface ProvideGibraltarTransactionDetailDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideGibraltarTransactionDetailDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a
 * TransactionDetailAsyncRetriever.
 */
export declare const ProvideGibraltarTransactionDetailDataSource: React.FC<ProvideGibraltarTransactionDetailDataSourceProps>;
export interface ProvideGibraltarTransactionsSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideGibraltarRollUpDetailDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a RollUpDetailAsyncRetriever.
 */
export declare const ProvideGibraltarRollUpDetailDataSource: React.FC<ProvideGibraltarTransactionsSummaryDataSourceProps>;
export interface ProvideGibraltarTransactionsSummaryDataSourceProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const kNumberOfSampleBlocks = 30;
/**
 * ProvideGibraltarRollUpsSummaryDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a RollUpSummaryAsyncRetriever.
 */
export declare const ProvideGibraltarRollUpsSummaryDataSource: React.FC<ProvideGibraltarTransactionsSummaryDataSourceProps>;
