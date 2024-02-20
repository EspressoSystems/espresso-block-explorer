import React from 'react';
import { BlockSummaryColumn } from '../../../types/data_source/block_summary/types';
import { curatedRollupMap } from '../../../types/data_source/rollup_entry/data';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import DataTable, {
  DataTableRowContext,
} from '../../data/data_table/DataTable';
import Link from '../../links/link/Link';
import NumberText from '../../text/NumberText';
import Text from '../../text/Text';
import RollUpSimple from '../roll_up/roll_up_simple/RollUpSimple';
import { RollUpSummary } from './RollUpsSummaryLoader';

const RollupCell: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const row = React.useContext(DataTableRowContext) as RollUpSummary;

  return (
    <Link href={pathResolver.rollUp(row.namespace)}>
      <RollUpSimple namespace={row.namespace} />
    </Link>
  );
};

const NamespaceCell: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const row = React.useContext(DataTableRowContext) as RollUpSummary;

  return (
    <Link href={pathResolver.rollUp(row.namespace)}>
      <NumberText number={row.namespace} />
    </Link>
  );
};

const TransactionsCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as RollUpSummary;

  return <NumberText number={row.transactions} />;
};

const OfficalSiteCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as RollUpSummary;
  const rollUp = curatedRollupMap.get(row.namespace);

  if (!rollUp) {
    return <Text text="-" />;
  }

  return (
    <Link href={rollUp.site.toString()} target="_blank">
      <Text text={rollUp.site.toString()} />
    </Link>
  );
};

const BlockExplorerCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as RollUpSummary;
  const rollUp = curatedRollupMap.get(row.namespace);

  if (!rollUp) {
    return <Text text="-" />;
  }

  return (
    <Link href={rollUp.blockExplorer.toString()} target="_blank">
      <Text text={rollUp.blockExplorer.toString()} />
    </Link>
  );
};

export const RollUpsSummaryDataTable: React.FC = () => {
  return (
    <DataTable
      columns={[
        {
          label: 'Rollup',
          columnType: BlockSummaryColumn.height,
          buildCell: RollupCell,
        },
        {
          label: 'Namespace',
          columnType: BlockSummaryColumn.proposer,
          buildCell: NamespaceCell,
        },
        {
          label: 'Sequencer Transaction',
          columnType: BlockSummaryColumn.transactions,
          buildCell: TransactionsCell,
        },
        {
          label: 'Official Site',
          columnType: BlockSummaryColumn.size,
          buildCell: OfficalSiteCell,
        },
        {
          label: 'Block Explorer',
          columnType: BlockSummaryColumn.time,
          buildCell: BlockExplorerCell,
        },
      ]}
    />
  );
};
