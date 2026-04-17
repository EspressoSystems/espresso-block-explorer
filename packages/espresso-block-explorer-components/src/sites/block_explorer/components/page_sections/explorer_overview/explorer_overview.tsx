import { sleep } from '@/async/sleep';
import { CardNoPadding } from '@/block_explorer/components/layout/card/card';
import { default as SummaryTableLabeledValue } from '@/block_explorer/components/layout/summary_table_labeled_value/summary_table_labeled_value';
import { default as SummaryValueLabeled } from '@/block_explorer/components/layout/summary_value_labeled/summary_value_labeled';
import { EnvironmentContext } from '@/components/config/environment';
import AsyncIterableResolver from '@/components/data/async_data/async_iterable_resolver';
import { SkeletonContent } from '@/components/loading';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { NumberText, Text } from '@/components/text';
import { DataContext } from '@/contexts/data_provider';
import { ErrorContext } from '@/contexts/error_provider';
import {
  ExplorerGenesisOverviewContext,
  ExplorerSummaryContext,
} from '@/contexts/explorer_api_contexts';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { LoadingContext } from '@/contexts/loading_provider';
import {
  curatedDecafList,
  curatedMainnetList,
} from '@/models/block_explorer/rollup_entry/data';
import { Environment } from '@/models/config/environment/environment';
import { ExplorerSummary } from '@/service/hotshot_query_service/explorer/explorer_summary';
import { HotShotQueryService } from '@/service/hotshot_query_service/hot_shot_query_service_api';
import { default as React } from 'react';
import './explorer_overview.css';

/**
 * ExplorerOverviewHeading is a component that lists the overview of the
 * Block Explorer.
 */
export const ExplorerOverviewHeading: React.FC = () => {
  return (
    <SummaryValueLabeled className="card--padding">
      <Text text="Overview" />
      <Text text="Since Genesis" />
    </SummaryValueLabeled>
  );
};

/**
 * ExplorerOverviewLayoutProps is a type that specifies the shape of the
 * Explorer Overview's Layout, to separate the layout from the contents,
 * while preserving the shape.
 */
interface ExplorerOverviewLayoutProps {
  children: [
    React.ReactNode,
    React.ReactNode,
    React.ReactNode,
    React.ReactNode,
  ];
}

/**
 * ExplorerOverviewLayout is a component that provides the layout for the
 * Explorer Overview.  It exists so that the Layout's labels are consistent
 * through its loading and display states.
 *
 * This separation allows for consistency, and helps to reduce repetition.
 */
const ExplorerOverviewLayout: React.FC<ExplorerOverviewLayoutProps> = ({
  children,
}) => {
  const [numRollUps, numTransactions, numBlocks, numSequencerNodes] = children;

  return (
    <div className="card--padding">
      <SummaryTableLabeledValue>
        <Text text="Rollups" />
        {numRollUps}
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Transactions" />
        {numTransactions}
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Blocks" />
        {numBlocks}
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Validator nodes" />
        {numSequencerNodes}
      </SummaryTableLabeledValue>
    </div>
  );
};

/**
 * NumberOfRollups is a simple component that displays the total number of
 * rollups being utilized.
 */
const NumberOfRollups: React.FC = () => {
  const overview = React.useContext(ExplorerGenesisOverviewContext);
  const numRollups = overview?.rollups ?? 0;
  const environment = React.useContext(EnvironmentContext);
  /*
   * TODO: revert this back to `overview.rollups` when the server is able to
   * return the correct number of rollups.
   */
  switch (environment) {
    case Environment.mainnet:
      return <NumberText number={curatedMainnetList.length} />;

    case Environment.decaf:
      return <NumberText number={curatedDecafList.length} />;

    default:
      return <NumberText number={numRollups} />;
  }
};

/**
 * NumberOfTransactions is a simple component that displays the total number
 * of transactions produced.
 */
const NumberOfTransactions: React.FC = () => {
  const overview = React.useContext(ExplorerGenesisOverviewContext);
  const numTransactions = overview?.transactions ?? null;

  if (numTransactions === null) {
    return null;
  }

  return <NumberText number={numTransactions} />;
};

/**
 * NumberOfBlocks is a simple component that displays the total number of
 * blocks produced.
 */
const NumberOfBlocks: React.FC = () => {
  const overview = React.useContext(ExplorerGenesisOverviewContext);
  const numBlocks = overview?.blocks ?? null;

  if (numBlocks === null) {
    return null;
  }

  return <NumberText number={numBlocks} />;
};

const NUMBER_OF_VALIDATORS_STREAM_POLLING_INTERVAL_MS = 200; // 200ms

