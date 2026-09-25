import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { PromiseResolver } from '@/components/data/async_data';
import {
  DataTableState,
  DataTableStateContext,
} from '@/components/data/data_table/data_table';
import { SortDirection } from '@/components/data/types';
import { Text } from '@/components/text';
import { DataContext } from '@/contexts/data_provider';
import {
  ExplorerSummaryContext,
  ExplorerTransactionSummariesContext,
} from '@/contexts/explorer_api_contexts';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { addClassToClassName } from '@/higher_order';
import { ExplorerGetTransactionSummariesFilter } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_filter';
import { ExplorerGetTransactionSummariesRequest } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesResponse } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_response';
import { ExplorerGetTransactionSummariesTarget } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_target';
import { default as React } from 'react';
import { default as LabeledAnchorButton } from '../../hid/buttons/labeled_anchor_button/labeled_anchor_button';
import { default as LabeledButton } from '../../hid/buttons/labeled_button/labeled_button';
import { BlockNumberContext } from '../block_detail_content/block_detail_content_loader';
import { KeepWhileLoading } from '../keep_while_loading';
import '../table_navigation.css';

export const enum TransactionSummaryColumn {
  hash,
  rollup,
  block,
  time,
  position,
}

/** Re-fetches the current page of transactions. */
export const RefreshTransactionSummariesContext = React.createContext<
  () => void
>(() => {});

export interface TransactionSummaryDataTableState extends DataTableState<TransactionSummaryColumn> {
  height?: number;
  offset?: number;
  /** Changing this re-fetches the current page. */
  refreshedAt?: number;
}

const BLOCKS_TO_SHOW = 20;

// The page's transactions, and the paging state they were loaded for.
const kKeptTransactionSummaryContexts = [
  DataContext,
  DataTableStateContext,
] as React.Context<unknown>[];

/**
 * LoadTransactionSummaryDataTableData uses the Retriever from the
 * RetrieverContext and kicks off requests using the state retrieved
 * by the DataTableStateContext.
 */
const LoadTransactionSummaryDataTableData: React.FC<React.PropsWithChildren> = (
  props,
) => {
  // Need to retrieve the actual data source
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const dataTableState = React.useContext(
    DataTableStateContext,
  ) as TransactionSummaryDataTableState;
  const blockID = React.useContext(BlockNumberContext);

  const request = new ExplorerGetTransactionSummariesRequest(
    dataTableState.height == null || dataTableState.height === undefined
      ? ExplorerGetTransactionSummariesTarget.latest(BLOCKS_TO_SHOW)
      : ExplorerGetTransactionSummariesTarget.heightAndOffset(
          dataTableState.height,
          dataTableState.offset || 0,
          BLOCKS_TO_SHOW,
        ),
    !blockID
      ? ExplorerGetTransactionSummariesFilter.none()
      : ExplorerGetTransactionSummariesFilter.block(blockID),
  );

  return (
    <PromiseResolver
      promise={service.explorer.getTransactionSummaries(request)}
    >
      <KeepWhileLoading contexts={kKeptTransactionSummaryContexts}>
        <TransactionSummariesProvider>
          {props.children}
        </TransactionSummariesProvider>
      </KeepWhileLoading>
    </PromiseResolver>
  );
};

const TransactionSummariesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = React.useContext(DataContext) as
    null | undefined | ExplorerGetTransactionSummariesResponse;

  const transactionSummaries = data?.transactionSummaries ?? [];

  return (
    <ExplorerTransactionSummariesContext.Provider value={transactionSummaries}>
      <DataContext.Provider value={transactionSummaries}>
        {children}
      </DataContext.Provider>
    </ExplorerTransactionSummariesContext.Provider>
  );
};

const LoadTransactionSummaryDataTableDataFromExplorerSummary: React.FC<
  React.PropsWithChildren
> = (props) => {
  const transactionSummaries =
    React.useContext(ExplorerTransactionSummariesContext) ?? [];

  return (
    <ExplorerTransactionSummariesContext.Provider value={transactionSummaries}>
      <DataContext.Provider value={transactionSummaries}>
        {props.children}
      </DataContext.Provider>
    </ExplorerTransactionSummariesContext.Provider>
  );
};

export interface TransactionsSummaryDataLoaderProps {
  startAtBlock?: number;
  offset?: number;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * TransactionSummaryDataLoader sets up the intial state of the DataTableState
 * and kicks begins the process of retrieving the data.
 */
export const TransactionSummaryDataLoader: React.FC<
  TransactionsSummaryDataLoaderProps
> = (props) => {
  const { startAtBlock, offset, ...rest } = props;
  const [refreshedAt, setRefreshedAt] = React.useState<number>();
  const refresh = React.useCallback(() => setRefreshedAt(Date.now()), []);
  const initialState = React.useMemo(
    (): TransactionSummaryDataTableState => ({
      sortColumn: TransactionSummaryColumn.block,
      sortDir: SortDirection.desc,
      height: startAtBlock,
      offset: offset,
      refreshedAt,
    }),
    [startAtBlock, offset, refreshedAt],
  );

  return (
    <RefreshTransactionSummariesContext.Provider value={refresh}>
      <DataTableStateContext.Provider value={initialState}>
        <LoadTransactionSummaryDataTableData {...rest} />
      </DataTableStateContext.Provider>
    </RefreshTransactionSummariesContext.Provider>
  );
};

export const TransactionSummaryDataFromExplorerSummary: React.FC<
  TransactionsSummaryDataLoaderProps
> = (props) => {
  const { startAtBlock, offset, ...rest } = props;
  // Create the Data Table State
  const explorerSummary = React.useContext(ExplorerSummaryContext);
  const initialState = React.useMemo(
    (): TransactionSummaryDataTableState => ({
      sortColumn: TransactionSummaryColumn.block,
      sortDir: SortDirection.desc,
      height: startAtBlock,
      offset: offset,
    }),
    [startAtBlock, offset],
  );
  const transactionSummaries = explorerSummary?.latestTransactions ?? [];

  return (
    <ExplorerTransactionSummariesContext.Provider value={transactionSummaries}>
      <DataTableStateContext.Provider value={initialState}>
        <LoadTransactionSummaryDataTableDataFromExplorerSummary {...rest} />
      </DataTableStateContext.Provider>
    </ExplorerTransactionSummariesContext.Provider>
  );
};

export interface TransactionsNavigationProps {
  className?: string;
}

export const TransactionsNavigation: React.FC<TransactionsNavigationProps> = (
  props,
) => {
  const data = React.useContext(ExplorerTransactionSummariesContext);
  const pathResolver = React.useContext(PathResolverContext);
  const state = React.useContext(
    DataTableStateContext,
  ) as TransactionSummaryDataTableState;

  const refresh = React.useContext(RefreshTransactionSummariesContext);
  const last = data?.[data.length - 1];

  // There is no Newer: transactions only page downward.
  return (
    <nav
      className={addClassToClassName(
        props.className,
        'transactions-navigation',
      )}
    >
      {state.height === undefined ? (
        <LabeledButton onClick={refresh}>
          <Text text="Latest" />
        </LabeledButton>
      ) : (
        <LabeledAnchorButton href={pathResolver.transactions()}>
          <Text text="Latest" />
        </LabeledAnchorButton>
      )}
      {last && last.height > 0 && (
        // The service's offset counts from the block's newest transaction.
        <LabeledAnchorButton
          href={pathResolver.transactions(
            last.height,
            last.numTransactions - last.offset,
          )}
        >
          <Text text="Older" />
        </LabeledAnchorButton>
      )}
    </nav>
  );
};
