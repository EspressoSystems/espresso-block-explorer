import React from 'react';
import { RollUpDetailAsyncRetriever } from '../../../types/data_source/rollup_detail/types';
import { TransactionSummaryColumn } from '../../../types/data_source/transaction_summary/types';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import {
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/DataTable';
import { SortDirection } from '../../data/types';
import Card from '../../layout/card/Card';
import {
  TransactionSummary,
  TransactionsSummaryDataTable,
} from '../transaction_summary_data_table/TransactionSummaryDataTable';

/**
 * NamespaceContext is a React Context that holds a reference to the
 * current Namespace
 */
export const NamespaceContext = React.createContext<number>(0);

/**
 * RetrieverContext is a React Context that holds a reference to a
 * RollUpDetailAsyncRetriever
 */
export const RetrieverContext = React.createContext<RollUpDetailAsyncRetriever>(
  {
    async retrieve() {
      throw new Error('unimplemented');
    },
  },
);

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
      const resolvedState = state as DataTableState<TransactionSummaryColumn>;
      const data = await retriever.retrieve({
        page: resolvedState.page,
        namespace,
        resultsPerPage: 20,
      });

      return data.map(
        (data) =>
          ({
            hash: data.hash,
            block: data.block,
            rollups: data.namespaces,
            time: data.time,
          }) satisfies TransactionSummary,
      );
    },
  };
}

interface LoadTransactionSummaryDataTableDataProps {}

/**
 * LoadTransactionSummaryDataTableData uses the Retriever from the
 * RetrieverContext and kicks off requests using the state retrieved
 * by the DataTableStateContext.
 */
const LoadRollUpDetailsDataTableData: React.FC<
  LoadTransactionSummaryDataTableDataProps
> = (props) => {
  // Need to retrieve the actual data source
  const namespace = React.useContext(NamespaceContext);
  const retriever = React.useContext(RetrieverContext);
  const dataTableState = React.useContext(DataTableStateContext);
  const nextRetriever = createDataRetrieverFromRetriever(retriever, namespace);

  return (
    <PromiseResolver promise={nextRetriever.retrieve(dataTableState)}>
      {React.createElement(Card, props, <TransactionsSummaryDataTable />)}
    </PromiseResolver>
  );
};

interface TransactionsSummaryProps {}

/**
 * TransactionsSummary component shows the Transaction Summary Data Table
 * with fetched data.
 */
const TransactionsSummary: React.FC<TransactionsSummaryProps> = (props) => {
  // Create the Data Table State
  const [initialState] = React.useState<
    DataTableState<TransactionSummaryColumn>
  >({
    sortColumn: TransactionSummaryColumn.block,
    sortDir: SortDirection.desc,
    page: 0,
  });

  return (
    <DataTableStateContext.Provider value={initialState}>
      {React.createElement(LoadRollUpDetailsDataTableData, props)}
    </DataTableStateContext.Provider>
  );
};

export default TransactionsSummary;
