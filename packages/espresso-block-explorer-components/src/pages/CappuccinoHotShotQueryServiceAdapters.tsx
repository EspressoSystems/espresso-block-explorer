import { BlockDetailAsyncRetrieverContext } from '@/components/page_sections/block_detail_content/BlockDetailContentLoader';
import { BlockSummaryAsyncRetrieverContext } from '@/components/page_sections/block_summary_data_table/BlockSummaryDataLoader';
import { ExplorerSummaryLoaderContext } from '@/components/page_sections/explorer_summary/ExplorerSummaryLoader';
import { LatestBlockSummaryLoaderContext } from '@/components/page_sections/latest_block_summary/LatestBlockSummaryLoader';
import { RollUpDetailAsyncRetrieverContext } from '@/components/page_sections/rollup_detail_data_table/RollUpDetailLoader';
import { RollUpSummaryAsyncRetrieverContext } from '@/components/page_sections/rollups_summary_data_table/RollUpsSummaryLoader';
import { TransactionDetailAsyncRetrieverContext } from '@/components/page_sections/transaction_detail_content/TransactionDetailLoader';
import { TransactionSummaryAsyncRetrieverContext } from '@/components/page_sections/transaction_summary_data_table/TransactionSummaryDataLoader';
import { BlockSummaryEntry } from '@/models/block_explorer/block_summary';
import { ExplorerSummaryEntry } from '@/models/block_explorer/explorer_summary';
import { TransactionSummaryEntry } from '@/models/block_explorer/transaction_summary';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoExplorerGetBlockDetailRequest } from '@/service/hotshot_query_service/cappuccino/explorer/get_block_detail_request';
import { CappuccinoExplorerGetBlockSummariesRequest } from '@/service/hotshot_query_service/cappuccino/explorer/get_block_summaries_request';
import { CappuccinoExplorerGetTransactionDetailRequest } from '@/service/hotshot_query_service/cappuccino/explorer/get_transaction_detail_request';
import { CappuccinoExplorerGetTransactionSummariesFilter } from '@/service/hotshot_query_service/cappuccino/explorer/get_transaction_summaries_filter';
import { CappuccinoExplorerGetTransactionSummariesRequest } from '@/service/hotshot_query_service/cappuccino/explorer/get_transaction_summaries_request';
import { CappuccinoExplorerGetTransactionSummariesTarget } from '@/service/hotshot_query_service/cappuccino/explorer/get_transaction_summaries_target';
import React from 'react';
import { CappuccinoHotShotQueryServiceAPIContext } from './CappuccinoHotShotQueryServiceAPIContext';

// We need to create adapters between the HotShotQueryService and the
// components that ultimately wish to consume them.

export interface ProvideCappuccinoBlockDetailDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideCappuccinoBlockDetailDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a BlockDetailAsyncRetriever.
 */
export const ProvideCappuccinoBlockDetailDataSource: React.FC<
  ProvideCappuccinoBlockDetailDataSourceProps
