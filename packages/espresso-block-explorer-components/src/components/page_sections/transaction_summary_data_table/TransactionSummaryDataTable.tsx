import React from 'react';
import { TransactionSummaryColumn } from '../../../types/data_source/transaction_summary/types';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import DataTable, {
  DataTableRowContext,
} from '../../data/data_table/DataTable';
import Link from '../../links/link/Link';
import DateTimeText from '../../text/DateTimeText';
import HexText from '../../text/HexText';
import NumberText from '../../text/NumberText';
import Text from '../../text/Text';
import RollUpSimple from '../roll_up/roll_up_simple/RollUpSimple';
import { TransactionSummary } from './TransactionSummaryDataLoader';

/**
 * TransactionCells is a cell that displays the hash for the transaction,
 * and contains a link to inspect the individual transaction.
 */
const TransactionCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as TransactionSummary;
  const pathResolver = React.useContext(PathResolverContext);

  return (
    <Link href={pathResolver.transaction(row.block, row.offset)}>
      <HexText value={row.hash.data} />
    </Link>
  );
};

/**
 * RollUpCell is a cell that displays the rollup for a given transaction.
 */
const RollUpCell: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const row = React.useContext(DataTableRowContext) as TransactionSummary;

  const rollups = row.rollups;
  if (rollups.length === 0) {
    return <Text text="No Rollups Involved" />;
  }

  if (rollups.length === 1) {
    const rollup = rollups[0];
    return (
      <Link href={pathResolver.rollUp(rollup)}>
        <RollUpSimple namespace={rollup} />
      </Link>
    );
  }

  return;
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