async function* numberOfValidatorsStream(service: HotShotQueryService) {
  let lastEpoch: null | number = null;
  let nextResult: null | number = null;
  while (true) {
    const next: [null | ExplorerSummary, null | number] = yield nextResult;
    const [nextExplorerSummary, incomingBlocksPerEpoch] = next;

    if (!nextExplorerSummary) {
      // Wait until we get the next Explorer Summary
      await sleep(NUMBER_OF_VALIDATORS_STREAM_POLLING_INTERVAL_MS);
      continue;
    }

    if (!incomingBlocksPerEpoch) {
      console.error('we do not know the blocks per epoch');
      return;
    }

    const blocksPerEpoch = incomingBlocksPerEpoch;
    const epoch = Math.floor(
      nextExplorerSummary.latestBlock.height / blocksPerEpoch,
    );

    if (lastEpoch !== null && epoch <= lastEpoch) {
      await sleep(NUMBER_OF_VALIDATORS_STREAM_POLLING_INTERVAL_MS);
      continue;
    }

    try {
      const stakeTable = await service.node.getStakeTableForEpoch(epoch);
      lastEpoch = epoch;
      nextResult = stakeTable.entries.length;
    } catch (err) {
      // We received an error of some sort
      console.error('attempt to retrieve the active stake table failed', err);
    }
  }
}

function estimateBlocksPerEpochForEnvironment(environment: Environment) {
  switch (environment) {
    case Environment.mainnet:
      return 40000;

    case Environment.decaf:
      return 3000;

    default:
      return null;
  }
}

/**
 * NumberOfValidatorNodes is a simple component that displays the total number
 * Validator Nodes currently participating in the network.
 */
const NumberOfValidatorNodes: React.FC = () => {
  const explorerOverview = React.useContext(ExplorerSummaryContext);
  const environment = React.useContext(EnvironmentContext);
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const blocksPerEpoch = estimateBlocksPerEpochForEnvironment(environment);

  const stream = React.useMemo(
    () => numberOfValidatorsStream(service),
    [service],
  );

  return (
    <AsyncIterableResolver
      asyncIterable={stream}
      next={[explorerOverview, blocksPerEpoch]}
    >
      <NumberOfValidatorsResolver />
    </AsyncIterableResolver>
  );
};

const NumberOfValidatorsResolver: React.FC = () => {
  const data = React.useContext(DataContext) as null | undefined | number;
  const loading = React.useContext(LoadingContext);

  if (loading) {
    return <SkeletonContent />;
  }

  if (data == undefined || data === null) {
    return <Text text="-" />;
  }

  return <NumberText number={data} />;
};

/**
 * ExplorerOverviewDetails is a component that displays the details of the
 * Espresso Chain in terms of statistics.
 */
export const ExplorerOverviewDetails: React.FC = () => {
  return (
    <ExplorerOverviewLayout>
      <NumberOfRollups />
      <NumberOfTransactions />
      <NumberOfBlocks />
      <NumberOfValidatorNodes />
    </ExplorerOverviewLayout>
  );
};

/**
 * ExplorerOverviewDetailsPlaceholder is a component that displays the loading
 * state of the Explorer Overview.
 */
export const ExplorerOverviewDetailsPlaceholder: React.FC = () => {
  return (
    <ExplorerOverviewLayout>
      <SkeletonContent />
      <SkeletonContent />
      <SkeletonContent />
      <SkeletonContent />
    </ExplorerOverviewLayout>
  );
};

const CardNoPaddingWithShimmer = WithLoadingShimmer(CardNoPadding);
interface ExplorerOverviewPlaceholderProps {
  className?: string;
}
export const ExplorerOverviewPlaceholder: React.FC<
  ExplorerOverviewPlaceholderProps
> = (props) => {
  return (
    <CardNoPaddingWithShimmer {...props}>
      <ExplorerOverviewHeading />
      <hr />
      <ExplorerOverviewDetailsPlaceholder />
    </CardNoPaddingWithShimmer>
  );
};

interface ExplorerOverviewContentProps {}
export const ExplorerOverviewContent: React.FC<ExplorerOverviewContentProps> = (
  props,
) => {
  return (
    <CardNoPadding {...props}>
      <ExplorerOverviewHeading />
      <hr />
      <ExplorerOverviewDetails />
    </CardNoPadding>
  );
};

interface ExplorerOverviewProps {
  className?: string;
}

/**
 * ExplorerOverviewFromExplorerSummary is a component that handles displaying
 * the loading state of the Explorer, and the extractions of the Explorer
 * Overview data from the Explorer API Explorer Summary.
 *
 */
export const ExplorerOverviewFromExplorerSummary: React.FC<
  ExplorerOverviewProps
> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const summary = React.useContext(ExplorerSummaryContext);

  if (error) {
    return <></>;
  }

  if (loading) {
    return <ExplorerOverviewPlaceholder {...props} />;
  }

  return (
    <ExplorerGenesisOverviewContext.Provider
      value={summary?.genesisOverview ?? null}
    >
      <ExplorerOverviewContent {...props} />
    </ExplorerGenesisOverviewContext.Provider>
  );
};
