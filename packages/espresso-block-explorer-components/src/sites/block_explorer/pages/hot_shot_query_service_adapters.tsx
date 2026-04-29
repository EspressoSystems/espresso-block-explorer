import { assert } from '@/assert/assert';
import { sleep } from '@/async/sleep';
import { AsyncIterableResolver } from '@/components/data/async_data';
import { ErrorJoiner } from '@/contexts/error_provider';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { dropIterable, everyIterable } from '@/functional/functional';
import { ExplorerSummary } from '@/service/hotshot_query_service/explorer/explorer_summary';
import { SummaryHistograms } from '@/service/hotshot_query_service/explorer/summary_histograms';
import { HotShotQueryService } from '@/service/hotshot_query_service/hot_shot_query_service_api';
import { default as React } from 'react';

// We need to create adapters between the HotShotQueryService and the
// components that ultimately wish to consume them.

/**
 * ProvideBlockDetailDataSource is a component that converts
 * the HotShot Query Service into a BlockDetailAsyncRetriever.
 */
export const ProvideBlockDetailDataSource: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  return children;
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
> = ({ children }) => {
  return children;
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
> = ({ children }) => {
  return children;
};

export const ProvideTransactionsForBlockSummaryDataSource: React.FC<
  ProvideTransactionsSummaryDataSourceProps
> = ({ children }) => {
  return children;
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
> = ({ children }) => {
  return children;
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
> = ({ children }) => {
  return children;
};

export interface ProvideTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * isNotNull is a helper function utilized to type check that something that
 * can be null or something else is definitely not null.
 */
function isNotNull<T>(value: null | T): value is T {
  return value !== null;
}

/**
 * isNotUndefined is a helper function utilized to type check that something
 * that can be undefined or something else is definitely not undefined.
 */
function isNotUndefined<T>(value: undefined | T): value is T {
  return value !== undefined;
}

/**
 * isSomething is a helper function that ensures that an an item provided
 * is not null or undefined.
 */
function isSomething<T>(value: null | undefined | T): value is T {
  return isNotNull(value) && isNotUndefined(value);
}

/**
 * replaceArrayMissingEntriesWithFallback is a helper function to help quickly
 * replace missing data in the new array with the corresponding value in the
 * fallback (previous) array.
 *
 * All data before the given offset is "new" and not available in the previous
 * data set.
 */
function replaceArrayMissingEntriesWithFallback(
  data: (null | number)[],
  previous: (null | number)[],
  offset: number,
): (null | number)[] {
  return data.map((value, index) => {
    if (index < offset) {
      return value;
    }

    return value ?? previous[index - offset] ?? null;
  });
}

/**
 * fallbackToPreviousDataForHistogramIfMissing is a helper function that will
 * take the two `ExplorerSummary` values, the incoming one, and the previous
 * one, and will try to replace any potentially missing data with data
 * available in the previous entry (if available).
 */
function fallbackToPreviousDataForHistogramIfMissing(
  next: ExplorerSummary,
  previous: null | ExplorerSummary = null,
): ExplorerSummary {
  if (!previous) {
    return next;
  }

  const offset = next.latestBlock.height - previous.latestBlock.height;
  assert(offset >= 0);

  if (offset >= next.histograms.blockHeights.length) {
    // No need to reconstruct things, we're just replacing
    // everythning.
    return next;
  }

  // Do we even need to perform a replacement?
  if (
    everyIterable(
      dropIterable(next.histograms.blockHeights, offset),
      isSomething,
    ) &&
    everyIterable(
      dropIterable(next.histograms.blockSize, offset),
      isSomething,
    ) &&
    everyIterable(
      dropIterable(next.histograms.blockTime, offset),
      isSomething,
    ) &&
    everyIterable(
      dropIterable(next.histograms.blockTransactions, offset),
      isSomething,
    )
  ) {
    return next;
  }

  return new ExplorerSummary(
    next.latestBlock,
    next.genesisOverview,
    next.latestBlocks,
    next.latestTransactions,
    new SummaryHistograms(
      replaceArrayMissingEntriesWithFallback(
        next.histograms.blockTime,
        previous.histograms.blockTime,
        offset,
      ),
      replaceArrayMissingEntriesWithFallback(
        next.histograms.blockSize,
        previous.histograms.blockSize,
        offset,
      ),
      replaceArrayMissingEntriesWithFallback(
        next.histograms.blockTransactions,
        previous.histograms.blockTransactions,
        offset,
      ),
      replaceArrayMissingEntriesWithFallback(
        next.histograms.blockHeights,
        previous.histograms.blockHeights,
        offset,
      ),
    ),
  );
}

export const kNumberOfSampleBlocks = 30;

/**
 * EXPLORER_SUMMARY_POLLING_INTERVAL_MS is the internval, in milliseconds,
 * that the explorer summary will be retrieved in if a newer entry is not
 * found in the previous attempt.
 */
const EXPLORER_SUMMARY_POLLING_INTERVAL_MS = 1000; // 1s

/**
 * explorerOverviewStream is an async generator that yields the latest
 * explorer summary whenever an update is available.  It will not yield any
 * iteration should one not be available.
 *
 * NOTE: There is potential for the latest explorer summary to yield a result
 * that is in the past due to communicating with multiple nodes that are not
 * guanteed to be in sync.  This is expected to be handled so that only
 * new events are present.
 *
 * NOTE: due to processing speeds, polling intervals, and server-side cache
 * duration, it is entirely possible for us to skip blocks.
 */
async function* explorerOverviewStream(service: HotShotQueryService) {
  let lastExplorerOverview: null | ExplorerSummary = null;
  while (true) {
    try {
      const next = (await service.explorer.getExplorerOverview())
        .explorerSummary;
      if (
        lastExplorerOverview &&
        next.latestBlock.height <= lastExplorerOverview.latestBlock.height
      ) {
        // This is not a block that is newer than the preivous block.
        await sleep(EXPLORER_SUMMARY_POLLING_INTERVAL_MS);
        continue;
      }

      if (
        lastExplorerOverview &&
        next.genesisOverview.transactions <
          lastExplorerOverview.genesisOverview.transactions
      ) {
        // We are being told we have fewer transactions than we previously had?
        // Let's try fetching the result again.
        continue;
      }

      const nextResult = fallbackToPreviousDataForHistogramIfMissing(
        next,
        lastExplorerOverview,
      );

      lastExplorerOverview = nextResult;
      yield nextResult;
    } catch (err: unknown) {
      // We encountered an error. Depending on the error, we may want to do
      // specific things for specific errors.  But in general, in order to
      // prevent the page from halting, we'll want to cotinue as if nothing
      // is wrong.
      console.error(
        'encountered error attempting to retrieve explorer summary',
        err,
      );

      await sleep(EXPLORER_SUMMARY_POLLING_INTERVAL_MS);
    }
  }
}

export const ProvideExplorerSummaryAsyncStream: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);

  // Create a timer to refresh every two seconds.
  const explorerSummaryStream = React.useMemo(
    () => explorerOverviewStream(hotShotQueryService),
    [hotShotQueryService],
  );

  return (
    <AsyncIterableResolver asyncIterable={explorerSummaryStream}>
      <ErrorJoiner>{children}</ErrorJoiner>
    </AsyncIterableResolver>
  );
};

export const ProvideExplorerSummary: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return children;
};
