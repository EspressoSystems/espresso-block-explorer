import {
  AltLayerAvatarLogo,
  ArbitrumAvatarLogo,
  CalderaAvatarLogo,
  EigenLayerAvatarLogo,
  OpStackAvatarLogo,
  PolygonAvatarLogo,
  RariLogo,
  SpireAvatarLogo,
  VistaraAvatarLogo,
  With24PxSquare,
  With32PxSquare,
  With40PxSquare,
  WithCircleBorder,
} from './images';

export class RollUpImages {
  public readonly namespace: number;
  public readonly logo24: React.FC;
  public readonly logo32: React.FC;
  public readonly logo40: React.FC;
  constructor(
    namespace: number,
    logo24: React.FC,
    logo32: React.FC,
    logo40: React.FC,
  ) {
    this.namespace = namespace;
    this.logo24 = logo24;
    this.logo32 = logo32;
    this.logo40 = logo40;
  }
}

/**
 * This file contains a curated list of Registered Rollups.  For now it is
 * filled with Rollups assigned Test values, and other fake rollups.
 */

/**
 * vienna may actually be a duplicate of Caldera in general. It currently
 * has an assigned testing namespace value of 0c0ffee1.
 */
const vienna = new RollUpImages(
  0xc0ffee1,
  WithCircleBorder(With24PxSquare(CalderaAvatarLogo)),
  WithCircleBorder(With32PxSquare(CalderaAvatarLogo)),
  WithCircleBorder(With40PxSquare(CalderaAvatarLogo)),
);

/**
 * opStack is the Op Stack RollUp Entry. It currently has an assigned
 * testing namespace of 0xc0ffee2.
 */
const opStack = new RollUpImages(
  0xc0ffee2,
  With24PxSquare(OpStackAvatarLogo),
  With32PxSquare(OpStackAvatarLogo),
  With40PxSquare(OpStackAvatarLogo),
);

/**
 * arbitrum is populated with data taken from the design.
 */
const arbitrum = new RollUpImages(
  0x7e57da7a0,
  With24PxSquare(ArbitrumAvatarLogo),
  With32PxSquare(ArbitrumAvatarLogo),
  With40PxSquare(ArbitrumAvatarLogo),
);
/**
 * eignLayer is populated with data taken from the design.
 */
const eigenLayer = new RollUpImages(
  0x7e57da7a1,
  With24PxSquare(EigenLayerAvatarLogo),
  With32PxSquare(EigenLayerAvatarLogo),
  With40PxSquare(EigenLayerAvatarLogo),
);

/**
 * spire is populated with data taken from the design.
 */
const spire = new RollUpImages(
  0x7e57da7a2,
  WithCircleBorder(With24PxSquare(SpireAvatarLogo)),
  WithCircleBorder(With32PxSquare(SpireAvatarLogo)),
  WithCircleBorder(With40PxSquare(SpireAvatarLogo)),
);

/**
 * altLayer is populated with data taken from the design.
 */
const altLayer = new RollUpImages(
  0x7e57da7a3,
  With24PxSquare(AltLayerAvatarLogo),
  With32PxSquare(AltLayerAvatarLogo),
  With40PxSquare(AltLayerAvatarLogo),
);

/**
 * caldera is populated with data taken from the design.
 */
const caldera = new RollUpImages(
  0x7e57da7a4,
  With24PxSquare(CalderaAvatarLogo),
  With32PxSquare(CalderaAvatarLogo),
  With40PxSquare(CalderaAvatarLogo),
);

/**
 * vistara is populated with data taken from the design.
 */
const vistara = new RollUpImages(
  0x7e57da7a5,
  With24PxSquare(VistaraAvatarLogo),
  With32PxSquare(VistaraAvatarLogo),
  With40PxSquare(VistaraAvatarLogo),
);

/**
 * polygon is populated with data taken from the design.
 */
const polygon = new RollUpImages(
  0x7e57da7a6,
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
const milan = new RollUpImages(
  263,
  WithCircleBorder(With24PxSquare(CalderaAvatarLogo)),
  WithCircleBorder(With32PxSquare(CalderaAvatarLogo)),
  WithCircleBorder(With40PxSquare(CalderaAvatarLogo)),
);

const kyoto = new RollUpImages(
  41234687,
  With24PxSquare(AltLayerAvatarLogo),
  With32PxSquare(AltLayerAvatarLogo),
  With40PxSquare(AltLayerAvatarLogo),
);

const rariDevNet = new RollUpImages(
  1918988905,
  With24PxSquare(RariLogo),
  With32PxSquare(RariLogo),
  With40PxSquare(RariLogo),
);

const rari = new RollUpImages(
  1380012617,
  With24PxSquare(RariLogo),
  With32PxSquare(RariLogo),
  With40PxSquare(RariLogo),
);

export const rollUpImagesMap = new Map(
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
    rariDevNet,
    rari,
  ].map((entry) => [entry.namespace, entry]),
);
