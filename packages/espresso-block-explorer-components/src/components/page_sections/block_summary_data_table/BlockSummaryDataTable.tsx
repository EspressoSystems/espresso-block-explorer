import React from 'react';
import { TaggedBase64 } from '../../../types/TaggedBase64';
import {
  BlockSummaryAsyncRetriever,
  BlockSummaryColumn,
} from '../../../types/data_source/block_summary/types';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import DataTable, {
  DataTableRowContext,
  DataTableSetStateContext,
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/DataTable';
import { SortDirection } from '../../data/types';
import Card from '../../layout/card/Card';
import Link from '../../links/link/Link';
import ByteSizeText from '../../text/ByteSizeText';
import DateTimeText from '../../text/DateTimeText';
import NumberText from '../../text/NumberText';

import TaggedBase64Text from '../../text/TaggedBase64Text';

export interface BlockSummary {
  block: number;
  proposer: TaggedBase64;
  transactions: number;
  size: number;
  time: Date;
}

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
 * BlockSummaryDataTable is the DataTable for the Blocks Summary display
 */
const BlockSummaryDataTable: React.FC = () => {
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

interface BlockSummaryDataTableState
  extends DataTableState<BlockSummaryColumn> {
  startAtBlock?: number;
}

const kBlocksPerPage = 20;

/**
 * createDataRetrieverFromRetriever converts the given
 * BlockSummaryAsyncRetriever into a function that can satisfy the
 * BlockSummary type.
 */
function createDataRetrieverFromRetriever(
  retriever: BlockSummaryAsyncRetriever,
) {
  return async (state: DataTableState<unknown>) => {
    const resolvedState = state as BlockSummaryDataTableState;
    const data = await retriever.retrieve({
      startAtBlock: resolvedState.startAtBlock,
      blocksPerPage: kBlocksPerPage,
    });

    return data.map(
      (data) =>
        ({
          block: data.height,
          proposer: data.proposer,
          transactions: data.transactions,
          size: data.size,
          time: data.time,
        }) satisfies BlockSummary,
    );
  };
}

/**
 * RetrieverContext represents the retriever to be utilized for retrieving
 * the BlockSummary data.
 */
export const RetrieverContext = React.createContext<BlockSummaryAsyncRetriever>(
  {
    async retrieve() {
      throw new Error('unimplemented');
    },
  },
);

interface LoadBlocksSummaryDataTableData {}

/**
 * LoadBlockSummaryDataTableData kicks of the process of retrieving the
 * current block page. It grabs the details from the RetrieverContext using
 * the state retrieved from DataTableStateContext.
 */
const LoadBlockSummaryDataTableData: React.FC<
  LoadBlocksSummaryDataTableData
> = (props) => {
  // Need to retrieve the actual data source
  const retriever = React.useContext(RetrieverContext);
  const dataTableState = React.useContext(DataTableStateContext);

  const nextRetriever = createDataRetrieverFromRetriever(retriever);

  return (
    <PromiseResolver promise={nextRetriever(dataTableState)}>
      <DataTableSetStateContext.Provider value={() => {}}>
        {React.createElement(Card, props, <BlockSummaryDataTable />)}
      </DataTableSetStateContext.Provider>
    </PromiseResolver>
  );
};

export interface BlocksSummaryProps {
  startAtBlock?: number;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * BlocksSummary is a component that provides the initial state of the Block
 * Summary state, and loads the data.
 * @returns
 */
const BlocksSummary: React.FC<BlocksSummaryProps> = ({
  startAtBlock,
  ...props
}) => {
  // Create the Data Table State
  const [initialState, setState] = React.useState<BlockSummaryDataTableState>({
    sortColumn: BlockSummaryColumn.height,
    sortDir: SortDirection.desc,
    startAtBlock: startAtBlock,
  });

  if (
    startAtBlock !== undefined &&
    initialState.startAtBlock !== startAtBlock
  ) {
    setState({
      ...initialState,
      startAtBlock: startAtBlock,
    });
  }

  return (
    <DataTableStateContext.Provider value={initialState}>
      <DataTableSetStateContext.Provider
        value={
          setState as React.Dispatch<
            React.SetStateAction<DataTableState<unknown>>
          >
        }
      >
        {React.createElement(LoadBlockSummaryDataTableData, props)}
      </DataTableSetStateContext.Provider>
    </DataTableStateContext.Provider>
  );
};

export default BlocksSummary;
