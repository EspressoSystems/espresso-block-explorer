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
  RelativeDateTimeText,
  TaggedBase64Text,
  Text,
} from '@/components/text';
import { DataContext } from '@/contexts/data_provider';
import { iota } from '@/functional/functional';
import { ExplorerTransactionSummary } from '@/service/hotshot_query_service/explorer/transaction_summary';
import { default as React } from 'react';
import { InternalLink } from '../../links/link/link';
import { default as RollUpSimple } from '../roll_up/roll_up_simple/roll_up_simple';
import { TransactionSummaryColumn } from './transaction_summary_data_loader';

/**
 * TransactionCells is a cell that displays the hash for the transaction,
 * and contains a link to inspect the individual transaction.
 */
const TransactionCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as
    | undefined
    | null
    | ExplorerTransactionSummary;
  const pathResolver = React.useContext(PathResolverContext);

  if (!row) {
    return null;
  }

  return (
    <CopyTaggedBase64 value={row.hash}>
      <InternalLink href={pathResolver.transaction(row.height, row.offset)}>
        <TaggedBase64Text value={row.hash} />
      </InternalLink>
    </CopyTaggedBase64>
  );
};

/**
 * RollUpCell is a cell that displays the rollup for a given transaction.
 */
const RollUpCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as
    | undefined
    | null
    | ExplorerTransactionSummary;

  if (!row) {
    return null;
  }

  const namespaces = row.rollups;

  if (namespaces.length === 0) {
    return <Text text="No Rollups Involved" />;
  }

  if (namespaces.length === 1) {
    const rollup = namespaces[0];
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
  const row = React.useContext(DataTableRowContext) as
    | undefined
    | null
    | ExplorerTransactionSummary;

  if (!row) {
    return null;
  }

  return (
    <InternalLink
      href={pathResolver.block(row.height)}
      title={`Link to Block ${row.height}`}
    >
      <NumberText number={row.height} />
    </InternalLink>
  );
};

/**
 * TimeCell represents the Timestamp of the Transaction.
 */
const TimeCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as
    | undefined
    | null
    | ExplorerTransactionSummary;

  if (!row) {
    return null;
  }

  return <DateTimeText date={row.time} />;
};

/**
 * RelativeTimeCell is a TimeCell that reports how long ago the transaction
 * was sequenced rather than its absolute timestamp.
 */
const RelativeTimeCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as
    | undefined
    | null
    | ExplorerTransactionSummary;

  if (!row) {
    return null;
  }

  return <RelativeDateTimeText date={row.time} />;
};

interface TransactionsSummaryDataTableLayoutProps {
  components: [
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
  ];
  emptyContent?: React.ReactNode;
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
      emptyContent={props.emptyContent}
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

/**
 * BlockTransactionsSummaryDataTable is the TransactionsSummaryDataTable as
 * displayed underneath a block's details, where an empty result means the
 * block simply carried no transactions rather than that nothing was found.
 */
export const BlockTransactionsSummaryDataTable: React.FC = () => {
  return (
    <TransactionsSummaryDataTableLayout
      emptyContent={<Text text="Empty Block" />}
      components={[TransactionCell, RollUpCell, BlockCell, TimeCell]}
    />
  );
};

/**
 * LatestTransactionsSummaryDataTable is the TransactionsSummaryDataTable as
 * displayed in the explorer's "Latest Transactions" summary, where recency
 * matters more than the exact timestamp and the card is too narrow to fit one.
 */
export const LatestTransactionsSummaryDataTable: React.FC = () => {
  return (
    <TransactionsSummaryDataTableLayout
      components={[TransactionCell, RollUpCell, BlockCell, RelativeTimeCell]}
    />
  );
};
