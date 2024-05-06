// We want this generate all of the fake data needed.
// This means It should generate transactions, and blocks with the corresponding
// data.
// All Summary data can be generated from the detailed data.  As such, we only
// really need to concern ourselves with the Detailed Data.
// We would also like for this data to be generated consistently for the same
// date.  So we will generate the data using a Pseudo-Random-Number-generator
// that is seeded based on today's date in UTC.
//

import MonetaryValue from '@/models/block_explorer/monetary_value';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { PseudoRandomNumberGenerator } from './prng';

async function* generateNoTransactions(): AsyncGenerator<GeneratedTransaction> {}

export async function* generateAllBlocks(): AsyncGenerator<GeneratedBlock> {
  const now = new Date();
  const startMilliSeconds = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).valueOf();

  const prng = new PseudoRandomNumberGenerator(startMilliSeconds);
  const allZeros = new Uint8Array(new Array(20).map(() => 0)).buffer;

  // Create the genesis block
  yield {
    hash: new TaggedBase64('BLOCK', allZeros),
    height: 0,
    time: new Date(0),
    genTime: 0,
    transactions: generateNoTransactions(),
    numTransactions: 0,
    proposer: allZeros,
    size: 0,
    fees: [],
  };

  // The way we want to generate this is by first determining how many seconds
  // it took to generate the block.  The concept graph is indicating that we
  // can expect to take 1 - 10 seconds to generate a block.  We will want to
  // keep iterating this generation until we reach the current timestamp. This
  // way we will have consistent generation and all of the data will be
  // guaranteed to be in the past.

  let height = 1;
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

export type GeneratedBlock = {
  hash: TaggedBase64;
  height: number;
  time: Date;
  genTime: number;
  transactions: AsyncIterable<GeneratedTransaction>;
  numTransactions: number;
  proposer: ArrayBuffer;
  size: number;
  fees: MonetaryValue[];
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
  const numTransactions = Math.floor(prng.nextRange(0, 5));

  return {
    hash: new TaggedBase64('BLOCK', prng.fillBytes(32)),
    height,
    genTime: end - start,
    time: new Date(end),
    numTransactions,
    transactions: generateTransactionsForBlock(
      new PseudoRandomNumberGenerator(height + start),
      height,
      start,
      end,
      numTransactions,
    ),
    proposer: prng.fillBytes(30),
    size: Math.floor(prng.nextFloat() * 1024 * numTransactions) + 8,
    fees: [MonetaryValue.ESP(BigInt(prng.nextRange(0, 1000000000) * 1000))],
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

export type GeneratedTransaction = {
  block: number;
  index: number;
  size: number;
  hash: TaggedBase64;
  time: Date;
  sender: TaggedBase64;
  tree: {
    namespace: number;
    data: ArrayBuffer;
  };
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
      hash: new TaggedBase64('COMMIT', prng.fillBytes(32)),
      time: new Date(ms),
      sender: new TaggedBase64('PUBKEY', prng.fillBytes(32)),

      tree: {
        namespace,
        data: prng.fillBytes(size),
      },
    };
  }
}
