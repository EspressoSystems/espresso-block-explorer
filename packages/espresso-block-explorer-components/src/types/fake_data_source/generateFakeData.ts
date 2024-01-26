// We want this generate all of the fake data needed.
// This means It should generate transactions, and blocks with the corresponding
// data.
// All Summary data can be generated from the detailed data.  As such, we only
// really need to concern ourselves with the Detailed Data.
// We would also like for this data to be generated consistently for the same
// date.  So we will generate the data using a Pseudo-Random-Number-generator
// that is seeded based on today's date in UTC.
//

import { TaggedBase64 } from '../TaggedBase64';
import { curatedRollupMap } from '../data_source/rollup_entry/data';
import { PseudoRandomNumberGenerator } from './prng';

export async function* generateAllBlocks(): AsyncGenerator<GeneratedBlock> {
  const now = new Date();
  const startMilliSeconds = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).valueOf();

  const prng = new PseudoRandomNumberGenerator(startMilliSeconds);

  // The way we want to generate this is by first determining how many seconds
  // it took to generate the block.  The concept graph is indicating that we
  // can expect to take 1 - 10 seconds to generate a block.  We will want to
  // keep iterating this generation until we reach the current timestamp. This
  // way we will have consistent generation and all of the data will be
  // guaranteed to be in the past.

  let height = 0;
  let time = startMilliSeconds;
  while (time < now.valueOf()) {
    const genTimeS = Math.floor(prng.nextFloat() * 14 * 1000);
    yield generateIndividualBlock(
      new PseudoRandomNumberGenerator(height + genTimeS),
      height,
      time,
      time + genTimeS,
    );
    time += genTimeS;
    height++;
  }
}

type GeneratedBlock = {
  height: number;
  time: Date;
  transactions: AsyncIterable<GeneratedTransaction>;
  numTransactions: number;
  proposer: TaggedBase64;
  size: number;
};

export function generateIndividualBlock(
  prng: PseudoRandomNumberGenerator,
  height: number,
  start: number,
  end: number,
): GeneratedBlock {
  // A block needs transactions, a height, a generation time, a proposer, and
  // a size.  The size may be determined by the transactions... I'm not entirely
  // certain.

  // First, how many transactions do we want to generate?
  // We're expecting, based on the design, about 42 per second.
  const numTransactions = Math.floor(
    prng.nextFloat() * ((end - start) / 1000) * 12,
  );

  return {
    height,
    time: new Date(end),
    numTransactions,
    transactions: generateTransactionsForBlock(
      new PseudoRandomNumberGenerator(height + start),
      height,
      start,
      end,
      numTransactions,
    ),
    proposer: new TaggedBase64(
      'PUBKEY',
      prng.fillBytes(prng.nextRange(32, 64)),
    ),
    size: Math.floor(prng.nextFloat() * 1024 * numTransactions) + 8,
  };
}

const rollupNamespaces = Array.from(curatedRollupMap.keys());
function getRollUpNamespace(prng: PseudoRandomNumberGenerator) {
  // Roll for Unknown RollUp
  const v = prng.nextFloat();
  if (v > 0.98) {
    // 2% chance for unknown
    return 1;
  }

  return rollupNamespaces[prng.nextRange(0, rollupNamespaces.length)];
}

type GeneratedTransaction = {
  block: number;
  index: number;
  size: number;
  hash: ArrayBuffer;
  time: Date;
  sender: TaggedBase64;
  tree: {
    namespace: number;
    data: ArrayBuffer;
  }[];
};

export async function* generateTransactionsForBlock(
  prng: PseudoRandomNumberGenerator,
  height: number,
  start: number,
  end: number,
  numTransactions: number,
): AsyncGenerator<GeneratedTransaction> {
  const inc = (end - start) / numTransactions;

  // A Transaction needs, the block, and index, a size, a hash, a time, a sender, and data

  for (let index = 0, ms = start; ms < end; ms += inc, index++) {
    const namespace = getRollUpNamespace(prng);
    const size = Math.floor(1024 * prng.nextFloat());
    yield {
      block: height,
      index,
      size,
      hash: prng.fillBytes(32),
      time: new Date(ms),
      sender: new TaggedBase64('PUBKEY', prng.fillBytes(32)),

      tree: [
        {
          namespace,
          data: prng.fillBytes(size),
        },
      ],
    };
  }
}
