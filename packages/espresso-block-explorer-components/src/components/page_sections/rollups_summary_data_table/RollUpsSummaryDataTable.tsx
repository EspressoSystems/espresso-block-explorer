import { DataContext } from '@/components/contexts/DataProvider';
import { PathResolverContext } from '@/contexts/PathResolverProvider';
import { iota } from '@/functional/functional';
import SkeletonContent from '@/loading/SkeletonContent';
import { BlockSummaryColumn } from '@/models/block_explorer/block_summary';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
import React from 'react';
import DataTable, {
  DataTableRowContext,
} from '../../data/data_table/DataTable';
import { EgressLink, InternalLink } from '../../links/link/Link';
import RollUpSimple from '../roll_up/roll_up_simple/RollUpSimple';
import { RollUpSummary } from './RollUpsSummaryLoader';

/**
 * RollupCell is a cell that displays the rollup information for the RollUp
 * Summary Data Table.  It provides the information needed to identify the
 * Rollup, as well as a to the page of that Rollup as well.
 */
const RollupCell: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const row = React.useContext(DataTableRowContext) as RollUpSummary;

  return (
    <InternalLink href={pathResolver.rollUp(row.namespace)}>
      <RollUpSimple namespace={row.namespace} />
    </InternalLink>
  );
};

/**
 * NamespaceCell is a cell that displays the namespace information for the
 * rollup given.  It also provides a link to the page of the Rollup just
 * like RollupCell.
 */
const NamespaceCell: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const row = React.useContext(DataTableRowContext) as RollUpSummary;

  return (
    <InternalLink href={pathResolver.rollUp(row.namespace)}>
      <NumberText number={row.namespace} />
    </InternalLink>
  );
};

/**
 * TransactionsCell is a simple informational cell that simply displays the
 * total number of transactions contributed by the identified Roll up to
 * the Block Chain.
 */
const TransactionsCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as RollUpSummary;

  return <NumberText number={row.transactions} />;
};

/**
 * OfficialSiteCell is a cell that displays the primary website link for the
 * Roll up for this row.  It provides a link that will open in a new window
 * for easy access.
 */
const OfficialSiteCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as RollUpSummary;
  const rollUp = curatedRollupMap.get(row.namespace);

  if (!rollUp) {
    return <Text text="-" />;
  }

  return (
    <EgressLink href={rollUp.site.toString()} target="_blank">
      <Text text={rollUp.site.toString()} />
    </EgressLink>
  );
};

/**
 * BlockExplorerCell is a cell that displays the link for the Rollup's own
 * Block Explorer.  It also provides a clickable link that will open in a
 * new window for easy access.
 */
const BlockExplorerCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as RollUpSummary;
  const rollUp = curatedRollupMap.get(row.namespace);

  if (!rollUp) {
    return <Text text="-" />;
  }

  return (
    <EgressLink href={rollUp.blockExplorer.toString()} target="_blank">
      <Text text={rollUp.blockExplorer.toString()} />
    </EgressLink>
  );
};

interface RollUpsSummaryDataTableLayoutProps {
  components: [
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
  ];
}

/**
 * RollUpsSummaryDataTableLayout is a component that provides the overall
 * layout of the RollUps Summary Data Table.  It provides the label, and
 * column type of the Data Table, while allowing the caller to specify the
 * ComponentTypes of each of the cells.
 */
const RollUpsSummaryDataTableLayout: React.FC<
  RollUpsSummaryDataTableLayoutProps
> = (props) => {
  return (
    <DataTable
      columns={[
        {
          label: 'Rollup',
          columnType: BlockSummaryColumn.height,
          buildCell: props.components[0],
        },
        {
          label: 'Namespace',
          columnType: BlockSummaryColumn.proposer,
          buildCell: props.components[1],
        },
        {
          label: 'Sequencer Transaction',
          columnType: BlockSummaryColumn.transactions,
          buildCell: props.components[2],
        },
        {
          label: 'Official Site',
          columnType: BlockSummaryColumn.size,
          buildCell: props.components[3],
        },
        {
          label: 'Block Explorer',
          columnType: BlockSummaryColumn.time,
          buildCell: props.components[4],
        },
      ]}
    />
  );
};

interface RollUpsSummaryDataTablePlaceholderProps {
  numElements?: number;
}

/**
 * RollupsSummaryDataTablePlaceholder is a placeholder representation for
 * the RollUps Summary Data Table with a configurable number of elements
 * to draw.
 */
export const RollUpsSummaryDataTablePlaceholder: React.FC<
  RollUpsSummaryDataTablePlaceholderProps
> = (props) => {
  const { numElements = 20 } = props;

  return (
    <DataContext.Provider value={Array.from(iota(numElements))}>
      <RollUpsSummaryDataTableLayout
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
 * RollUpsSummaryDataTable represents the Data Table for RollUps Summary
 * display when data is available.
 */
export const RollUpsSummaryDataTable: React.FC = () => {
  return (
    <RollUpsSummaryDataTableLayout
      components={[
        RollupCell,
        NamespaceCell,
        TransactionsCell,
        OfficialSiteCell,
        BlockExplorerCell,
      ]}
    />
  );
};
