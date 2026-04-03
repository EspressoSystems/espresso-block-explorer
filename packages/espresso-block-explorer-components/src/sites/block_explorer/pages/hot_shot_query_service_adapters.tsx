import { BlockDetailAsyncRetrieverContext } from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content_loader';
import { BlockSummaryAsyncRetrieverContext } from '@/block_explorer/components/page_sections/block_summary_data_table/block_summary_data_loader';
import { ExplorerSummaryLoaderContext } from '@/block_explorer/components/page_sections/explorer_summary/explorer_summary_loader';
import { LatestBlockSummaryLoaderContext } from '@/block_explorer/components/page_sections/latest_block_summary/latest_block_summary_loader';
import { RollUpDetailAsyncRetrieverContext } from '@/block_explorer/components/page_sections/rollup_detail_data_table/roll_up_detail_loader';
import { RollUpSummaryAsyncRetrieverContext } from '@/block_explorer/components/page_sections/rollups_summary_data_table/roll_ups_summary_loader';
import { TransactionDetailAsyncRetrieverContext } from '@/block_explorer/components/page_sections/transaction_detail_content/transaction_detail_loader';
import { TransactionSummaryAsyncRetrieverContext } from '@/block_explorer/components/page_sections/transaction_summary_data_table/transaction_summary_data_loader';
import AsyncIterableResolver from '@/components/data/async_data/async_iterable_resolver';
import { ErrorJoiner } from '@/contexts/error_provider';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import {
  mapAsyncIterable,
  timerAsyncIterable,
} from '@/functional/functional_async';
import { BlockSummaryEntry } from '@/models/block_explorer/block_summary';
import { ExplorerSummaryEntry } from '@/models/block_explorer/explorer_summary';
import { TransactionSummaryEntry } from '@/models/block_explorer/transaction_summary';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { ExplorerGetBlockDetailRequest } from '@/service/hotshot_query_service/explorer/get_block_detail_request';
import { ExplorerGetBlockSummariesRequest } from '@/service/hotshot_query_service/explorer/get_block_summaries_request';
import { ExplorerGetExplorerSummaryResponse } from '@/service/hotshot_query_service/explorer/get_explorer_summary_response';
import { ExplorerGetTransactionDetailRequest } from '@/service/hotshot_query_service/explorer/get_transaction_detail_request';
import { ExplorerGetTransactionSummariesFilter } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_filter';
import { ExplorerGetTransactionSummariesRequest } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesTarget } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_target';
import React from 'react';

// We need to create adapters between the HotShotQueryService and the
// components that ultimately wish to consume them.

export interface ProvideBlockDetailDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideBlockDetailDataSource is a component that converts
 * the HotShot Query Service into a BlockDetailAsyncRetriever.
 */
export const ProvideBlockDetailDataSource: React.FC<
  ProvideBlockDetailDataSourceProps
> = (props) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  return (
    <BlockDetailAsyncRetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key: number) {
          const { blockDetail: block } =
            await hotShotQueryService.explorer.getBlockDetail(
              ExplorerGetBlockDetailRequest.height(key),
            );

          return {
            hash: block.hash,
            height: block.height,
            time: block.time,
            transactions: block.numTransactions,
            proposer: block.proposerID,
            recipient: block.feeRecipient,
            size: block.size,
            rewards: block.blockReward,
          };
        },
      }}
    />
  );
};

export interface ProvideBlocksSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
  blocksPerPage?: number;
}

/**
 * ProvideBlocksSummaryDataSource is a component that converts
 * the HotShot Query Service into a BlockSummaryAsyncRetriever.
 */
export const ProvideBlocksSummaryDataSource: React.FC<
  ProvideBlocksSummaryDataSourceProps
> = ({ children, blocksPerPage: defaultBlocksPerPage = 20, ...rest }) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  return (
    <BlockSummaryAsyncRetrieverContext.Provider
      {...rest}
      value={{
        async retrieve(key) {
          const { blocksPerPage = defaultBlocksPerPage, startAtBlock = null } =
            key;

          const request =
            startAtBlock === null
              ? ExplorerGetBlockSummariesRequest.latest(blocksPerPage)
              : ExplorerGetBlockSummariesRequest.from(
                  startAtBlock,
                  blocksPerPage,
                );

          const summaryResponse =
            await hotShotQueryService.explorer.getBlockSummaries(request);
          const { blockSummaries } = summaryResponse;

          return blockSummaries.map((block): BlockSummaryEntry => {
            return {
              height: block.height,
              proposer: block.proposerID,
              transactions: block.numTransactions,
              size: block.size,
              time: block.time,
            };
          });
        },
      }}
    >
      {children}
    </BlockSummaryAsyncRetrieverContext.Provider>
  );
};

export interface ProvideTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
  transactionsPerPage?: number;
}

/**
 * ProvideTransactionsSummaryDataSource is a component that converts
 * the HotShot Query Service into a
 * TransactionSummaryAsyncRetriever.
 */
export const ProvideTransactionsSummaryDataSource: React.FC<
  ProvideTransactionsSummaryDataSourceProps
