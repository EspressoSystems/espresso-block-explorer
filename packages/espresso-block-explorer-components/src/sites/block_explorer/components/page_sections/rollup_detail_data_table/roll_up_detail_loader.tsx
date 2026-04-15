import { PromiseResolver } from '@/components/data/async_data';
import {
  DataTableState,
  DataTableStateContext,
} from '@/components/data/data_table/data_table';
import { SortDirection } from '@/components/data/types';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { NamespaceContext } from '@/models/block_explorer/rollup_entry/contexts';
import { ExplorerGetTransactionSummariesFilter } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_filter';
import { ExplorerGetTransactionSummariesRequest } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesTarget } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_target';
import { default as React } from 'react';
import { TransactionSummaryColumn } from '../transaction_summary_data_table/transaction_summary_data_loader';

export interface RollUpDetailDataTableState extends DataTableState<TransactionSummaryColumn> {
  height?: number;
  offset?: number;
}

export interface RollUpDetailsDataLoaderProps {
  startAtBlock?: number;
  offset?: number;
  children: React.ReactNode | React.ReactNode[];
}

const NUMBER_OF_TRANSACTIONS_TO_LOAD = 20;

/**
 * RollUpDetailsDataLoader uses the Retriever from the
 * RetrieverContext and kicks off requests using the state retrieved
 * by the DataTableStateContext.
 */
export const RollUpDetailsDataLoader: React.FC<
  RollUpDetailsDataLoaderProps
> = ({ children, startAtBlock, offset, ...props }) => {
  // Create the Data Table State
  const [initialState] = React.useState<RollUpDetailDataTableState>({
    sortColumn: TransactionSummaryColumn.block,
    sortDir: SortDirection.desc,
    height: startAtBlock,
    offset,
  });

  // Need to retrieve the actual data source
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const namespace = React.useContext(NamespaceContext);

  const request = new ExplorerGetTransactionSummariesRequest(
    initialState.height === null || initialState.height === undefined
      ? ExplorerGetTransactionSummariesTarget.latest(
          NUMBER_OF_TRANSACTIONS_TO_LOAD,
        )
      : ExplorerGetTransactionSummariesTarget.heightAndOffset(
          initialState.height,
          initialState.offset || 0,
          NUMBER_OF_TRANSACTIONS_TO_LOAD,
        ),
    ExplorerGetTransactionSummariesFilter.namespace(namespace),
  );

  return (
    <DataTableStateContext.Provider value={initialState}>
      <PromiseResolver
        promise={service.explorer.getTransactionSummaries(request)}
        {...props}
      >
        {children}
      </PromiseResolver>
    </DataTableStateContext.Provider>
  );
};
