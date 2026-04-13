import { default as CopyTaggedBase64 } from '@/block_explorer/components/text/copy_tagged_base64';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import {
  default as DataTable,
  DataTableRowContext,
} from '@/components/data/data_table/data_table';
import { SkeletonContent } from '@/components/loading';
import {
  DateTimeText,
  NumberText,
  TaggedBase64Text,
  Text,
} from '@/components/text';
import { DataContext } from '@/contexts/data_provider';
import { iota } from '@/functional/functional';
import { TransactionSummaryColumn } from '@/models/block_explorer/transaction_summary';
import { default as React } from 'react';
import { InternalLink } from '../../links/link/link';
import { default as RollUpSimple } from '../roll_up/roll_up_simple/roll_up_simple';
import { TransactionSummary } from './transaction_summary_data_loader';

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
