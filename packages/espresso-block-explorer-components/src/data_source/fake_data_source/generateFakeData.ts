// We want this generate all of the fake data needed.
// This means It should generate transactions, and blocks with the corresponding
// data.
// All Summary data can be generated from the detailed data.  As such, we only
// really need to concern ourselves with the Detailed Data.
// We would also like for this data to be generated consistently for the same
// date.  So we will generate the data using a Pseudo-Random-Number-generator
// that is seeded based on today's date in UTC.
//

import { sleep } from '@/async/sleep';
import { filterIterable, lastIterable } from '@/functional/functional';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { networkTypes } from './network_types';
import { nodeTypes } from './node_types';
import { operatingSystems } from './operating_systems';
import { operatorCompanyData } from './operator_names';
import { PseudoRandomNumberGenerator } from './prng';
import { ratiosAndRegions, totalRegionRatiosSum } from './world_lat_lng_data';

const now = new Date();
const startMilliSeconds = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
).valueOf();
const seed = startMilliSeconds;

export function getStartingSeed(): number {
  return seed;
}

/**
 * This will generate absolutely nothing.  This is helpful for when we need to
 * return an AsyncGenerator, AsyncIterable, or AsyncIterator that will never
 * yield any values, and will always immediately complete.
 */
async function* asyncGenerateNothing<T>(): AsyncGenerator<T> {}

/**
 * createGenesisBlock will create the genesis block for the blockchain.  This
 * block will have no transactions, and will have a hash of all zeros.
 */
export function createGenesisBlock(): GeneratedBlock {
  const allZeros = new Uint8Array(new Array(20).map(() => 0)).buffer;

  // Create the genesis block
  return {
    hash: new TaggedBase64('BLOCK', allZeros),
    height: 0,
    time: new Date(0),
    genTime: 0,
    transactions: asyncGenerateNothing(),
    numTransactions: 0,
    proposer: [],
    size: 0,
    fees: [],
  };
}

/**
 * generateAllCurrentBlocks will generate all of the blocks up to the current
 * time. This will keep computing how long it takes to generate each block
 * and will keep generating blocks until the current time is reached.
 */
async function* generateAllCurrentBlocks(
  prng: PseudoRandomNumberGenerator,
): AsyncGenerator<GeneratedBlock> {
  // The way we want to generate this is by first determining how many seconds
  // it took to generate the block.  The concept graph is indicating that we
  // can expect to take 1 - 10 seconds to generate a block.  We will want to
  // keep iterating this generation until we reach the current timestamp. This
  // way we will have consistent generation and all of the data will be
  // guaranteed to be in the past.

  let height = 1;
  let time = seed;
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

/**
 * generateAllBlocks will generate all of the fake blocks for the blockchain.
 * This will generate the genesis block, and then all of the blocks up to the
 * current time.
 */
export async function* generateAllBlocks(
  prng: PseudoRandomNumberGenerator = new PseudoRandomNumberGenerator(seed),
): AsyncGenerator<GeneratedBlock> {
  yield createGenesisBlock();
  yield* generateAllCurrentBlocks(prng);
}

/**
 * streamNewBlocks will generate new blocks as they are generated.  This will
 * keep generating blocks until the end of time.
 */
export async function* streamNewBlocks(
  prng: PseudoRandomNumberGenerator,
  incomingTime: number,
  incomingHeight: number,
): AsyncGenerator<GeneratedBlock> {
  let time = incomingTime;
  let height = incomingHeight;
  while (true) {
    const genTimeS = Math.floor(prng.nextFloat() * 14 * 1000);
    const toWaitMs = time + genTimeS - Date.now();
    await sleep(toWaitMs);

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
  proposer: ArrayBuffer[];
  size: number;
  fees: MonetaryValue[];
};

/**
 * generateIndividualBlock will generate a single block for the blockchain.
 * This will generate a block with a random number of transactions, and a random
 * size.  The block will have a random proposer, and will have a random
 * generation time.
 */
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
  const nodeIndex = prng.nextRange(0, nodeList.length);
  const node = nodeList[nodeIndex];

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
    proposer: [node.address],
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

export type GeneratedNodeIdentityInformation = {
  pubkey: TaggedBase64;
  address: ArrayBuffer;
  name: string;

  company: {
    name: string;
    website: string;
  };

  location: {
    coords: [number, number];
    country: string;
  };

  operatingSystem: string;
  networkType: string;
  nodeType: string;

  // Classification
  // Which binary and version are they using?
  // Which type of network are they using?
  // Which Operating System are they using?
};

function pickWorldLocation(prng: PseudoRandomNumberGenerator) {
  const roll = prng.nextRange(0, totalRegionRatiosSum);

  const filteredRatiosAndRegions = filterIterable(
    ratiosAndRegions,
    ([neededRoll]) => neededRoll <= roll,
  );

  const [, region] = lastIterable(filteredRatiosAndRegions);

  const locationDetailsIndex = prng.nextRange(0, region.length);
  const locationDetails = region[locationDetailsIndex];
  return locationDetails;
}

function pickCompanyDetails(prng: PseudoRandomNumberGenerator) {
  const roll = prng.nextRange(0, operatorCompanyData.length);
  const companyDetails = operatorCompanyData[roll];
  return companyDetails;
}

function pickOperatingSystem(prng: PseudoRandomNumberGenerator) {
  const roll = prng.nextRange(0, operatingSystems.length);
  const operatingSystem = operatingSystems[roll];
  return operatingSystem;
}

function pickNodeType(prng: PseudoRandomNumberGenerator) {
  const roll = prng.nextRange(0, nodeTypes.length);
  const nodeType = nodeTypes[roll];
  return nodeType;
}

function pickNetworkType(prng: PseudoRandomNumberGenerator) {
  const roll = prng.nextRange(0, networkTypes.length);
  const networkType = networkTypes[roll];
  return networkType;
}

function generateNodeIdentityInformationData(
  prng: PseudoRandomNumberGenerator,
): GeneratedNodeIdentityInformation {
  const [companyName, companyWebsite] = pickCompanyDetails(prng);
  const [, lat, lng, country] = pickWorldLocation(prng);
  const operatingSystem = pickOperatingSystem(prng);
  const nodeType = pickNodeType(prng);
  const networkType = pickNetworkType(prng);

  return {
    pubkey: new TaggedBase64('PUBKEY', prng.fillBytes(32)),
    name: `${companyName} Node ${country} ${prng.nextRange(0, 100)}`,
    address: prng.fillBytes(32),
    company: {
      name: companyName,
      website: companyWebsite,
    },
    location: {
      coords: [lat, lng],
      country: country,
    },
    operatingSystem,
    networkType,
    nodeType,
  };
}

export function* generateAllNodeIdentityInformationData(): Generator<GeneratedNodeIdentityInformation> {
  const prng = new PseudoRandomNumberGenerator(seed);

  // How many nodes do we want?
  const numNodes = prng.nextRange(50, 150);

  for (let i = 0; i < numNodes; i++) {
    yield generateNodeIdentityInformationData(prng);
  }
}

export const nodeList = Array.from(generateAllNodeIdentityInformationData());
