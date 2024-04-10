import React from 'react';
import UnimplementedError from '../../../errors/UnimplementedError';
import {
  BlockSummaryAsyncRetriever,
  BlockSummaryColumn,
} from '../../../models/block_explorer/block_summary';
import { DataContext } from '../../contexts/DataProvider';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import {
  DataTableSetStateContext,
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/DataTable';
import { SortDirection } from '../../data/types';
import LabeledAnchorButton from '../../hid/buttons/labeled_anchor_button/LabeledAnchorButton';
import { addClassToClassName } from '../../higher_order';
import Text from '../../text/Text';

export interface BlockSummary {
  block: number;
  proposer: ArrayBuffer;
  transactions: number;
  size: number;
  time: Date;
}

export interface BlockSummaryDataTableState
  extends DataTableState<BlockSummaryColumn> {
  startAtBlock?: number;
}

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
export const BlockSummaryAsyncRetrieverContext =
  React.createContext<BlockSummaryAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

interface LoadBlocksSummaryDataTableData {
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * LoadBlockSummaryDataTableData kicks of the process of retrieving the
 * current block page. It grabs the details from the RetrieverContext using
 * the state retrieved from DataTableStateContext.
 */
const LoadBlockSummaryDataTableData: React.FC<
  LoadBlocksSummaryDataTableData
> = (props) => {
  // Need to retrieve the actual data source
  const retriever = React.useContext(BlockSummaryAsyncRetrieverContext);
  const dataTableState = React.useContext(DataTableStateContext);

  const nextRetriever = createDataRetrieverFromRetriever(retriever);

  return (
    <PromiseResolver promise={nextRetriever(dataTableState)}>
      <DataTableSetStateContext.Provider value={() => {}}>
        <>{props.children}</>
      </DataTableSetStateContext.Provider>
    </PromiseResolver>
  );
};

export interface BlockSummaryDataLoaderProps {
  startAtBlock?: number;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * BlockSummaryDataLoader is a component that provides the initial state of
 * the Block Summary state, and loads the data.
 * @returns
 */
export const BlockSummaryDataLoader: React.FC<BlockSummaryDataLoaderProps> = ({
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

export interface BlocksNavigationProps {
  className?: string;
}

const kBlocksPerPage = 20;

export const BlocksNavigation: React.FC<BlocksNavigationProps> = (props) => {
  const data = React.useContext(DataContext) as BlockSummary[];
  const pathResolver = React.useContext(PathResolverContext);

  const state = React.useContext(
    DataTableStateContext,
  ) as BlockSummaryDataTableState;

  const previous: React.ReactNode[] = [];
  const next: React.ReactNode[] = [];
  // Do we know if we're at the top of the page?
  if (state.startAtBlock !== undefined) {
    previous.push(
      <LabeledAnchorButton
        key={0}
        href={pathResolver.blocks(state.startAtBlock + kBlocksPerPage)}
      >
        <Text text="Previous" />
      </LabeledAnchorButton>,
    );
  }

  if (data.length > 0 && data[data.length - 1].block > 0) {
    previous.push(
      <LabeledAnchorButton
        key={1}
        href={pathResolver.blocks(data[data.length - 1].block - 1)}
      >
        <Text text="Next" />
      </LabeledAnchorButton>,
    );
  }

  /**
   * specific page
   * back a page
   * forward a page
   * specific page
   * ...
   * first page
   */

  return (
    <nav className={addClassToClassName(props.className, 'blocks-navigation')}>
      {previous}
      {next}
    </nav>
  );
};
