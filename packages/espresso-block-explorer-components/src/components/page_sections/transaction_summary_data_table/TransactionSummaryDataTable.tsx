import { DataContext } from '@/contexts/DataProvider';
import { PathResolverContext } from '@/contexts/PathResolverProvider';
import { iota } from '@/functional/functional';
import SkeletonContent from '@/loading/SkeletonContent';
import { TransactionSummaryColumn } from '@/models/block_explorer/transaction_summary';
import CopyTaggedBase64 from '@/text/CopyTaggedBase64';
import DateTimeText from '@/text/DateTimeText';
import NumberText from '@/text/NumberText';
import TaggedBase64Text from '@/text/TaggedBase64Text';
import Text from '@/text/Text';
import React from 'react';
import DataTable, {
  DataTableRowContext,
} from '../../data/data_table/DataTable';
import { InternalLink } from '../../links/link/Link';
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
    <CopyTaggedBase64 value={row.hash}>
      <InternalLink href={pathResolver.transaction(row.block, row.offset)}>
        <TaggedBase64Text value={row.hash} />
      </InternalLink>
    </CopyTaggedBase64>
  );
};

/**
 * RollUpCell is a cell that displays the rollup for a given transaction.
 */
const RollUpCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as TransactionSummary;

  const rollups = row.rollups;
  if (rollups.length === 0) {
    return <Text text="No Rollups Involved" />;
  }

  if (rollups.length === 1) {
    const rollup = rollups[0];
    return <RollUpSimple namespace={rollup} />;
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
    <InternalLink
      href={pathResolver.block(row.block)}
      title={`Link to Block ${row.block}`}
    >
      <NumberText number={row.block} />
    </InternalLink>
  );
};

/**
 * TimeCell represents the Timestamp of the Transaction.
 */
const TimeCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as TransactionSummary;

  return <DateTimeText date={row.time} />;
};

interface TransactionsSummaryDataTableLayoutProps {
  components: [
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
  ];
}

/**
 * TransactionsSummaryDataTableLayout is a component that provides the overall
 * layout of the Transactions Summary Data Table.  It provides the label, and
 * column type of the Data Table, while allowing the caller to specify the
 * ComponentTypes of each of the cells.
 */
const TransactionsSummaryDataTableLayout: React.FC<
  TransactionsSummaryDataTableLayoutProps
> = (props) => {
  return (
    <DataTable
      columns={[
        {
          label: 'Transaction',
          columnType: TransactionSummaryColumn.hash,
          buildCell: props.components[0],
        },
        {
          label: 'Rollups',
          columnType: TransactionSummaryColumn.rollup,
          buildCell: props.components[1],
        },
        {
          label: 'Block',
          columnType: TransactionSummaryColumn.block,
          buildCell: props.components[2],
        },
        {
          label: 'Time',
          columnType: TransactionSummaryColumn.time,
          buildCell: props.components[3],
        },
      ]}
    />
  );
};

export interface TransactionsSummaryDataTablePlaceholderProps {
  numElements?: number;
}

/**
 * TransactionsSummaryDataTablePlaceholder is a DataTable that contains
 * Transaction Summary State.
 */
export const TransactionsSummaryDataTablePlaceholder: React.FC<
  TransactionsSummaryDataTablePlaceholderProps
> = (props) => {
  const { numElements = 20 } = props;
  // Maintain the starting arguments.
  return (
    <DataContext.Provider value={Array.from(iota(numElements))}>
      <TransactionsSummaryDataTableLayout
        components={[
          SkeletonContent,
          SkeletonContent,
          SkeletonContent,
          SkeletonContent,
        ]}
      />
    </DataContext.Provider>
  );
};

/**
 * TransactionsSummaryDataTable is a DataTable that contains Transaction
 * Summary State.
 */
export const TransactionsSummaryDataTable: React.FC = () => {
  // Maintain the starting arguments.
  return (
    <TransactionsSummaryDataTableLayout
      components={[TransactionCell, RollUpCell, BlockCell, TimeCell]}
    />
  );
};
