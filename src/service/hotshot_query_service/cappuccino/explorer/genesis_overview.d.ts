import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

export declare class CappuccinoGenesisOverview {
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
declare class CappuccinoGenesisOverviewDecoder implements Converter<unknown, CappuccinoGenesisOverview> {
    convert(input: unknown): CappuccinoGenesisOverview;
}
declare class CappuccinoGenesisOverviewEncoder implements Converter<CappuccinoGenesisOverview> {
    convert(input: CappuccinoGenesisOverview): {
        rollups: number;
        transactions: number;
        blocks: number;
    };
}
declare class CappuccinoGenesisOverviewCodec extends TypeCheckingCodec<CappuccinoGenesisOverview, ReturnType<InstanceType<new () => CappuccinoGenesisOverviewEncoder>['convert']>> {
    readonly encoder: CappuccinoGenesisOverviewEncoder;
    readonly decoder: CappuccinoGenesisOverviewDecoder;
}
export declare const cappuccinoGenesisOverviewCodec: CappuccinoGenesisOverviewCodec;
export {};
