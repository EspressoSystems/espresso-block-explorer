import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { PromiseResolver } from '@/components/data/async_data';
import {
  DataTableSetStateContext,
  DataTableState,
  DataTableStateContext,
} from '@/components/data/data_table/data_table';
import { SortDirection } from '@/components/data/types';
import { Text } from '@/components/text';
import { DataContext } from '@/contexts/data_provider';
import {
  ExplorerBlockSummariesContext,
  ExplorerSummaryContext,
} from '@/contexts/explorer_api_contexts';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { addClassToClassName } from '@/higher_order';
import { ExplorerGetBlockSummariesRequest } from '@/service/hotshot_query_service/explorer/get_block_summaries_request';
import { ExplorerGetBlockSummariesResponse } from '@/service/hotshot_query_service/explorer/get_block_summaries_response';
import { default as React } from 'react';
import { default as LabeledAnchorButton } from '../../hid/buttons/labeled_anchor_button/labeled_anchor_button';

export enum BlockSummaryColumn {
  height,
  proposer,
  transactions,
  size,
  time,
}

export interface BlockSummaryDataTableState extends DataTableState<BlockSummaryColumn> {
  startAtBlock?: number;
}

const NUMBER_OF_BLOCKS_TO_SHOW = 20;

/**
 * LoadBlockSummaryDataTableData kicks of the process of retrieving the
 * current block page. It grabs the details from the RetrieverContext using
 * the state retrieved from DataTableStateContext.
 */
const LoadBlockSummaryDataTableData: React.FC<React.PropsWithChildren> = (
  props,
) => {
  // Need to retrieve the actual data source
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const dataTableState = React.useContext(
    DataTableStateContext,
  ) as BlockSummaryDataTableState;

  const request =
    dataTableState.startAtBlock === null ||
    dataTableState.startAtBlock === undefined
      ? ExplorerGetBlockSummariesRequest.latest(NUMBER_OF_BLOCKS_TO_SHOW)
      : ExplorerGetBlockSummariesRequest.from(
          dataTableState.startAtBlock,
          NUMBER_OF_BLOCKS_TO_SHOW,
        );

  return (
    <PromiseResolver promise={service.explorer.getBlockSummaries(request)}>
      <ProvideBlockSummaryData>
        <DataTableSetStateContext.Provider value={() => {}}>
          <>{props.children}</>
        </DataTableSetStateContext.Provider>
      </ProvideBlockSummaryData>
    </PromiseResolver>
  );
};

const ProvideBlockSummaryData: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = React.useContext(DataContext) as
    | null
    | undefined
    | ExplorerGetBlockSummariesResponse;

  if (!data) {
    return null;
  }

  return (
    <ExplorerBlockSummariesContext.Provider value={data.blockSummaries}>
      <DataContext.Provider value={data.blockSummaries}>
        {children}
      </DataContext.Provider>
    </ExplorerBlockSummariesContext.Provider>
  );
};

const LoadBlockSummaryDataTableDataFromStream: React.FC<
  React.PropsWithChildren
> = (props) => {
  const data = React.useContext(ExplorerSummaryContext);

  if (!data) {
    return (
      <DataContext.Provider value={null}>{props.children}</DataContext.Provider>
    );
  }

  return (
    <DataContext.Provider value={data.latestBlocks}>
      {props.children}
    </DataContext.Provider>
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
        <LoadBlockSummaryDataTableData {...props} />
      </DataTableSetStateContext.Provider>
    </DataTableStateContext.Provider>
  );
};

export const BlockSummaryDataFromStreamLoader: React.FC<
  BlockSummaryDataLoaderProps
> = ({ startAtBlock, ...props }) => {
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
        <LoadBlockSummaryDataTableDataFromStream {...props} />
      </DataTableSetStateContext.Provider>
    </DataTableStateContext.Provider>
  );
};

export interface BlocksNavigationProps {
  className?: string;
}

const kBlocksPerPage = 20;

export const BlocksNavigation: React.FC<BlocksNavigationProps> = (props) => {
  const data = React.useContext(ExplorerBlockSummariesContext);
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

  if (data && data.length > 0 && data[data.length - 1].height > 0) {
    previous.push(
      <LabeledAnchorButton
        key={1}
        href={pathResolver.blocks(data[data.length - 1].height - 1)}
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
