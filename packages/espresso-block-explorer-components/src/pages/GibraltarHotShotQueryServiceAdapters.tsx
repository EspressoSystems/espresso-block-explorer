import React from 'react';
import { BlockDetailAsyncRetrieverContext } from '../components/page_sections/block_detail_content/BlockDetailContentLoader';
import { BlockSummaryAsyncRetrieverContext } from '../components/page_sections/block_summary_data_table/BlockSummaryDataLoader';
import { ExplorerOverviewLoaderContext } from '../components/page_sections/explorer_overview/ExplorerOverviewLoader';
import { LatestBlockSummaryLoaderContext } from '../components/page_sections/latest_block_summary/LatestBlockSummaryLoader';
import { RollUpDetailAsyncRetrieverContext } from '../components/page_sections/rollup_detail_data_table/RollUpDetailLoader';
import { RollUpSummaryAsyncRetrieverContext } from '../components/page_sections/rollups_summary_data_table/RollUpsSummaryLoader';
import { TransactionDetailAsyncRetrieverContext } from '../components/page_sections/transaction_detail_content/TransactionDetailLoader';
import { TransactionSummaryAsyncRetrieverContext } from '../components/page_sections/transaction_summary_data_table/TransactionSummaryDataLoader';
import { foldRIterator, mapIterable } from '../functional/functional';
import {
  collectAsyncIterator,
  dropAsyncIterator,
  foldRAsyncIterator,
  iotaAsync,
  mapAsyncIterator,
  takeAsyncIterator,
} from '../functional/functional_async';
import { BlockSummaryEntry } from '../models/block_explorer/block_summary';
import MonetaryValue from '../models/block_explorer/monetary_value';
import { TaggedBase64 } from '../models/espresso/tagged_base64/TaggedBase64';
import { GibraltarHotShotQueryServiceAPIContext } from './GibraltarHotShotQueryServiceAPIContext';

// We need to create adapters between the HotShotQueryService and the
// components that ultimately wish to consume them.

export interface ProvideGibraltarBlockDetailDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideGibraltarBlockDetailDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a BlockDetailAsyncRetriever.
 */
export const ProvideGibraltarBlockDetailDataSource: React.FC<
  ProvideGibraltarBlockDetailDataSourceProps
> = (props) => {
  const hotShotQueryService = React.useContext(
    GibraltarHotShotQueryServiceAPIContext,
  );

  return (
    <BlockDetailAsyncRetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key) {
          const [block, leaf] = await Promise.all([
            hotShotQueryService.availability.getBlockFromHeight(key),
            hotShotQueryService.availability.getLeafFromHeight(key),
          ]);

          return {
            hash: new TaggedBase64('', new ArrayBuffer(0)),
            height: block.header.height,
            proposer: leaf.leaf.proposer_id.data,
            recipient: leaf.leaf.proposer_id.data,
            transactions: block.payload.transaction_nmt.length,
            size: block.size,
            time: new Date(block.header.timestamp * 1000),
            rewards: [] as MonetaryValue[],
          };
        },
      }}
    />
  );
};

export interface ProvideGibraltarBlocksSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
  blocksPerPage?: number;
}

/**
 * ProvideGibraltarBlocksSummaryDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a BlockSummaryAsyncRetriever.
 */
export const ProvideGibraltarBlocksSummaryDataSource: React.FC<
  ProvideGibraltarBlocksSummaryDataSourceProps
> = ({ children, blocksPerPage: defaultBlocksPerPage = 20, ...rest }) => {
  const hotShotQueryService = React.useContext(
    GibraltarHotShotQueryServiceAPIContext,
  );

  return (
    <BlockSummaryAsyncRetrieverContext.Provider
      {...rest}
      value={{
        async retrieve(key) {
          const {
            blocksPerPage = defaultBlocksPerPage,
            startAtBlock = await hotShotQueryService.status.blockHeight(),
          } = key;

          const blocks =
            await hotShotQueryService.availability.getBlockSummaries(
              Math.max(0, startAtBlock + 1 - blocksPerPage),
              startAtBlock + 1,
            );

          return blocks
            .map((block): BlockSummaryEntry => {
              return {
                height: block.header.height,
                proposer: block.proposer_id.data,
                transactions: block.num_transactions,
                size: block.size,
                time: new Date(block.header.timestamp * 1000),
              };
            })
            .reverse();
        },
      }}
    >
      {children}
    </BlockSummaryAsyncRetrieverContext.Provider>
  );
};

export interface ProvideGibraltarTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
  transactionsPerPage?: number;
}

/**
 * ProvideGibraltarTransactionsSummaryDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a
 * TransactionSummaryAsyncRetriever.
 */