> = (props) => {
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

  return (
    <BlockDetailAsyncRetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key: number) {
          const { blockDetail: block } =
            await hotShotQueryService.explorer.getBlockDetail(
              CappuccinoExplorerGetBlockDetailRequest.height(key),
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

export interface ProvideCappuccinoBlocksSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
  blocksPerPage?: number;
}

/**
 * ProvideCappuccinoBlocksSummaryDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a BlockSummaryAsyncRetriever.
 */
export const ProvideCappuccinoBlocksSummaryDataSource: React.FC<
  ProvideCappuccinoBlocksSummaryDataSourceProps
> = ({ children, blocksPerPage: defaultBlocksPerPage = 20, ...rest }) => {
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

  return (
    <BlockSummaryAsyncRetrieverContext.Provider
      {...rest}
      value={{
        async retrieve(key) {
          const { blocksPerPage = defaultBlocksPerPage, startAtBlock = null } =
            key;

          const request =
            startAtBlock === null
              ? CappuccinoExplorerGetBlockSummariesRequest.latest(blocksPerPage)
              : CappuccinoExplorerGetBlockSummariesRequest.from(
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

export interface ProvideCappuccinoTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
  transactionsPerPage?: number;
}

/**
 * ProvideCappuccinoTransactionsSummaryDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a
 * TransactionSummaryAsyncRetriever.
 */
export const ProvideCappuccinoTransactionsSummaryDataSource: React.FC<
  ProvideCappuccinoTransactionsSummaryDataSourceProps
> = ({
  children,
  transactionsPerPage: defaultTransactionsPerPage = 20,
  ...rest
}) => {
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

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

          let request: CappuccinoExplorerGetTransactionSummariesRequest;
          if (startAtBlock === null || offset === null) {
            request = new CappuccinoExplorerGetTransactionSummariesRequest(
              CappuccinoExplorerGetTransactionSummariesTarget.latest(
                transactionsPerPage,
              ),
              CappuccinoExplorerGetTransactionSummariesFilter.none(),
            );
          } else {
            request = new CappuccinoExplorerGetTransactionSummariesRequest(
              CappuccinoExplorerGetTransactionSummariesTarget.heightAndOffset(
                startAtBlock,
                offset,
                transactionsPerPage,
              ),
              CappuccinoExplorerGetTransactionSummariesFilter.none(),
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

export const ProvideCappuccinoTransactionsForBlockSummaryDataSource: React.FC<
  ProvideCappuccinoTransactionsSummaryDataSourceProps
> = ({
  children,
  transactionsPerPage: defaultTransactionsPerPage = 20,
  ...rest
}) => {
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

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

          let request: CappuccinoExplorerGetTransactionSummariesRequest;
          if (startAtBlock === null || offset === null) {
            request = new CappuccinoExplorerGetTransactionSummariesRequest(
              CappuccinoExplorerGetTransactionSummariesTarget.latest(
                transactionsPerPage,
              ),
              CappuccinoExplorerGetTransactionSummariesFilter.block(
                startAtBlock,
              ),
            );
          } else {
            request = new CappuccinoExplorerGetTransactionSummariesRequest(
              CappuccinoExplorerGetTransactionSummariesTarget.heightAndOffset(
                startAtBlock,
                offset,
                transactionsPerPage,
              ),
              CappuccinoExplorerGetTransactionSummariesFilter.block(
                startAtBlock,
              ),
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

export interface ProvideCappuccinoTransactionDetailDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideCappuccinoTransactionDetailDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a
 * TransactionDetailAsyncRetriever.
 */
export const ProvideCappuccinoTransactionDetailDataSource: React.FC<
  ProvideCappuccinoTransactionDetailDataSourceProps
> = (props) => {
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

  return (
    <TransactionDetailAsyncRetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key) {
          const { height, offset } = key;

          const request =
            CappuccinoExplorerGetTransactionDetailRequest.heightAndOffset(
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

export interface ProvideCappuccinoTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
  transactionsPerPage?: number;
}

/**
 * ProvideCappuccinoRollUpDetailDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a RollUpDetailAsyncRetriever.
 */
export const ProvideCappuccinoRollUpDetailDataSource: React.FC<
  ProvideCappuccinoTransactionsSummaryDataSourceProps
> = ({
  children,
  transactionsPerPage: defaultTransactionsPerPage = 20,
  ...rest
}) => {
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

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

          let request: CappuccinoExplorerGetTransactionSummariesRequest;
          if (height === null || offset === null) {
            request = new CappuccinoExplorerGetTransactionSummariesRequest(
              CappuccinoExplorerGetTransactionSummariesTarget.latest(
                transactionsPerPage,
              ),
              CappuccinoExplorerGetTransactionSummariesFilter.namespace(
                namespace,
              ),
            );
          } else {
            request = new CappuccinoExplorerGetTransactionSummariesRequest(
              CappuccinoExplorerGetTransactionSummariesTarget.heightAndOffset(
                height,
                offset,
                transactionsPerPage,
              ),
              CappuccinoExplorerGetTransactionSummariesFilter.namespace(
                namespace,
              ),
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

export interface ProvideCappuccinoTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

export const kNumberOfSampleBlocks = 30;

/**
 * ProvideCappuccinoRollUpsSummaryDataSource is a component that converts
 * the HotShot Query Service for Cappuccino into a RollUpSummaryAsyncRetriever.
 */
export const ProvideCappuccinoRollUpsSummaryDataSource: React.FC<
  ProvideCappuccinoTransactionsSummaryDataSourceProps
> = (props) => {
  // const hotShotQueryService = React.useContext(
  //   CappuccinoHotShotQueryServiceAPIContext,
  // );

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

interface ProvideCappuccinoLatestBlockDetailsProps {}

export const ProvideCappuccinoLatestBlockDetails: React.FC<
  ProvideCappuccinoLatestBlockDetailsProps
> = (props) => {
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

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

interface ProvideCappuccinoExplorerSummaryProps {}

export const ProvideCappuccinoExplorerSummary: React.FC<
  ProvideCappuccinoExplorerSummaryProps
> = (props) => {
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

  return (
    <ExplorerSummaryLoaderContext.Provider
      {...props}
      value={{
        async retrieve() {
          const summaryResponse =
            await hotShotQueryService.explorer.getExplorerOverview();

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
        },
      }}
    />
  );
};
