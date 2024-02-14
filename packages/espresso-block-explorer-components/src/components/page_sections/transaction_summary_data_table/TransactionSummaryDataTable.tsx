import React from 'react';
import {
  TransactionSummaryAsyncRetriever,
  TransactionSummaryColumn,
} from '../../../types/data_source/transaction_summary/types';
import { mapIterable } from '../../../types/functional';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import DataTable, {
  DataTableRowContext,
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/DataTable';
import { SortDirection } from '../../data/types';
import Card from '../../layout/card/Card';
import Link from '../../links/link/Link';
import DateTimeText from '../../text/DateTimeText';
import HexText from '../../text/HexText';
import NumberText from '../../text/NumberText';
import RollUpSimple from '../roll_up/roll_up_simple/RollUpSimple';

export interface TransactionSummary {
  hash: ArrayBuffer;
  rollups: number[];
  block: number;
  time: Date;
}

/**
 * RetrieverContext is a React Context that holds a reference to a
 * TransactionSummaryAsyncRetriever
 */
export const RetrieverContext =
  React.createContext<TransactionSummaryAsyncRetriever>({
    async retrieve() {
      throw new Error('unimplemented');
    },
  });

/**
 * TransactionCells is a cell that displays the hash for the transaction,
 * and contains a link to inspect the individual transaction.
 */
const TransactionCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as TransactionSummary;
  const pathResolver = React.useContext(PathResolverContext);

  const hex = Array.from(
    mapIterable(new Uint8Array(row.hash), (hex) =>
      hex.toString(16).padStart(2, '0'),
    ),
  ).join('');
  return (
    <Link href={pathResolver.transaction(`0x${hex}`)}>
      <HexText value={row.hash} />
    </Link>
  );
};

/**
 * RollUpCell is a cell that displays the rollup for a given transaction.
 */
const RollUpCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as TransactionSummary;
  return <RollUpSimple namespace={row.rollups[0]} />;
};

/**
 * BlockCell is a cell that displays the block number for the transaction
 * and provides a Link to the block detail page for that block.
 */
const BlockCell: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const row = React.useContext(DataTableRowContext) as TransactionSummary;

  return (
    <Link href={pathResolver.block(row.block)}>
      <NumberText number={row.block} />
    </Link>
  );
};

/**
 * TimeCell represents the Timestamp of the Transaction.
 */
const TimeCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as TransactionSummary;

  return <DateTimeText date={row.time} />;
};

/**
 * TransactionsSummaryDataTable is a DataTable that contains Transaction
 * Summary State.
 */
export const TransactionsSummaryDataTable: React.FC = () => {
  // Maintain the starting arguments.
  return (
    <DataTable
      columns={[
        {
          label: 'Transaction',
          columnType: TransactionSummaryColumn.hash,
          buildCell: TransactionCell,
        },
        {
          label: 'Rollups',
          columnType: TransactionSummaryColumn.rollup,
          buildCell: RollUpCell,
        },
        {
          label: 'Block',
          columnType: TransactionSummaryColumn.block,
          buildCell: BlockCell,
        },
        {
          label: 'Time',
          columnType: TransactionSummaryColumn.time,
          buildCell: TimeCell,
        },
      ]}
    />
  );
};

interface TransactionSummaryDataTableState
  extends DataTableState<TransactionSummaryColumn> {
  startAfterTransaction?: ArrayBuffer;
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
        startAfterTransaction: resolvedState.startAfterTransaction,
        transactionsPerPage: 20,
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
const LoadTransactionSummaryDataTableData: React.FC<
  LoadTransactionSummaryDataTableDataProps
> = (props) => {
  // Need to retrieve the actual data source
  const retriever = React.useContext(RetrieverContext);
  const dataTableState = React.useContext(DataTableStateContext);

  const nextRetriever = createDataRetrieverFromRetriever(retriever);

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
  const [initialState] = React.useState<TransactionSummaryDataTableState>({
    sortColumn: TransactionSummaryColumn.block,
    sortDir: SortDirection.desc,
    startAfterTransaction: undefined,
  });

  return (
    <DataTableStateContext.Provider value={initialState}>
      {React.createElement(LoadTransactionSummaryDataTableData, props)}
    </DataTableStateContext.Provider>
  );
};

export default TransactionsSummary;
