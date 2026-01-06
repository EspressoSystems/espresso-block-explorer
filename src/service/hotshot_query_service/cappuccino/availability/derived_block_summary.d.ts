import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { CappuccinoAPIHeader } from './block_header';
/**
 * CappuccinoDerivedBlockSummary represents a block summary in that is derived
 * from other primitives in the Cappuccino API.
 */
export declare class CappuccinoDerivedBlockSummary {
    readonly header: CappuccinoAPIHeader;
    readonly hash: TaggedBase64;
    readonly size: number;
    readonly num_transactions: number;
    readonly proposer_id: ArrayBuffer[];
    constructor(header: CappuccinoAPIHeader, hash: TaggedBase64, size: number, num_transactions: number, proposer_id: ArrayBuffer[]);
    toJSON(): {
        header: unknown;
        hash: string;
        size: number;
        num_transactions: number;
        proposer_id: unknown;
    };
}
export declare class CappuccinoDerivedBlockSummaryDecoder implements Converter<unknown, CappuccinoDerivedBlockSummary> {
    convert(input: unknown): CappuccinoDerivedBlockSummary;
}
export declare class CappuccinoDerivedBlockSummaryEncoder implements Converter<CappuccinoDerivedBlockSummary> {
    convert(input: CappuccinoDerivedBlockSummary): {
        header: unknown;
        hash: string;
        size: number;
        num_transactions: number;
        proposer_id: unknown;
    };
}
export declare class CappuccinoDerivedBlockSummaryCodec extends TypeCheckingCodec<CappuccinoDerivedBlockSummary, ReturnType<InstanceType<new () => CappuccinoDerivedBlockSummaryEncoder>['convert']>> {
    readonly encoder: CappuccinoDerivedBlockSummaryEncoder;
    readonly decoder: CappuccinoDerivedBlockSummaryDecoder;
}
export declare const cappuccinoDerivedBlockSummaryCodec: CappuccinoDerivedBlockSummaryCodec;
export declare const listCappuccinoDerivedBlockSummaryCodec: ArrayCodec<CappuccinoDerivedBlockSummary, {
    header: unknown;
    hash: string;
    size: number;
    num_transactions: number;
    proposer_id: unknown;
}>;
