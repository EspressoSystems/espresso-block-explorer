import UnimplementedError from '@/errors/unimplemented_error';
import { BlockSummaryColumn } from '@/models/block_explorer/block_summary';
import { RollUpSummaryAsyncRetriever } from '@/models/block_explorer/rollup_summary';
import React from 'react';
import PromiseResolver from '../../data/async_data/promise_resolver';
import {
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/data_table';
import { SortDirection } from '../../data/types';

export interface RollUpSummary {
  namespace: number;
  transactions: number;
}

function createDataRetrieverFromRetriever(
  retriever: RollUpSummaryAsyncRetriever,
) {
  return async () => {
    const data = await retriever.retrieve();

    return data.map(
      (data) =>
        ({
          namespace: data.namespace,
          transactions: data.transactions,
        }) satisfies RollUpSummary,
    );
  };
}

export interface RollUpsSummaryDatatTableState extends DataTableState<BlockSummaryColumn> {}

/**
 * RetrieverContext represents the retriever to be utilized for retrieving
 * the BlockSummary data.
 */
export const RollUpSummaryAsyncRetrieverContext =
  React.createContext<RollUpSummaryAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

interface LoadRollUpsSummaryDataTableData {
  children: React.ReactNode | React.ReactNode[];
}

const LoadRollUpsSummaryDataTableData: React.FC<
  LoadRollUpsSummaryDataTableData
> = (props) => {
  // Need to retrieve the actual data source
  const retriever = React.useContext(RollUpSummaryAsyncRetrieverContext);

  const nextRetriever = createDataRetrieverFromRetriever(retriever);

  return (
    <PromiseResolver promise={nextRetriever()}>
      {props.children}
    </PromiseResolver>
  );
};

export interface RollUpsSummaryLoaderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const RollUpsSummaryLoader: React.FC<RollUpsSummaryLoaderProps> = (
  props,
) => {
  // Create the Data Table State
  const [initialState] = React.useState<RollUpsSummaryDatatTableState>({
    sortColumn: BlockSummaryColumn.height,
    sortDir: SortDirection.desc,
  });

  return (
    <DataTableStateContext.Provider value={initialState}>
      {React.createElement(LoadRollUpsSummaryDataTableData, props)}
    </DataTableStateContext.Provider>
  );
};
