import React from 'react';
import { BlockSummaryColumn } from '../../../types/data_source/block_summary/types';
import { iota } from '../../../types/functional';
import { DataContext } from '../../contexts/DataProvider';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import DataTable, {
  DataTableRowContext,
} from '../../data/data_table/DataTable';
import Link from '../../links/link/Link';
import SkeletonContent from '../../loading/SkeletonContent';
import ByteSizeText from '../../text/ByteSizeText';
import DateTimeText from '../../text/DateTimeText';
import NumberText from '../../text/NumberText';
import TaggedBase64Text from '../../text/TaggedBase64Text';
import { BlockSummary } from './BlockSummaryDataLoader';

/**
 * BlockCell is a cell for containing reference information about the block
 * block that is being reported.  It contains a link to the page for the
 * individual block so the user can navigate to that block for more details.
 */
const BlockCell: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const row = React.useContext(DataTableRowContext) as BlockSummary;

  return (
    <Link href={pathResolver.block(row.block)}>
      <NumberText number={row.block} />
    </Link>
  );
};

/**
 * ProposerCell is a cell for containing reference information about the
 * proposer of the block. In this case this is expected to be a TaggedBase64
 * type.
 */
const ProposerCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as BlockSummary;

  return <TaggedBase64Text value={row.proposer} />;
};

/**
 * TransactionsCell is a cell that contains the number of transactions that
 * are in the block in question.
 */
const TransactionsCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as BlockSummary;

  return <NumberText number={row.transactions} />;
};

/**
 * SizeCell is a cell that represents the size of the block in question in
 * bytes.
 */
const SizeCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as BlockSummary;

  return <ByteSizeText bytes={row.size} />;
};

/**
 * TimeCell is a cell that displays the timestamp for the blcok.
 */
const TimeCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as BlockSummary;

  return <DateTimeText date={row.time} />;
};

/**
 * BlockSummaryDataTablePlaceholder is a placeholder that acts like a
 * normal BlockSummaryDataTable, but with loading indicator placeholders.
 */
export const BlockSummaryDataTablePlaceholder: React.FC = () => {
  return (
    <DataContext.Provider value={Array.from(iota(20))}>
      <DataTable
        columns={[
          {
            label: 'Blocks',
            columnType: BlockSummaryColumn.height,
            buildCell: SkeletonContent,
          },
          {
            label: 'Proposer',
            columnType: BlockSummaryColumn.proposer,
            buildCell: SkeletonContent,
          },
          {
            label: 'Transaction',
            columnType: BlockSummaryColumn.transactions,
            buildCell: SkeletonContent,
          },
          {
            label: 'Size',
            columnType: BlockSummaryColumn.size,
            buildCell: SkeletonContent,
          },
          {
            label: 'Time',
            columnType: BlockSummaryColumn.time,
            buildCell: SkeletonContent,
          },
        ]}
      />
    </DataContext.Provider>
  );
};

/**
 * BlockSummaryDataTable is the DataTable for the Blocks Summary display
 */
export const BlockSummaryDataTable: React.FC = () => {
  return (
    <DataTable
      columns={[
        {
          label: 'Blocks',
          columnType: BlockSummaryColumn.height,
          buildCell: BlockCell,
        },
        {
          label: 'Proposer',
          columnType: BlockSummaryColumn.proposer,
          buildCell: ProposerCell,
        },
        {
          label: 'Transaction',
          columnType: BlockSummaryColumn.transactions,
          buildCell: TransactionsCell,
        },
        {
          label: 'Size',
          columnType: BlockSummaryColumn.size,
          buildCell: SizeCell,
        },
        {
          label: 'Time',
          columnType: BlockSummaryColumn.time,
          buildCell: TimeCell,
        },
      ]}
    />
  );
};
