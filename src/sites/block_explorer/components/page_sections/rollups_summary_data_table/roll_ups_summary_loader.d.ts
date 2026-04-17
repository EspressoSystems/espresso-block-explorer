import { DataTableState } from '../../../../../../../../../../../../../src/components/data/data_table/data_table';
import { default as React } from 'react';
import { BlockSummaryColumn } from '../block_summary_data_table/block_summary_data_loader';
export interface RollUpSummary {
    namespace: number;
    transactions: number;
}
export interface RollUpsSummaryDataTableState extends DataTableState<BlockSummaryColumn> {
}
export interface RollUpsSummaryLoaderProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const RollUpsSummaryLoader: React.FC<RollUpsSummaryLoaderProps>;
