import React from 'react';
import { TaggedBase64 } from '../../../types/TaggedBase64';
import {
  TransactionSummaryAsyncRetriever,
  TransactionSummaryColumn,
} from '../../../types/data_source/transaction_summary/types';
import UnimplementedError from '../../../types/errors/UnimplementedError';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import {
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/DataTable';
import { SortDirection } from '../../data/types';
import { DataContext } from '../../contexts/DataProvider';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import LabeledAnchorButton from '../../hid/buttons/labeled_anchor_button/LabeledAnchorButton';
import Text from '../../text/Text';
import { addClassToClassName } from '../../higher_order';

const kTransactionsPerPage = 20;

export interface TransactionSummary {
  hash: TaggedBase64;
  rollups: number[];
  block: number;
  offset: number;
  time: Date;
}

/**
 * RetrieverContext is a React Context that holds a reference to a
 * TransactionSummaryAsyncRetriever
 */
export const TransactionSummaryAsyncRetrieverContext =
  React.createContext<TransactionSummaryAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

export interface TransactionSummaryDataTableState
  extends DataTableState<TransactionSummaryColumn> {
  height?: number;
  offset?: number;
}

/**
 * createDataRetrieverFromRetriever converts a TransactionSummaryAsyncRetriever
 * into an AsyncRetriever of the correct data format.
 */
function createDataRetrieverFromRetriever(
  retriever: TransactionSummaryAsyncRetriever,
) {
  return {
    async retrieve(state: DataTableState<unknown>) {
      const resolvedState = state as TransactionSummaryDataTableState;
      const data = await retriever.retrieve({
        startAtBlock: resolvedState.height,
        offset: resolvedState.offset,
        transactionsPerPage: kTransactionsPerPage,
      });

      return data.map(
        (data) =>
          ({
            hash: data.hash,
            block: data.block,
            offset: data.offset,
            rollups: data.namespaces,
            time: data.time,
          }) satisfies TransactionSummary,
      );
    },
  };
}

interface LoadTransactionSummaryDataTableDataProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * LoadTransactionSummaryDataTableData uses the Retriever from the
 * RetrieverContext and kicks off requests using the state retrieved
 * by the DataTableStateContext.
 */
const LoadTransactionSummaryDataTableData: React.FC<
  LoadTransactionSummaryDataTableDataProps
> = (props) => {
  // Need to retrieve the actual data source
  const retriever = React.useContext(TransactionSummaryAsyncRetrieverContext);
  const dataTableState = React.useContext(DataTableStateContext);

  const nextRetriever = createDataRetrieverFromRetriever(retriever);

  return (
    <PromiseResolver promise={nextRetriever.retrieve(dataTableState)}>
      <>{props.children}</>
    </PromiseResolver>
  );
};

export interface TransactionsSummaryDataLoaderProps {
  startAtBlock?: number;
  offset?: number;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * TransactionSummaryDataLoader sets up the intial state of the DataTableState
 * and kicks begins the process of retrieving the data.
 */
export const TransactionSummaryDataLoader: React.FC<
  TransactionsSummaryDataLoaderProps
> = (props) => {
  const { startAtBlock, offset, ...rest } = props;
  // Create the Data Table State
  const [initialState] = React.useState<TransactionSummaryDataTableState>({
    sortColumn: TransactionSummaryColumn.block,
    sortDir: SortDirection.desc,
    height: startAtBlock,
    offset: offset,
  });

  return (
    <DataTableStateContext.Provider value={initialState}>
      {React.createElement(LoadTransactionSummaryDataTableData, rest)}
    </DataTableStateContext.Provider>
  );
};

export interface TransactionsNavigationProps {
  className?: string;
}

export const TransactionsNavigation: React.FC<TransactionsNavigationProps> = (
  props,
) => {
  const data = React.useContext(DataContext) as TransactionSummary[];
  const pathResolver = React.useContext(PathResolverContext);

  const previous: React.ReactNode[] = [];
  const next: React.ReactNode[] = [];
  // Do we know if we're at the top of the page?

  if (data[data.length - 1].block > 0) {
    const lastTransaction = data[data.length - 1];

    previous.push(
      <LabeledAnchorButton
        key={1}
        href={pathResolver.transactions(
          lastTransaction.block,
          lastTransaction.offset + 1,
        )}
      >
        <Text text="Next" />
      </LabeledAnchorButton>,
    );
  }

  /**
   * specific page
   * back a page
   * forward a page
   * specific page
   * ...
   * first page
   */

  return (
    <nav
      className={addClassToClassName(
        props.className,
        'transactions-navigation',
      )}
    >
      {previous}
      {next}
    </nav>
  );
};