> = ({
  children,
  transactionsPerPage: defaultTransactionsPerPage = 20,
  ...rest
}) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  return (
    <TransactionSummaryAsyncRetrieverContext.Provider
      {...rest}
      value={{
        async retrieve(key) {
          const {
            startAtBlock = null,
            offset = null,
            transactionsPerPage = defaultTransactionsPerPage,
          } = key;

          let request: ExplorerGetTransactionSummariesRequest;
          if (startAtBlock === null || offset === null) {
            request = new ExplorerGetTransactionSummariesRequest(
              ExplorerGetTransactionSummariesTarget.latest(transactionsPerPage),
              ExplorerGetTransactionSummariesFilter.none(),
            );
          } else {
            request = new ExplorerGetTransactionSummariesRequest(
              ExplorerGetTransactionSummariesTarget.heightAndOffset(
                startAtBlock,
                offset,
                transactionsPerPage,
              ),
              ExplorerGetTransactionSummariesFilter.none(),
            );
          }

          const summariesResponse =
            await hotShotQueryService.explorer.getTransactionSummaries(request);
          const { transactionSummaries } = summariesResponse;

          return transactionSummaries.map((summary) => ({
            hash: summary.hash,
            namespaces: summary.rollups,
            block: summary.height,
            offset: summary.offset,
            time: summary.time,
          }));
        },
      }}
    >
      {children}
    </TransactionSummaryAsyncRetrieverContext.Provider>
  );
};

export const ProvideTransactionsForBlockSummaryDataSource: React.FC<
  ProvideTransactionsSummaryDataSourceProps
> = ({
  children,
  transactionsPerPage: defaultTransactionsPerPage = 20,
  ...rest
}) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  return (
    <TransactionSummaryAsyncRetrieverContext.Provider
      {...rest}
      value={{
        async retrieve(key) {
          const {
            startAtBlock = 0,
            offset = null,
            transactionsPerPage = defaultTransactionsPerPage,
          } = key;

          let request: ExplorerGetTransactionSummariesRequest;
          if (startAtBlock === null || offset === null) {
            request = new ExplorerGetTransactionSummariesRequest(
              ExplorerGetTransactionSummariesTarget.latest(transactionsPerPage),
              ExplorerGetTransactionSummariesFilter.block(startAtBlock),
            );
          } else {
            request = new ExplorerGetTransactionSummariesRequest(
              ExplorerGetTransactionSummariesTarget.heightAndOffset(
                startAtBlock,
                offset,
                transactionsPerPage,
              ),
              ExplorerGetTransactionSummariesFilter.block(startAtBlock),
            );
          }

          const summariesResponse =
            await hotShotQueryService.explorer.getTransactionSummaries(request);
          const { transactionSummaries } = summariesResponse;

          return transactionSummaries.map((summary) => ({
            hash: summary.hash,
            namespaces: summary.rollups,
            block: summary.height,
            offset: summary.offset,
            time: summary.time,
          }));
        },
      }}
    >
      {children}
    </TransactionSummaryAsyncRetrieverContext.Provider>
  );
};

export interface ProvideTransactionDetailDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideTransactionDetailDataSource is a component that converts
 * the HotShot Query Service into a
 * TransactionDetailAsyncRetriever.
 */
export const ProvideTransactionDetailDataSource: React.FC<
  ProvideTransactionDetailDataSourceProps
> = (props) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  return (
    <TransactionDetailAsyncRetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key) {
          const { height, offset } = key;

          const request = ExplorerGetTransactionDetailRequest.heightAndOffset(
            height,
            offset,
          );

          const detailResponse =
            await hotShotQueryService.explorer.getTransactionDetail(request);

          const { transactionDetail } = detailResponse;
          return {
            block: transactionDetail.details.height,
            index: transactionDetail.details.offset,
            total: transactionDetail.details.numTransactions,
            size: transactionDetail.details.size,
            hash: transactionDetail.details.hash,
            time: transactionDetail.details.time,
            sender: new TaggedBase64('', new ArrayBuffer(0)),

            tree: {
              namespace: transactionDetail.data[0].namespace,
              data: transactionDetail.data[0].payload,
            },
          };
        },
      }}
    />
  );
};

export interface ProvideTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
  transactionsPerPage?: number;
}

/**
 * ProvideRollUpDetailDataSource is a component that converts
 * the HotShot Query Service into a RollUpDetailAsyncRetriever.
 */
export const ProvideRollUpDetailDataSource: React.FC<
  ProvideTransactionsSummaryDataSourceProps
