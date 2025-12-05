// We want this generate all of the fake data needed.
// This means It should generate transactions, and blocks with the corresponding
// data.
// All Summary data can be generated from the detailed data.  As such, we only
// really need to concern ourselves with the Detailed Data.
// We would also like for this data to be generated consistently for the same
// date.  So we will generate the data using a Pseudo-Random-Number-generator
// that is seeded based on today's date in UTC.
//

import { filterIterable, lastIterable } from '@/functional/functional';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { networkTypes } from '../network_types';
import { nodeTypes } from '../node_types';
import { operatingSystems } from '../operating_systems';
import { operatorCompanyData } from '../operator_names';
import { PseudoRandomNumberGenerator } from '../prng';
import { getStartingSeed } from '../seed';
import { ratiosAndRegions, totalRegionRatiosSum } from '../world_lat_lng_data';

export type GeneratedNodeIdentityInformation = {
  pubkey: TaggedBase64;
  stateVerKey: TaggedBase64;
  stake: bigint;
  commission: number;
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
    stateVerKey: new TaggedBase64('STATE_VER_KEY', prng.fillBytes(32)),
    stake: prng.nextRangeBigInt(0n, 1000n) * 1000000000000000000n,
    commission: prng.nextRange(0, 5000),
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

export function* generateAllNodeIdentityInformationData(
  prng: PseudoRandomNumberGenerator = new PseudoRandomNumberGenerator(
    getStartingSeed(),
  ),
): Generator<GeneratedNodeIdentityInformation> {
  // How many nodes do we want?
  const numNodes = prng.nextRange(100, 350);

  for (let i = 0; i < numNodes; i++) {
    yield generateNodeIdentityInformationData(
      new PseudoRandomNumberGenerator(i),
    );
  }
}

export const nodeList = Array.from(generateAllNodeIdentityInformationData());
