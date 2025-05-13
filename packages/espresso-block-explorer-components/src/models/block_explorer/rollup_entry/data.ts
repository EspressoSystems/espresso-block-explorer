import { RollUpEntry } from './types';

/**
 * This file contains a curated list of Registered Rollups.  For now it is
 * filled with Rollups assigned Test values, and other fake rollups.
 */

/**
 * vienna may actually be a duplicate of Caldera in general. It currently
 * has an assigned testing namespace value of 0c0ffee1.
 */
const vienna = new RollUpEntry(
  0xc0ffee1,
  'Vienna',
  new URL('https://vienna.caldera.dev/'),
  new URL('https://vienna.calderaexplorer.xyz/'),
);

/**
 * opStack is the Op Stack RollUp Entry. It currently has an assigned
 * testing namespace of 0xc0ffee2.
 */
const opStack = new RollUpEntry(
  0xc0ffee2,
  'OP Stack',
  new URL('https://stack.optimism.io/'),
  new URL('https://www.blockscout.com/'),
);

/**
 * arbitrum is populated with data taken from the design.
 */
const arbitrum = new RollUpEntry(
  0x7e57da7a0,
  'Arbitrum',
  new URL('https://arbitrum.io/'),
  new URL('https://arbiscan.io/'),
);
/**
 * eignLayer is populated with data taken from the design.
 */
const eigenLayer = new RollUpEntry(
  0x7e57da7a1,
  'Eigen Layer',
  new URL('https://www.eigenlayer.xyz/'),
  new URL('https://www.blockscout.com/'),
);

/**
 * spire is populated with data taken from the design.
 */
const spire = new RollUpEntry(
  0x7e57da7a2,
  'Spire',
  new URL('https://www.spire.dev/'),
  new URL('https://www.blockscout.com/'),
);

/**
 * altLayer is populated with data taken from the design.
 */
const altLayer = new RollUpEntry(
  0x7e57da7a3,
  'Alt Layer',
  new URL('https://altlayer.io/'),
  new URL('https://www.blockscout.com/'),
);

/**
 * caldera is populated with data taken from the design.
 */
const caldera = new RollUpEntry(
  0x7e57da7a4,
  'Caldera',
  new URL('https://www.caldera.xyz/'),
  new URL('https://www.blockscout.com/'),
);

/**
 * vistara is populated with data taken from the design.
 */
const vistara = new RollUpEntry(
  0x7e57da7a5,
  'Vistara Labs',
  new URL('https://vistara.dev/'),
  new URL('https://www.blockscout.com/'),
);

/**
 * polygon is populated with data taken from the design.
 */
const polygon = new RollUpEntry(
  0x7e57da7a6,
  'Polygon',
  new URL('https://polygon.technology/'),
  new URL('https://www.blockscout.com/'),
);

/**
 * milan is populated with data taken from
 * https://docs.espressosys.com/sequencer/releases/gibraltar-testnet-release/interacting-with-gibraltar
 *
 * Chain ID: 83782
 * Namespace: 263
 */
const milan = new RollUpEntry(
  263,
  'Milan',
  new URL('https://milan.caldera.dev/'),
  new URL('https://milan-devnet.explorer.caldera.xyz/'),
);

const kyoto = new RollUpEntry(
  41234687,
  'Kyoto',
  new URL('https://example.com/'),
  new URL('https://kyoto-explorer.altlayer.io/'),
);

const rariDevNet = new RollUpEntry(
  1918988905,
  'RARI',
  new URL('https://rarichain.org/'),
  new URL('https://explorer.rarichain.org/'),
);

const rari = new RollUpEntry(
  1380012617,
  'RARI',
  new URL('https://rarichain.org/'),
  new URL('https://mainnet.explorer.rarichain.org/'),
);

const logXDecaf = new RollUpEntry(
  9369,
  'LogX',
  new URL('https://logx.network/'),
  new URL('https://kartel-testnet-explorer.alt.technology/'),
);

const logX = new RollUpEntry(
  936369,
  'LogX',
  new URL('https://logx.network/'),
  new URL('https://vzjuxmhfn70kgnlds27h-explorer.alt.technology'),
);

const appChain = new RollUpEntry(
  466,
  'AppChain',
  new URL('https://appchain.xyz/'),
  new URL('https://explorer.appchain.xyz/'),
);

const appChainDecaf = new RollUpEntry(
  4661,
  'AppChain',
  new URL('https://appchain.xyz/'),
  new URL('https://appchaintestnet.explorer.caldera.xyz/'),
);

const molten = new RollUpEntry(
  360,
  'Molten',
  new URL('https://www.moltennetwork.com/'),
  new URL('https://molten.explorer.caldera.dev/'),
);

const moltenDecaf = new RollUpEntry(
  3609,
  'Molten',
  new URL('https://www.moltennetwork.com/'),
  new URL('https://molten.explorer.caldera.dev/'),
);

/*
const apeChainDecaf = new RollUpEntry(
  33139,
  'APECHAIN',
  new URL('https://apechain.com/'),
  new URL('https://apescan.io/'),
);
*/

export const kInfiniteGardenNamespace = 1_397_311_310;

/**
 * infiniteGarden is a namespace id that was utilized for the Espresso
 * Inscriptions Demo.
 */
const infiniteGarden = new RollUpEntry(
  kInfiniteGardenNamespace,
  'Infinite Garden',
  new URL('https://infinitegarden.espressosys.com/'),
  new URL('https://explorer.main.net.espressosys.com/'),
);

export const curatedRollupMap = new Map(
  [
    vienna,
    opStack,
    arbitrum,
    polygon,
    eigenLayer,
    spire,
    altLayer,
    caldera,
    vistara,
    milan,
    kyoto,
    infiniteGarden,
    rariDevNet,
    rari,
    logXDecaf,
    logX,
    appChain,
    appChainDecaf,
    molten,
    moltenDecaf,
  ].map((entry) => [entry.namespace, entry]),
);
