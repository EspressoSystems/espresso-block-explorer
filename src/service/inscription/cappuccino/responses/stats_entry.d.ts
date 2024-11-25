import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { InscriptionStats } from '../inscription_stats';
import { default as CappuccinoInscriptionResponse } from './inscription_response';

/**
 * kCappuccinoStatsType is the type string for the
 * Stats class.
 */
export declare const kCappuccinoStatsType: "Stats";
/**
 * CappuccinoInscriptionStats is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export declare class CappuccinoInscriptionStats extends CappuccinoInscriptionResponse {
    readonly stats: InscriptionStats;
    constructor(stats: InscriptionStats);
    toJSON(): {
        Stats: unknown;
    };
}
declare class CappuccinoInscriptionStatsDecoder implements Converter<unknown, CappuccinoInscriptionStats> {
    convert(input: unknown): CappuccinoInscriptionStats;
}
declare class CappuccinoInscriptionStatsEncoder implements Converter<CappuccinoInscriptionStats> {
    convert(input: CappuccinoInscriptionStats): {
        Stats: unknown;
    };
}
declare class CappuccinoInscriptionStatsCodec extends TypeCheckingCodec<CappuccinoInscriptionStats, ReturnType<InstanceType<new () => CappuccinoInscriptionStatsEncoder>['convert']>> {
    readonly encoder: CappuccinoInscriptionStatsEncoder;
    readonly decoder: CappuccinoInscriptionStatsDecoder;
}
export declare const cappuccinoInscriptionStatsCodec: CappuccinoInscriptionStatsCodec;
export {};
