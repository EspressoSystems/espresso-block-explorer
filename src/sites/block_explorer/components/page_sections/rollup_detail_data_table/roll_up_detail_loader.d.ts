import { DataTableState } from '../../../../../../../../../../../../../src/components/data/data_table/data_table';
import { RollUpDetailAsyncRetriever } from '../../../../../../../../../../../../../src/models/block_explorer/rollup_detail';
import { TransactionSummaryColumn } from '../../../../../../../../../../../../../src/models/block_explorer/transaction_summary';
import { default as React } from 'react';
/**
 * RetrieverContext is a React Context that holds a reference to a
 * RollUpDetailAsyncRetriever
 */
export declare const RollUpDetailAsyncRetrieverContext: React.Context<RollUpDetailAsyncRetriever>;
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
