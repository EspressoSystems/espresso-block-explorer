import { EnvironmentContext } from '@/components/config/environment';
import { DataContext, ErrorContext } from '@/components/contexts';
import UnimplementedError from '@/errors/unimplemented_error';
import {
  ExplorerSummaryAsyncRetriever,
  ExplorerSummaryEntry,
} from '@/models/block_explorer/explorer_summary';
import { Environment } from '@/models/config/environment/environment';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import React from 'react';

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
  // const retriever = React.useContext(ExplorerSummaryLoaderContext);
  // const summaryPromise = retriever.retrieve();

  const error = React.useContext(ErrorContext);
  const data = React.useContext(DataContext) as null | ExplorerSummaryEntry;

  if (error) {
    // TODO: Handle the error state appropriately.
  }

  if (data) {
    const transformed = {
      ...data,
      genesisOverview: {
        ...data.genesisOverview,
        sequencerNodes:
          data.genesisOverview.sequencerNodes ??
          sequencerNodeCountFromEnvironment(environment),
      },
      histograms: {
        ...data.histograms,
        blockThroughput: data.histograms.blockSize.map((value, i) =>
          value === null || data.histograms.blockTime[i] === null
            ? null
            : value / Math.max(1, data.histograms.blockTime[i]!),
        ),
      },
    };

    return (
      <ExplorerSummaryProvider.Provider value={transformed}>
        {props.children}
      </ExplorerSummaryProvider.Provider>
    );
  }

  return props.children;
};
