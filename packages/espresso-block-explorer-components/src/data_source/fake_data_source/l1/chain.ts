import { sleep } from '@/async/sleep';
import { PseudoRandomNumberGenerator } from '../prng';
import { getStartingMilliseconds, getStartingSeed } from '../seed';

const TIME_BETWEEN_BLOCKS = 12 * 1000; // 12 seconds
// const TIME_TO_FINALIZE = 12 * 60 * 1000; // 12 minutes

export interface GeneratedL1Block {
  number: bigint;
  hash: ArrayBuffer;
  time: Date;
}

function generateGenesisBlock(): GeneratedL1Block {
  return {
    number: BigInt(0),
    hash: new ArrayBuffer(32),
    time: new Date(0),
  };
}

function generateBlock(
  height: bigint,
  _start: number,
  end: number,
): GeneratedL1Block {
  const prng = prngForHeight(height);
  return {
    number: height,
    hash: prng.fillBytes(32),
    time: new Date(end),
  };
}

function rollBlockTime(prng: PseudoRandomNumberGenerator): number {
  // Roll for a block time, minimum time is 12 seconds.
  const randomDelayExp = prng.nextRange(0, 100);

  return TIME_BETWEEN_BLOCKS + 12.34 ** randomDelayExp;
}

async function* generateAllCurrentBlocks(
  prng: PseudoRandomNumberGenerator,
): AsyncGenerator<GeneratedL1Block> {
  // The way we want to generate this is by first determining how many seconds
  // it took to generate the block.  The concept graph is indicating that we
  // can expect to take 1 - 10 seconds to generate a block.  We will want to
  // keep iterating this generation until we reach the current timestamp. This
  // way we will have consistent generation and all of the data will be
  // guaranteed to be in the past.

  let height = 1n;
  let time = getStartingSeed();
  while (time < getStartingMilliseconds().valueOf()) {
    const genTimeS = rollBlockTime(prng);
    yield generateBlock(height, time, time + genTimeS);
    time += genTimeS;
    height++;
  }
}

function prngForHeight(height: bigint): PseudoRandomNumberGenerator {
  return new PseudoRandomNumberGenerator(Number(height) * TIME_BETWEEN_BLOCKS);
}

export async function* generateAllL1Blocks(
  prng: PseudoRandomNumberGenerator = new PseudoRandomNumberGenerator(
    Number(getStartingMilliseconds()),
  ),
): AsyncGenerator<GeneratedL1Block> {
  yield generateGenesisBlock();
  yield* generateAllCurrentBlocks(prng);
}

export async function* streamNewL1Blocks(
  prng: PseudoRandomNumberGenerator,
  incomingTime: number,
  incomingHeight: bigint,
): AsyncGenerator<GeneratedL1Block> {
  let time = incomingTime;
  let height = incomingHeight;
  while (true) {
    const genTimeS = rollBlockTime(prng);
    await sleep(genTimeS);

    yield generateBlock(height, time, time + genTimeS);
    time += genTimeS;
    height++;
  }
}
