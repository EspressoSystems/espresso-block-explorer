import {
  kApeChainDecafNamespace,
  kApeChainNamespace,
  kAppChainDecafNamespace,
  kAppChainNamespace,
  kHuddle01DecafNamespace,
  kHuddle01Namespace,
  kLogXDecafNamespace,
  kLogXNamespace,
  kMoltenDecafNamespace,
  kMoltenNamespace,
  kRariDevnetNamespace,
  kRariNamespace,
  kRufusDecafNamespace,
  kRufusNamespace,
  t3rnDecafNamespace,
  t3rnNamespace,
} from './data';
import {
  AltLayerAvatarLogo,
  ApeChainLogo24,
  ApeChainLogo32,
  ApeChainLogo40,
  AppChainLogo24,
  AppChainLogo32,
  AppChainLogo40,
  ArbitrumAvatarLogo,
  CalderaAvatarLogo,
  EigenLayerAvatarLogo,
  Huddle01Logo24,
  Huddle01Logo32,
  Huddle01Logo40,
  LogXLogo24,
  LogXLogo32,
  LogXLogo40,
  MoltenLogo24,
  MoltenLogo32,
  MoltenLogo40,
  OpStackAvatarLogo,
  PolygonAvatarLogo,
  RariLogo24,
  RariLogo32,
  RariLogo40,
  RufusLogo24,
  RufusLogo32,
  RufusLogo40,
  SpireAvatarLogo,
  T3rnLogo24,
  T3rnLogo32,
  T3rnLogo40,
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
  kRariDevnetNamespace,
  With24PxSquare(RariLogo24),
  With32PxSquare(RariLogo32),
  With40PxSquare(RariLogo40),
);

const rari = new RollUpImages(
  kRariNamespace,
  With24PxSquare(RariLogo24),
  With32PxSquare(RariLogo32),
  With40PxSquare(RariLogo40),
);

const logXDecaf = new RollUpImages(
  kLogXDecafNamespace,
  With24PxSquare(LogXLogo24),
  With32PxSquare(LogXLogo32),
  With40PxSquare(LogXLogo40),
);

const logX = new RollUpImages(
  kLogXNamespace,
  With24PxSquare(LogXLogo24),
  With32PxSquare(LogXLogo32),
  With40PxSquare(LogXLogo40),
);

const appChainDecaf = new RollUpImages(
  kAppChainDecafNamespace,
  With24PxSquare(AppChainLogo24),
  With32PxSquare(AppChainLogo32),
  With40PxSquare(AppChainLogo40),
);

const appChain = new RollUpImages(
  kAppChainNamespace,
  With24PxSquare(AppChainLogo24),
  With32PxSquare(AppChainLogo32),
  With40PxSquare(AppChainLogo40),
);

const molten = new RollUpImages(
  kMoltenNamespace,
  With24PxSquare(MoltenLogo24),
  With32PxSquare(MoltenLogo32),
  With40PxSquare(MoltenLogo40),
);

const moltenDecaf = new RollUpImages(
  kMoltenDecafNamespace,
  With24PxSquare(MoltenLogo24),
  With32PxSquare(MoltenLogo32),
  With40PxSquare(MoltenLogo40),
);

const apeChain = new RollUpImages(
  kApeChainNamespace,
  With24PxSquare(ApeChainLogo24),
  With32PxSquare(ApeChainLogo32),
  With40PxSquare(ApeChainLogo40),
);

const apeChainDecaf = new RollUpImages(
  kApeChainDecafNamespace,
  With24PxSquare(ApeChainLogo24),
  With32PxSquare(ApeChainLogo32),
  With40PxSquare(ApeChainLogo40),
);

const t3rn = new RollUpImages(
  t3rnNamespace,
  With24PxSquare(T3rnLogo24),
  With32PxSquare(T3rnLogo32),
  With40PxSquare(T3rnLogo40),
);

const t3rnDecaf = new RollUpImages(
  t3rnDecafNamespace,
  With24PxSquare(T3rnLogo24),
  With32PxSquare(T3rnLogo32),
  With40PxSquare(T3rnLogo40),
);

const rufus = new RollUpImages(
  kRufusNamespace,
  With24PxSquare(RufusLogo24),
  With32PxSquare(RufusLogo32),
  With40PxSquare(RufusLogo40),
);

const rufusDecaf = new RollUpImages(
  kRufusDecafNamespace,
  With24PxSquare(RufusLogo24),
  With32PxSquare(RufusLogo32),
  With40PxSquare(RufusLogo40),
);

const huddle01 = new RollUpImages(
  kHuddle01Namespace,
  With24PxSquare(Huddle01Logo24),
  With32PxSquare(Huddle01Logo32),
  With40PxSquare(Huddle01Logo40),
);

const huddle01Decaf = new RollUpImages(
  kHuddle01DecafNamespace,
  With24PxSquare(Huddle01Logo24),
  With32PxSquare(Huddle01Logo32),
  With40PxSquare(Huddle01Logo40),
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
    logXDecaf,
    logX,
    appChain,
    appChainDecaf,
    molten,
    moltenDecaf,
    apeChain,
    apeChainDecaf,
    t3rn,
    t3rnDecaf,
    rufus,
    rufusDecaf,
    huddle01,
    huddle01Decaf,
  ].map((entry) => [entry.namespace, entry]),
);
