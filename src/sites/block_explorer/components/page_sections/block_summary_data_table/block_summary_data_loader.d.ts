import { DataTableState } from '../../../../../../../../../../../../../src/components/data/data_table/data_table';
import { default as React } from 'react';
export declare enum BlockSummaryColumn {
    height = 0,
    proposer = 1,
    transactions = 2,
    size = 3,
    time = 4
}
export interface BlockSummaryDataTableState extends DataTableState<BlockSummaryColumn> {
    startAtBlock?: number;
    /**
     * When the viewer last asked for the list to be refreshed. The value is not
     * read when building the request -- changing it is what matters, since that
     * is what sends the loader after the current set of blocks again.
     */
    refreshedAt?: number;
}
/**
 * RefreshBlockSummariesContext carries a request to go and fetch the current
 * set of blocks again.
 *
 * The loader deliberately hands its children a no-op DataTableSetStateContext,
 * so that nothing rendered below it can drive the query, which leaves the
 * navigation no way to ask for the data again. This context is that way, and
 * is provided above the loader so it survives.
 */
export declare const RefreshBlockSummariesContext: React.Context<() => void>;
export interface BlockSummaryDataLoaderProps {
    startAtBlock?: number;
    children?: React.ReactNode | React.ReactNode[];
}
/**
 * BlockSummaryDataLoader is a component that provides the initial state of
 * the Block Summary state, and loads the data.
 * @returns
 */
export declare const BlockSummaryDataLoader: React.FC<BlockSummaryDataLoaderProps>;
export declare const BlockSummaryDataFromStreamLoader: React.FC<BlockSummaryDataLoaderProps>;
export interface BlocksNavigationProps {
    className?: string;
}
export declare const BlocksNavigation: React.FC<BlocksNavigationProps>;
