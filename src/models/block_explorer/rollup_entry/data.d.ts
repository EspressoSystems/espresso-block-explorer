import { RollUpEntry } from './types';
export declare const kRariDevnetNamespace = 1918988905;
export declare const kRariNamespace = 1380012617;
export declare const kLogXDecafNamespace = 9369;
export declare const kLogXNamespace = 936369;
export declare const kAppChainNamespace = 466;
export declare const kAppChainDecafNamespace = 4661;
export declare const kMoltenNamespace = 360;
export declare const kMoltenDecafNamespace = 3609;
export declare const kApeChainNamespace = 33139;
export declare const kApeChainDecafNamespace = 3313939;
export declare const t3rnDecafNamespace = 13107;
export declare const t3rnNamespace = 819;
export declare const kRufusDecafNamespace = 21341;
export declare const kRufusNamespace = 2420;
export declare const kHuddle01Namespace = 12323;
export declare const kHuddle01DecafNamespace = 2524852;
export declare const kInfiniteGardenNamespace = 1397311310;
export declare const curatedMainnetList: RollUpEntry[];
export declare const curatedDecafList: RollUpEntry[];
export declare const curatedRollupMap: Map<number, RollUpEntry>;
/**
 * isNitroIntegrationNamespace checks if the given namespace is a Nitro
 * integration namespace. This is used to determine if the Nitro Batch
 * display should be shown.
 */
export declare function isNitroIntegrationNamespace(namespace: number): boolean;