export const ProvideGibraltarTransactionsSummaryDataSource: React.FC<
  ProvideGibraltarTransactionsSummaryDataSourceProps
> = ({
  children,
  transactionsPerPage: defaultTransactionsPerPage = 20,
  ...rest
}) => {
  const hotShotQueryService = React.useContext(
    GibraltarHotShotQueryServiceAPIContext,
  );

  return (
    <TransactionSummaryAsyncRetrieverContext.Provider
      {...rest}
      value={{
        async retrieve(key) {
          const {
            startAtBlock = (await hotShotQueryService.status.blockHeight()) - 1,
            offset = 0,
            transactionsPerPage = defaultTransactionsPerPage,
          } = key;

          const transactions =
            await hotShotQueryService.availability.getTransactionSummaryRange(
              startAtBlock,
              offset,
              transactionsPerPage,
            );

          return transactions.map((txn) => {
            return {
              hash: txn.hash,
              block: txn.header.height,
              offset: txn.offset,
              namespaces: [txn.transaction.vm],
              time: new Date(txn.header.timestamp * 1000),
            };
          });
        },
      }}
    >
      {children}
    </TransactionSummaryAsyncRetrieverContext.Provider>
  );
};

export const ProvideGibraltarTransactionsForBlockSummaryDataSource: React.FC<
  ProvideGibraltarTransactionsSummaryDataSourceProps
> = ({
  children,
  transactionsPerPage: defaultTransactionsPerPage = 20,
  ...rest
}) => {
  const hotShotQueryService = React.useContext(
    GibraltarHotShotQueryServiceAPIContext,
  );

  return (
    <TransactionSummaryAsyncRetrieverContext.Provider
      {...rest}
      value={{
        async retrieve(key) {
          const {
            startAtBlock = (await hotShotQueryService.status.blockHeight()) - 1,
            offset = 0,
            transactionsPerPage = defaultTransactionsPerPage,
          } = key;

          const block =
            await hotShotQueryService.availability.getBlockFromHeight(
              startAtBlock,
            );

          const step1 = iotaAsync(block.payload.transaction_nmt.length);
          const step2 = mapAsyncIterator(step1, async (index) => {
            const txn =
              await hotShotQueryService.availability.getTransactionFromHeightAndOffset(
                block.header.height,
                index,
              );

            return {
              hash: txn.hash,
              block: block.header.height,
              offset: index,
              namespaces: [txn.transaction.vm],
              time: new Date(block.header.timestamp * 1000),
            };
          });
          const step3 = dropAsyncIterator(step2, offset);
          const step4 = takeAsyncIterator(step3, transactionsPerPage);

          return await collectAsyncIterator(step4);
        },
      }}
    >
      {children}
    </TransactionSummaryAsyncRetrieverContext.Provider>
  );
};

export interface ProvideGibraltarTransactionDetailDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideGibraltarTransactionDetailDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a
 * TransactionDetailAsyncRetriever.
 */
export const ProvideGibraltarTransactionDetailDataSource: React.FC<
  ProvideGibraltarTransactionDetailDataSourceProps
> = (props) => {
  const hotShotQueryService = React.useContext(
    GibraltarHotShotQueryServiceAPIContext,
  );

  return (
    <TransactionDetailAsyncRetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key) {
          const [leaf, block, txn] = await Promise.all([
            hotShotQueryService.availability.getLeafFromHeight(key.height),
            hotShotQueryService.availability.getBlockFromHeight(key.height),

            hotShotQueryService.availability.getTransactionFromHeightAndOffset(
              key.height,
              key.offset,
            ),
          ]);

          return {
            block: block.header.height,
            index: key.offset,
            total: block.payload.transaction_nmt.length,
            size: block.size,
            hash: txn.hash,
            time: new Date(block.header.timestamp * 1000),
            sender: leaf.leaf.proposer_id,
            tree: {
              namespace: txn.transaction.vm,
              data: new Uint8Array(txn.transaction.payload).buffer,
            },
          };
        },
      }}
    />
  );
};

export interface ProvideGibraltarTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
  transactionsPerPage?: number;
}

/**
 * ProvideGibraltarRollUpDetailDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a RollUpDetailAsyncRetriever.
 */
export const ProvideGibraltarRollUpDetailDataSource: React.FC<
  ProvideGibraltarTransactionsSummaryDataSourceProps
