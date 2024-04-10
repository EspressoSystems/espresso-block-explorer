import React from 'react';
import UnimplementedError from '../../../errors/UnimplementedError';
import { RollUpDetailAsyncRetriever } from '../../../models/block_explorer/rollup_detail';
import { TransactionSummaryColumn } from '../../../models/block_explorer/transaction_summary';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import {
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/DataTable';
import { SortDirection } from '../../data/types';
import { TransactionSummary } from '../transaction_summary_data_table/TransactionSummaryDataLoader';

/**
 * NamespaceContext is a React Context that holds a reference to the
 * current Namespace
 */
export const NamespaceContext = React.createContext<number>(0);

/**
 * RetrieverContext is a React Context that holds a reference to a
 * RollUpDetailAsyncRetriever
 */
export const RollUpDetailAsyncRetrieverContext =
  React.createContext<RollUpDetailAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

export interface RollUpDetailDataTableState
  extends DataTableState<TransactionSummaryColumn> {
  height?: number;
  offset?: number;
}

/**
 * createDataRetrieverFromRetriever converts a TransactionSummaryAsyncRetriever
 * into an AsyncRetriever of the correct data format.
 */
function createDataRetrieverFromRetriever(
  retriever: RollUpDetailAsyncRetriever,
  namespace: number,
) {
  return {
    async retrieve(state: DataTableState<unknown>) {
      const resolvedState = state as RollUpDetailDataTableState;
      const data = await retriever.retrieve({
        namespace,
        height: resolvedState.height,
        offset: resolvedState.offset,
      });

      return data.map(
        (data) =>
          ({
            hash: data.hash,
            block: data.block,
            offset: 0,
            rollups: data.namespaces,
            time: data.time,
          }) satisfies TransactionSummary,
      );
    },
  };
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
export const RollUpDetailsDataLoader: React.FC<
  RollUpDetailsDataLoaderProps
> = ({ children, startAtBlock, offset, ...props }) => {
  // Create the Data Table State
  const [initialState] = React.useState<RollUpDetailDataTableState>({
    sortColumn: TransactionSummaryColumn.block,
    sortDir: SortDirection.desc,
    height: startAtBlock,
    offset,
  });

  // Need to retrieve the actual data source
  const namespace = React.useContext(NamespaceContext);
  const retriever = React.useContext(RollUpDetailAsyncRetrieverContext);
  const dataTableState = React.useContext(DataTableStateContext);
  const nextRetriever = createDataRetrieverFromRetriever(retriever, namespace);

  return (
    <DataTableStateContext.Provider value={initialState}>
      <PromiseResolver
        promise={nextRetriever.retrieve(dataTableState)}
        {...props}
      >
        {children}
      </PromiseResolver>
    </DataTableStateContext.Provider>
  );
};
