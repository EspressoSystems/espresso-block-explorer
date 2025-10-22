import { EnvironmentContext } from '@/components/config/environment';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  ExplorerSummaryAsyncRetriever,
  ExplorerSummaryEntry,
} from '@/models/block_explorer/explorer_summary';
import { Environment } from '@/models/config/environment/environment';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import React from 'react';
import {
  BlockSizeHistogramAsyncRetrieverContext,
  BlockSizeHistogramData,
} from '../block_size_histogram/BlockSizeHistogramDataLoader';
import { BlockSummaryAsyncRetrieverContext } from '../block_summary_data_table/BlockSummaryDataLoader';
import {
  BlockThroughputHistogramAsyncRetrieverContext,
  BlockThroughputHistogramData,
} from '../block_throughput_histogram/BlockThroughputHistogramDataLoader';
import {
  BlockTimeHistogramAsyncRetrieverContext,
  BlockTimeHistogramData,
} from '../block_time_histogram/BlockTimeHistogramDataLoader';
import {
  ExplorerOverview,
  ExplorerOverviewLoaderContext,
} from '../explorer_overview/ExplorerOverviewLoader';
import { LatestBlockSummaryLoaderContext } from '../latest_block_summary/LatestBlockSummaryLoader';
import { RollUpSummaryAsyncRetrieverContext } from '../rollups_summary_data_table/RollUpsSummaryLoader';
import { TransactionSummaryAsyncRetrieverContext } from '../transaction_summary_data_table/TransactionSummaryDataLoader';

export const ExplorerSummaryLoaderContext =
  React.createContext<ExplorerSummaryAsyncRetriever>({
    retrieve() {
      throw new UnimplementedError();
    },
  });

export const ExplorerSummaryProvider =
  React.createContext<ExplorerSummaryEntry>({
    latestBlock: {
      hash: new TaggedBase64('', new ArrayBuffer(0)),
      height: 0,
      time: new Date(0),
      transactions: 0,
      proposer: [],
      recipient: [],
      size: 0,
      rewards: [],
    },
    genesisOverview: {
      rollups: 0,
      transactions: 0,
      blocks: 0,
    },
    latestBlocks: [],
    latestTransactions: [],
    histograms: {
      blockTime: [],
      blockSize: [],
      blockTransactions: [],
      blockThroughput: [],
      blocks: [],
    },
  });

interface ExplorerSummaryLoaderProps {
  children: React.ReactNode | React.ReactNode[];
}

class SingleRetriever<V> {
  private promise: Promise<V>;

  constructor(promise: Promise<V>) {
    this.promise = promise;
  }

  retrieve(): Promise<V> {
    return this.promise;
  }
}

/**
 * We don't have a way of retrieving the number of Validator Nodes currently
 * deployed in our network, so we will just use the environment to provide
 * known defaults until we are able to retrieve this data.
 */
function sequencerNodeCountFromEnvironment(environment: Environment): number {
  switch (environment) {
    case Environment.mainnet:
    /* Falls Through */
    case Environment.decaf:
      return 100;

    case Environment.fakeData:
      return 1234;

    default:
      return 4;
  }
}

export const ExplorerSummaryLoader: React.FC<ExplorerSummaryLoaderProps> = (
  props,
) => {
  const environment = React.useContext(EnvironmentContext);
  const retriever = React.useContext(ExplorerSummaryLoaderContext);
  const summaryPromise = retriever.retrieve();

  // We need to need to provide the summary parts to the children widgets.

  return (
    // Provide Latest Block Summary Loader Context
    <LatestBlockSummaryLoaderContext.Provider
      value={
        new SingleRetriever(
          summaryPromise.then(({ latestBlock }) => latestBlock),
        )
      }
    >
      {/* Provide the Latest Blocks as a retriever */}
      <BlockSummaryAsyncRetrieverContext.Provider
        value={
          new SingleRetriever(
            summaryPromise.then(({ latestBlocks }) => latestBlocks),
          )
        }
      >
        {/* Provide the Latest Transactions as a retriever */}
        <TransactionSummaryAsyncRetrieverContext.Provider
          value={
            new SingleRetriever(
              summaryPromise.then(
                ({ latestTransactions }) => latestTransactions,
              ),
            )
          }
        >
          {/* Provide the Explorer Overview Section (Genesis Summary) */}
          <ExplorerOverviewLoaderContext.Provider
            value={
              new SingleRetriever(
                summaryPromise.then(
                  ({ genesisOverview }) =>
                    ({
                      ...genesisOverview,
                      sequencerNodes:
                        genesisOverview.sequencerNodes ??
                        sequencerNodeCountFromEnvironment(environment),
                    }) satisfies ExplorerOverview,
                ),
              )
            }
          >
            {/* Provide Rollup Summary Data  */}
            <RollUpSummaryAsyncRetrieverContext.Provider
              value={new SingleRetriever(Promise.resolve([]))}
            >
              {/* Provide Block Time Histogram Data */}
              <BlockTimeHistogramAsyncRetrieverContext.Provider
                value={
                  new SingleRetriever(
                    summaryPromise.then(
                      ({ histograms }) =>
                        histograms satisfies BlockTimeHistogramData,
                    ),
                  )
                }
              >
                <BlockSizeHistogramAsyncRetrieverContext.Provider
                  value={
                    new SingleRetriever(
                      summaryPromise.then(
                        ({ histograms }) =>
                          histograms satisfies BlockSizeHistogramData,
                      ),
                    )
                  }
                >
                  <BlockThroughputHistogramAsyncRetrieverContext.Provider
                    value={
                      new SingleRetriever(
                        summaryPromise.then(
                          ({ histograms }) =>
                            ({
                              blocks: histograms.blocks,
                              blockThroughput: histograms.blockSize.map(
                                (value, i) =>
                                  value === null ||
                                  histograms.blockTime[i] === null
                                    ? null
                                    : value /
                                      Math.max(1, histograms.blockTime[i]!),
                              ),
                            }) as BlockThroughputHistogramData,
                        ),
                      )
                    }
                  >
                    {props.children}
                  </BlockThroughputHistogramAsyncRetrieverContext.Provider>
                </BlockSizeHistogramAsyncRetrieverContext.Provider>
              </BlockTimeHistogramAsyncRetrieverContext.Provider>
            </RollUpSummaryAsyncRetrieverContext.Provider>
          </ExplorerOverviewLoaderContext.Provider>
        </TransactionSummaryAsyncRetrieverContext.Provider>
      </BlockSummaryAsyncRetrieverContext.Provider>
    </LatestBlockSummaryLoaderContext.Provider>
  );
};
