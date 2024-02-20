import {
  AltLayerAvatarLogo,
  ArbitrumAvatarLogo,
  CalderaAvatarLogo,
  EigenLayerAvatarLogo,
  OpStackAvatarLogo,
  PolygonAvatarLogo,
  SpireAvatarLogo,
  VistaraAvatarLogo,
  With24PxSquare,
  With32PxSquare,
  With40PxSquare,
  WithCircleBorder,
} from './images';
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
  WithCircleBorder(With24PxSquare(CalderaAvatarLogo)),
  WithCircleBorder(With32PxSquare(CalderaAvatarLogo)),
  WithCircleBorder(With40PxSquare(CalderaAvatarLogo)),
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
  With24PxSquare(OpStackAvatarLogo),
  With32PxSquare(OpStackAvatarLogo),
  With40PxSquare(OpStackAvatarLogo),
);

/**
 * arbitrum is populated with data taken from the design.
 */
const arbitrum = new RollUpEntry(
  0x7e57da7a0,
  'Arbitrum',
  new URL('https://arbitrum.io/'),
  new URL('https://arbiscan.io/'),
  With24PxSquare(ArbitrumAvatarLogo),
  With32PxSquare(ArbitrumAvatarLogo),
  With40PxSquare(ArbitrumAvatarLogo),
);
/**
 * eignLayer is populated with data taken from the design.
 */
const eigenLayer = new RollUpEntry(
  0x7e57da7a1,
  'Eigen Layer',
  new URL('https://www.eigenlayer.xyz/'),
  new URL('https://www.blockscout.com/'),
  With24PxSquare(EigenLayerAvatarLogo),
  With32PxSquare(EigenLayerAvatarLogo),
  With40PxSquare(EigenLayerAvatarLogo),
);

/**
 * spire is populated with data taken from the design.
 */
const spire = new RollUpEntry(
  0x7e57da7a2,
  'Spire',
  new URL('https://www.spire.dev/'),
  new URL('https://www.blockscout.com/'),
  WithCircleBorder(With24PxSquare(SpireAvatarLogo)),
  WithCircleBorder(With32PxSquare(SpireAvatarLogo)),
  WithCircleBorder(With40PxSquare(SpireAvatarLogo)),
);

/**
 * altLayer is populated with data taken from the design.
 */
const altLayer = new RollUpEntry(
  0x7e57da7a3,
  'Alt Layer',
  new URL('https://altlayer.io/'),
  new URL('https://www.blockscout.com/'),
  With24PxSquare(AltLayerAvatarLogo),
  With32PxSquare(AltLayerAvatarLogo),
  With40PxSquare(AltLayerAvatarLogo),
);

/**
 * caldera is populated with data taken from the design.
 */
const caldera = new RollUpEntry(
  0x7e57da7a4,
  'Caldera',
  new URL('https://www.caldera.xyz/'),
  new URL('https://www.blockscout.com/'),
  With24PxSquare(CalderaAvatarLogo),
  With32PxSquare(CalderaAvatarLogo),
  With40PxSquare(CalderaAvatarLogo),
);

/**
 * vistara is populated with data taken from the design.
 */
const vistara = new RollUpEntry(
  0x7e57da7a5,
  'Vistara Labs',
  new URL('https://vistara.dev/'),
  new URL('https://www.blockscout.com/'),
  With24PxSquare(VistaraAvatarLogo),
  With32PxSquare(VistaraAvatarLogo),
  With40PxSquare(VistaraAvatarLogo),
);

/**
 * polygon is populated with data taken from the design.
 */
const polygon = new RollUpEntry(
  0x7e57da7a6,
  'Polygon',
  new URL('https://polygon.technology/'),
  new URL('https://www.blockscout.com/'),
  WithCircleBorder(With24PxSquare(PolygonAvatarLogo)),
  WithCircleBorder(With32PxSquare(PolygonAvatarLogo)),
  WithCircleBorder(With40PxSquare(PolygonAvatarLogo)),
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
  WithCircleBorder(With24PxSquare(CalderaAvatarLogo)),
  WithCircleBorder(With32PxSquare(CalderaAvatarLogo)),
  WithCircleBorder(With40PxSquare(CalderaAvatarLogo)),
);

const kyoto = new RollUpEntry(
  41234687,
  'Kyoto',
  new URL('https://example.com/'),
  new URL('https://kyoto-explorer.altlayer.io/'),
  With24PxSquare(AltLayerAvatarLogo),
  With32PxSquare(AltLayerAvatarLogo),
  With40PxSquare(AltLayerAvatarLogo),
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
  ].map((entry) => [entry.namespace, entry]),
);
