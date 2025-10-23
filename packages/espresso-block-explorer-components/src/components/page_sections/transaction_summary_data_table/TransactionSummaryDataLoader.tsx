import PromiseResolver from '@/components/data/async_data/PromiseResolver';
import { DataContext } from '@/contexts/DataProvider';
import { PathResolverContext } from '@/contexts/PathResolverProvider';
import UnimplementedError from '@/errors/UnimplementedError';
import { addClassToClassName } from '@/higher_order';
import {
  TransactionSummaryAsyncRetriever,
  TransactionSummaryColumn,
  TransactionSummaryEntry,
} from '@/models/block_explorer/transaction_summary';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import Text from '@/text/Text';
import React from 'react';
import {
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/DataTable';
import { SortDirection } from '../../data/types';
import LabeledAnchorButton from '../../hid/buttons/labeled_anchor_button/LabeledAnchorButton';
import { ExplorerSummaryProvider } from '../explorer_summary/ExplorerSummaryLoader';

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

function convertTransactionDataToTransactionSummary(
  data: TransactionSummaryEntry,
): TransactionSummary {
  return {
    hash: data.hash,
    block: data.block,
    offset: data.offset,
    rollups: data.namespaces,
    time: data.time,
  };
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
      });

      return data.map(convertTransactionDataToTransactionSummary);
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

const LoadTransactionSummaryDataTableDataFromStream: React.FC<
  LoadTransactionSummaryDataTableDataProps
> = (props) => {
  const data = React.useContext(ExplorerSummaryProvider);

  if (!data) {
    return (
      <DataContext.Provider value={null}>{props.children}</DataContext.Provider>
    );
  }

  return (
    <DataContext.Provider
      value={data.latestTransactions.map(
        convertTransactionDataToTransactionSummary,
      )}
    >
      {props.children}
    </DataContext.Provider>
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

export const TransactionSummaryDataFromStreamLoader: React.FC<
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
      {React.createElement(LoadTransactionSummaryDataTableDataFromStream, rest)}
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

  if (data && data[data.length - 1].block > 0) {
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