> = ({
  children,
  transactionsPerPage: defaultTransactionsPerPage = 20,
  ...rest
}) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  return (
    <RollUpDetailAsyncRetrieverContext.Provider
      {...rest}
      value={{
        async retrieve(key) {
          const {
            namespace,
            height = null,
            offset = null,
            transactionsPerPage = defaultTransactionsPerPage,
          } = key;

          let request: ExplorerGetTransactionSummariesRequest;
          if (height === null || offset === null) {
            request = new ExplorerGetTransactionSummariesRequest(
              ExplorerGetTransactionSummariesTarget.latest(transactionsPerPage),
              ExplorerGetTransactionSummariesFilter.namespace(namespace),
            );
          } else {
            request = new ExplorerGetTransactionSummariesRequest(
              ExplorerGetTransactionSummariesTarget.heightAndOffset(
                height,
                offset,
                transactionsPerPage,
              ),
              ExplorerGetTransactionSummariesFilter.namespace(namespace),
            );
          }

          const summariesResponse =
            await hotShotQueryService.explorer.getTransactionSummaries(request);
          const { transactionSummaries } = summariesResponse;

          return transactionSummaries.map((summary) => ({
            hash: summary.hash,
            namespaces: summary.rollups,
            block: summary.height,
            offset: summary.offset,
            time: summary.time,
          }));
        },
      }}
    >
      {children}
    </RollUpDetailAsyncRetrieverContext.Provider>
  );
};

export interface ProvideTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

export const kNumberOfSampleBlocks = 30;

/**
 * ProvideRollUpsSummaryDataSource is a component that converts
 * the HotShot Query Service into a RollUpSummaryAsyncRetriever.
 */
export const ProvideRollUpsSummaryDataSource: React.FC<
  ProvideTransactionsSummaryDataSourceProps
> = (props) => {
  return (
    <RollUpSummaryAsyncRetrieverContext.Provider
      {...props}
      value={{
        async retrieve() {
          // TODO: add the implementation for this when the Explorer API
          //       supports it.
          return [];
        },
      }}
    />
  );
};

interface ProvideLatestBlockDetailsProps {}

export const ProvideLatestBlockDetails: React.FC<
  ProvideLatestBlockDetailsProps
> = (props) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  return (
    <LatestBlockSummaryLoaderContext.Provider
      {...props}
      value={{
        async retrieve() {
          const summaryResponse =
            await hotShotQueryService.explorer.getExplorerOverview();
          const latestBlock = summaryResponse.explorerSummary.latestBlock;

          return {
            height: latestBlock.height,
            proposer: latestBlock.proposerID,
            transactions: latestBlock.numTransactions,
            size: latestBlock.size,
            time: latestBlock.time,
          };
        },
      }}
    />
  );
};

export function transformExplorerSummaryResponse(
  summaryResponse: ExplorerGetExplorerSummaryResponse,
): ExplorerSummaryEntry {
  const { explorerSummary } = summaryResponse;

  const {
    latestBlock,
    latestTransactions,
    latestBlocks,
    genesisOverview,
    histograms,
  } = explorerSummary;

  return {
    latestBlock: {
      hash: latestBlock.hash,
      height: latestBlock.height,
      time: latestBlock.time,
      transactions: latestBlock.numTransactions,
      proposer: latestBlock.proposerID,
      recipient: latestBlock.feeRecipient,
      size: latestBlock.size,
      rewards: latestBlock.blockReward,
    },
    genesisOverview: {
      rollups: genesisOverview.rollups,
      transactions: genesisOverview.transactions,
      blocks: genesisOverview.blocks,
    },
    latestBlocks: latestBlocks.map(
      (block): BlockSummaryEntry => ({
        height: block.height,
        time: block.time,
        transactions: block.numTransactions,
        size: block.size,
        proposer: block.proposerID,
      }),
    ),
    latestTransactions: latestTransactions.map(
      (transaction): TransactionSummaryEntry => ({
        hash: transaction.hash,
        block: transaction.height,
        time: transaction.time,
        offset: transaction.offset,
        namespaces: transaction.rollups,
      }),
    ),
    histograms: {
      blockTime: histograms.blockTime,
      blockSize: histograms.blockSize,
      blockTransactions: histograms.blockTransactions,
      blockThroughput: [],
      blocks: histograms.blockHeights,
    },
  } satisfies ExplorerSummaryEntry;
}

export interface ProvideExplorerSummaryAsyncStreamProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ProvideExplorerSummaryAsyncStream: React.FC<
  ProvideExplorerSummaryAsyncStreamProps
> = ({ children }) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  // Create a timer to refresh every two seconds.
  const timer = timerAsyncIterable(2000, true);
  const explorerSummaryStream = mapAsyncIterable(timer, async () => {
    const summaryResponse =
      await hotShotQueryService.explorer.getExplorerOverview();

    return transformExplorerSummaryResponse(summaryResponse);
  });

  return (
    <AsyncIterableResolver asyncIterable={explorerSummaryStream}>
      <ErrorJoiner>{children}</ErrorJoiner>
    </AsyncIterableResolver>
  );
};

interface ProvideExplorerSummaryProps {}

export const ProvideExplorerSummary: React.FC<ProvideExplorerSummaryProps> = (
  props,
) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  return (
    <ExplorerSummaryLoaderContext.Provider
      {...props}
      value={{
        async retrieve() {
          const summaryResponse =
            await hotShotQueryService.explorer.getExplorerOverview();
          return transformExplorerSummaryResponse(summaryResponse);
        },
      }}
    />
  );
};