> = ({
  children,
  transactionsPerPage: defaultTransactionsPerPage = 20,
  ...rest
}) => {
  const hotShotQueryService = React.useContext(
    GibraltarHotShotQueryServiceAPIContext,
  );

  return (
    <RollUpDetailAsyncRetrieverContext.Provider
      {...rest}
      value={{
        async retrieve(key) {
          const {
            height = (await hotShotQueryService.status.blockHeight()) - 1,
            offset = 0,
            namespace,
            transactionsPerPage = defaultTransactionsPerPage,
          } = key;
          const transactions =
            await hotShotQueryService.availability.getTransactionSummaryRangeForRollup(
              namespace,
              height,
              offset,
              transactionsPerPage,
            );

          return transactions.map((txn) => ({
            hash: txn.hash,
            block: txn.header.height,
            offset: txn.offset,
            namespaces: [txn.transaction.vm],
            time: new Date(txn.header.timestamp * 1000),
          }));
        },
      }}
    >
      {children}
    </RollUpDetailAsyncRetrieverContext.Provider>
  );
};

export interface ProvideGibraltarTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

export const kNumberOfSampleBlocks = 30;

/**
 * ProvideGibraltarRollUpsSummaryDataSource is a component that converts
 * the HotShot Query Service for Gibraltar into a RollUpSummaryAsyncRetriever.
 */
export const ProvideGibraltarRollUpsSummaryDataSource: React.FC<
  ProvideGibraltarTransactionsSummaryDataSourceProps
> = (props) => {
  const hotShotQueryService = React.useContext(
    GibraltarHotShotQueryServiceAPIContext,
  );

  return (
    <RollUpSummaryAsyncRetrieverContext.Provider
      {...props}
      value={{
        async retrieve() {
          const latestBlock =
            (await hotShotQueryService.status.blockHeight()) - 1;
          const step1 = iotaAsync(kNumberOfSampleBlocks);
          const step2 = mapAsyncIterator(step1, (i) =>
            Promise.resolve(latestBlock - i),
          );
          const step3 = mapAsyncIterator(step2, (i) =>
            hotShotQueryService.availability.getBlockFromHeight(i),
          );
          const result = await foldRAsyncIterator(
            async (acc, next) => {
              for (const txn of next.payload.transaction_nmt) {
                const value = acc.get(txn.vm) ?? 0;
                acc.set(txn.vm, value + 1);
              }

              return acc;
            },
            Promise.resolve(new Map<number, number>()),
            step3,
          );

          return Array.from(
            mapIterable(result.entries(), ([namespace, transactions]) => ({
              namespace,
              transactions,
            })),
          );
        },
      }}
    />
  );
};

interface ProvideGibraltarLatestBlockDetailsProps {}

export const ProvideGibraltarLatestBlockDetails: React.FC<
  ProvideGibraltarLatestBlockDetailsProps
> = (props) => {
  const hotShotQueryService = React.useContext(
    GibraltarHotShotQueryServiceAPIContext,
  );

  return (
    <LatestBlockSummaryLoaderContext.Provider
      {...props}
      value={{
        async retrieve() {
          const latestBlockHeight =
            (await hotShotQueryService.status.blockHeight()) - 1;
          const [latestBlock, latestLeaf] = await Promise.all([
            hotShotQueryService.availability.getBlockFromHeight(
              latestBlockHeight,
            ),
            hotShotQueryService.availability.getLeafFromHeight(
              latestBlockHeight,
            ),
          ] as const);

          return {
            height: latestBlock.header.height,
            time: new Date(latestBlock.header.timestamp * 1000),
            size: latestBlock.size,
            transactions: latestBlock.payload.transaction_nmt.length,
            proposer: latestLeaf.leaf.proposer_id.data,
          };
        },
      }}
    />
  );
};

interface ProvideGibraltarExplorerOverviewProps {}

export const ProvideGibraltarExplorerOverview: React.FC<
  ProvideGibraltarExplorerOverviewProps
> = (props) => {
  const hotShotQueryService = React.useContext(
    GibraltarHotShotQueryServiceAPIContext,
  );

  return (
    <ExplorerOverviewLoaderContext.Provider
      {...props}
      value={{
        async retrieve() {
          const latestBlockHeight =
            (await hotShotQueryService.status.blockHeight()) - 1;
          const blocks = latestBlockHeight;

          const step1 = iotaAsync(latestBlockHeight);
          const step2 = mapAsyncIterator(step1, (i) =>
            hotShotQueryService.availability.getBlockFromHeight(i),
          );
          const result = await foldRAsyncIterator(
            async (acc, next) => {
              const transactionNMT = next.payload.transaction_nmt;
              transactionNMT.forEach((payload) => {
                const namespace = payload.vm;
                const previous = acc.get(namespace) ?? 0;
                acc.set(namespace, previous + 1);
              });

              return acc;
            },
            Promise.resolve(new Map<number, number>()),
            step2,
          );

          const rollups = result.size;
          const transactions = foldRIterator(
            (acc, next) => acc + next,
            0,
            result.values(),
          );

          return {
            rollups,
            transactions,
            blocks,
            sequencerNodes: 0,
          };
        },
      }}
    />
  );
};
