import React from 'react';
import { BlockSummaryColumn } from '../../../types/data_source/block_summary/types';
import { curatedRollupMap } from '../../../types/data_source/rollup_entry/data';
import { RollUpSummaryAsyncRetriever } from '../../../types/data_source/rollup_summary/types';
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
import NumberText from '../../text/NumberText';
import Text from '../../text/Text';
import RollUpSimple from '../roll_up/roll_up_simple/RollUpSimple';

export interface RollUpSummary {
  namespace: number;
  transactions: number;
}

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

const RollUpsSummaryDataTable: React.FC = () => {
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

function createDataRetrieverFromRetriever(
  retriever: RollUpSummaryAsyncRetriever,
) {
  return async (state: DataTableState<unknown>) => {
    const resolvedState = state as DataTableState<BlockSummaryColumn>;
    const data = await retriever.retrieve(resolvedState.page);

    return data.map(
      (data) =>
        ({
          namespace: data.namespace,
          transactions: data.transactions,
        }) satisfies RollUpSummary,
    );
  };
}

/**
 * RetrieverContext represents the retriever to be utilized for retrieving
 * the BlockSummary data.
 */
export const RetrieverContext =
  React.createContext<RollUpSummaryAsyncRetriever>({
    async retrieve() {
      throw new Error('unimplemented');
    },
  });

interface LoadRollUpsSummaryDataTableData {}

const LoadRollUpsSummaryDataTableData: React.FC<
  LoadRollUpsSummaryDataTableData
> = (props) => {
  // Need to retrieve the actual data source
  const retriever = React.useContext(RetrieverContext);
  const dataTableState = React.useContext(DataTableStateContext);

  const nextRetriever = createDataRetrieverFromRetriever(retriever);

  return (
    <PromiseResolver promise={nextRetriever(dataTableState)}>
      {React.createElement(Card, props, <RollUpsSummaryDataTable />)}
    </PromiseResolver>
  );
};

export interface RollUpsSummaryProps {}

const RollUpsSummary: React.FC<RollUpsSummaryProps> = (props) => {
  // Create the Data Table State
  const [initialState] = React.useState<DataTableState<BlockSummaryColumn>>({
    sortColumn: BlockSummaryColumn.height,
    sortDir: SortDirection.desc,
    page: 0,
  });

  return (
    <DataTableStateContext.Provider value={initialState}>
      {React.createElement(LoadRollUpsSummaryDataTableData, props)}
    </DataTableStateContext.Provider>
  );
};

export default RollUpsSummary;
