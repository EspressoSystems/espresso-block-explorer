import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * GenesisOverview represents the overview of the Espresso Chain, since its
 * genesis.
 *
 * It is meant to hold statistics about the Espresso Chain.
 */
export declare class GenesisOverview {
    readonly rollups: number;
    readonly transactions: number;
    readonly blocks: number;
    constructor(rollups: number, transactions: number, blocks: number);
    toJSON(): {
        rollups: number;
        transactions: number;
        blocks: number;
    };
}
declare class GenesisOverviewDecoder implements Converter<unknown, GenesisOverview> {
    convert(input: unknown): GenesisOverview;
}
declare class GenesisOverviewEncoder implements Converter<GenesisOverview> {
    convert(input: GenesisOverview): {
        rollups: number;
        transactions: number;
        blocks: number;
    };
}
declare class GenesisOverviewCodec extends TypeCheckingCodec<GenesisOverview, ReturnType<InstanceType<new () => GenesisOverviewEncoder>['convert']>> {
    readonly encoder: GenesisOverviewEncoder;
    readonly decoder: GenesisOverviewDecoder;
}
export declare const genesisOverviewCodec: GenesisOverviewCodec;
export {};
