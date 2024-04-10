import React from 'react';
import { iota } from '../../../functional/functional';
import { BlockSummaryColumn } from '../../../models/block_explorer/block_summary';
import { DataContext } from '../../contexts/DataProvider';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import DataTable, {
  DataTableRowContext,
} from '../../data/data_table/DataTable';
import Link from '../../links/link/Link';
import SkeletonContent from '../../loading/SkeletonContent';
import ByteSizeText from '../../text/ByteSizeText';
import CopyHex from '../../text/CopyHex';
import DateTimeText from '../../text/DateTimeText';
import HexText from '../../text/HexText';
import NumberText from '../../text/NumberText';
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

  return (
    <CopyHex value={row.proposer}>
      <HexText value={row.proposer} />
    </CopyHex>
  );
};

/**
 * TransactionsCell is a cell that contains the number of transactions that
 * are in the block in question.
 */
const TransactionsCell: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const row = React.useContext(DataTableRowContext) as BlockSummary;

  return (
    <Link href={pathResolver.transactionsForBlock(row.block)}>
      <NumberText number={row.transactions} />
    </Link>
  );
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

interface BlockSummaryDataTableLayoutProps {
  components: [
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
  ];
}

/**
 * BlockSummaryDataTableLayoutProps represents the the general layout of the
 * Block Summary Data Table.  It provides the labels, and column types while
 * allowing the caller to provide the specific component constructors to
 * utilize for the component.
 */
const BlockSummaryDataTableLayout: React.FC<
  BlockSummaryDataTableLayoutProps
> = (props) => {
  return (
    <DataTable
      columns={[
        {
          label: 'Blocks',
          columnType: BlockSummaryColumn.height,
          buildCell: props.components[0],
        },
        {
          label: 'Proposer',
          columnType: BlockSummaryColumn.proposer,
          buildCell: props.components[1],
        },
        {
          label: 'Transaction',
          columnType: BlockSummaryColumn.transactions,
          buildCell: props.components[2],
        },
        {
          label: 'Size',
          columnType: BlockSummaryColumn.size,
          buildCell: props.components[3],
        },
        {
          label: 'Time',
          columnType: BlockSummaryColumn.time,
          buildCell: props.components[4],
        },
      ]}
    />
  );
};

export interface BlockSummaryDataTablePlaceholderProps {
  numElements?: number;
}

/**
 * BlockSummaryDataTablePlaceholder is a placeholder that acts like a
 * normal BlockSummaryDataTable, but with loading indicator placeholders.
 */
export const BlockSummaryDataTablePlaceholder: React.FC<
  BlockSummaryDataTablePlaceholderProps
> = (props) => {
  const { numElements = 20 } = props;
  return (
    <DataContext.Provider value={Array.from(iota(numElements))}>
      <BlockSummaryDataTableLayout
        components={[
          SkeletonContent,
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
 * BlockSummaryDataTable is the DataTable for the Blocks Summary display
 */
export const BlockSummaryDataTable: React.FC = () => {
  return (
    <BlockSummaryDataTableLayout
      components={[
        BlockCell,
        ProposerCell,
        TransactionsCell,
        SizeCell,
        TimeCell,
      ]}
    />
  );
};
