import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';

/**
 * InscriptionStats represents the stats that are tracking the overall stats of
 * the Espresso Block Chain.
 *
 * It stores and represents the number of blocks, transactions, and inscriptions
 * that have been processed by the Espresso Block Chain.
 */
export declare class InscriptionStats {
    readonly numBlocks: number;
    readonly numTransactions: number;
    readonly numInscriptions: number;
    constructor(numBlocks: number, numTransactions: number, numInscriptions: number);
}
declare class InscriptionStatsEncoder implements Converter<InscriptionStats> {
    convert(input: InscriptionStats): {
        num_blocks: number;
        num_transactions: number;
        num_inscriptions: number;
    };
}
declare class InscriptionStatsDecoder implements Converter<unknown, InscriptionStats> {
    convert(input: unknown): InscriptionStats;
}
declare class InscriptionStatsCodec extends TypeCheckingCodec<InscriptionStats> {
    readonly encoder: InscriptionStatsEncoder;
    readonly decoder: InscriptionStatsDecoder;
}
export declare const statsCodec: InscriptionStatsCodec;
export {};
