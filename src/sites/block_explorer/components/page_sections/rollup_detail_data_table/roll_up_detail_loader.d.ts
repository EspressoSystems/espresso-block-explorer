import { DataTableState } from '../../../../../../../../../../../../../src/components/data/data_table/data_table';
import { default as React } from 'react';
import { TransactionSummaryColumn } from '../transaction_summary_data_table/transaction_summary_data_loader';
export interface RollUpDetailDataTableState extends DataTableState<TransactionSummaryColumn> {
    height?: number;
    offset?: number;
}
export interface RollUpDetailsDataLoaderProps {
    startAtBlock?: number;
    offset?: number;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * RollUpDetailsDataLoader uses the Retriever from the
 * RetrieverContext and kicks off requests using the state retrieved
 * by the DataTableStateContext.
 */
export declare const RollUpDetailsDataLoader: React.FC<RollUpDetailsDataLoaderProps>;
