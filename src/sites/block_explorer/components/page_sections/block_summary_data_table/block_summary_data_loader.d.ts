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
}
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
