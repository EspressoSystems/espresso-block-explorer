import { sleep } from '@/async/sleep';
import { DataContext } from '@/components/contexts';
import { AsyncIterableResolver } from '@/components/data';
import {
  computeEpochByBlockAndBlocksPerEpoch,
  EpochAndBlock,
} from '@/service/espresso_l1_validator_service/common/epoch_and_block';
import { CappuccinoAPIHeader } from '@/service/hotshot_query_service';
import { CappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/hot_shot_query_service_api';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages';
import React from 'react';
import { ActiveValidatorsContext } from './active_validators_context';
import { BlocksPerEpochContext } from './blocks_per_epoch_context';
import { AbstractCappuccinoAPIV4Header } from '@/service/hotshot_query_service/cappuccino/availability/block_header_v4';

/**
 * MillisecondsPerBlockContext is a React Context that provides the average time
 * per block used for the Espresso Network.
 */
export const MillisecondsPerBlockContext = React.createContext<number>(
  // Default to 6 seconds per block, which seems to be a safe base line.
  6 * 1000,
);

type MillisecondsPerBlockState = {
  epochAndBlock: null | EpochAndBlock;
  startHeader: null | CappuccinoAPIHeader;
  endHeader: null | CappuccinoAPIHeader;
};

type ComputeMillisecondsPerBlockInput = {
  hotShotQueryService: null | CappuccinoHotShotQueryService;
  epochAndBlock: null | EpochAndBlock;
  blocksPerEpoch: null | bigint;
};

const SLEEP_TIME_MS = 1000;

function determineEndBlock(epochAndBlock: EpochAndBlock): bigint {
  return epochAndBlock.block;
}

function determineStartBlock(
  epochAndBlock: EpochAndBlock,
  blocksPerEpoch: null | bigint,
): bigint {
  const endBlock = determineEndBlock(epochAndBlock);
  const result =
    endBlock -
    (blocksPerEpoch ??
      computeEpochByBlockAndBlocksPerEpoch(
        epochAndBlock.block,
        epochAndBlock.epoch,
      ));

  if (result <= 0n) {
    const fallback = endBlock - 50n;
    if (fallback <= 0n) {
      return 1n;
    }
    return fallback;
  }

  return result;
}

async function* streamMillisecondsPerBlockState(): AsyncGenerator<
  MillisecondsPerBlockState,
  unknown,
  ComputeMillisecondsPerBlockInput
> {
  const state: MillisecondsPerBlockState = {
    epochAndBlock: null,
    startHeader: null,
    endHeader: null,
  };

  while (true) {
    const input = yield state;

    if (
      !input.hotShotQueryService ||
      !input.epochAndBlock ||
      (state.epochAndBlock !== null &&
        input.epochAndBlock.epoch !== state.epochAndBlock.epoch) ||
      !input.blocksPerEpoch
    ) {
      await sleep(SLEEP_TIME_MS);
      continue;
    }

    const endHeaderBlock = determineEndBlock(input.epochAndBlock);
    const startHeaderBlock = determineStartBlock(
      input.epochAndBlock,
      input.blocksPerEpoch,
    );

    if (state.epochAndBlock === null) {
      // We need to retrieve both the start and end headers for the
      // current epoch.
      try {
        const [startHeader, endHeader] = await Promise.all([
          input.hotShotQueryService.availability.getHeader(
            Number(startHeaderBlock),
          ),
          input.hotShotQueryService.availability.getHeader(
            Number(endHeaderBlock),
          ),
        ]);

        state.epochAndBlock = input.epochAndBlock;
        state.startHeader = startHeader;
        state.endHeader = endHeader;
      } catch {
        // Unable to retrieve headers, try again later.
        await sleep(SLEEP_TIME_MS / 4);
      }
      continue;
    }

    if (state.endHeader === null) {
      // Retrieve the end header for the current epoch.
      try {
        const endHeader =
          await input.hotShotQueryService.availability.getHeader(
            Number(endHeaderBlock),
          );
        state.epochAndBlock = input.epochAndBlock;
        state.endHeader = endHeader;
      } catch {
        // Unable to retrieve header, try again later.
        await sleep(SLEEP_TIME_MS / 4);
      }

      continue;
    }

    if (
      state.startHeader === null ||
      input.epochAndBlock.epoch !== state.epochAndBlock?.epoch
    ) {
      // Retrieve the start header for the current epoch.
      try {
        const startHeader =
          await input.hotShotQueryService.availability.getHeader(
            Number(startHeaderBlock),
          );
        state.epochAndBlock = input.epochAndBlock;
        state.startHeader = startHeader;
      } catch {
        // Unable to retrieve header, try again later.
        await sleep(SLEEP_TIME_MS / 4);
      }
      continue;
    }

    // No need to retrieve more headers, none of our criteria dictates that we
    // need an update.
    await sleep(SLEEP_TIME_MS);
  }
}

export const ComputeMillisecondsPerBlock: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const epochAndBlock =
    React.useContext(ActiveValidatorsContext)?.espressoBlock ?? null;
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );
  const blocksPerEpoch = React.useContext(BlocksPerEpochContext);

  const asyncIterable = React.useMemo(
    () => streamMillisecondsPerBlockState(),
    [],
  );

  return (
    <AsyncIterableResolver
      asyncIterable={asyncIterable}
      next={{
        hotShotQueryService,
        epochAndBlock,
        blocksPerEpoch,
      }}
    >
      <ResolveMillisecondsPerBlock>{children}</ResolveMillisecondsPerBlock>
    </AsyncIterableResolver>
  );
};

function computeMillisecondsPerBlock(
  data: null | MillisecondsPerBlockState,
): null | number {
  if (!data || !data.startHeader || !data.endHeader) {
    return null;
  }

  if (data.endHeader.fields instanceof AbstractCappuccinoAPIV4Header && data.startHeader.fields instanceof AbstractCappuccinoAPIV4Header) {
    return (data.endHeader.fields.timestamp_millis - data.startHeader.fields.timestamp_millis) /
      (data.endHeader.fields.height - data.startHeader.fields.height);
  }

  return (
    ((data.endHeader.fields.timestamp - data.startHeader.fields.timestamp) * 1000) /
    (data.endHeader.fields.height - data.startHeader.fields.height)
  );
}

const ResolveMillisecondsPerBlock: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const millisecondsPerBlock = React.useContext(MillisecondsPerBlockContext);
  const data = (React.useContext(DataContext) ??
    null) as null | MillisecondsPerBlockState;

  const millisecondsPerBlockValue =
    computeMillisecondsPerBlock(data) ?? millisecondsPerBlock;

  return (
    <MillisecondsPerBlockContext.Provider value={millisecondsPerBlockValue}>
      {children}
    </MillisecondsPerBlockContext.Provider>
  );
};
