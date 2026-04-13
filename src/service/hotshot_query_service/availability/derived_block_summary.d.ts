import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityAPIHeader } from './block_header';
/**
 AvailabilityDerivedBlockSummary represents a block summary in that is derived
 * from other primitives in the Availability API.
 */
export declare class AvailabilityDerivedBlockSummary {
    readonly header: AvailabilityAPIHeader;
    readonly hash: TaggedBase64;
    readonly size: number;
    readonly num_transactions: number;
    readonly proposer_id: ArrayBuffer[];
    constructor(header: AvailabilityAPIHeader, hash: TaggedBase64, size: number, num_transactions: number, proposer_id: ArrayBuffer[]);
    toJSON(): {
        header: unknown;
        hash: string;
        size: number;
        num_transactions: number;
        proposer_id: unknown;
    };
}
export declare class AvailabilityDerivedBlockSummaryDecoder implements Converter<unknown, AvailabilityDerivedBlockSummary> {
    convert(input: unknown): AvailabilityDerivedBlockSummary;
}
export declare class AvailabilityDerivedBlockSummaryEncoder implements Converter<AvailabilityDerivedBlockSummary> {
    convert(input: AvailabilityDerivedBlockSummary): {
        header: unknown;
        hash: string;
        size: number;
        num_transactions: number;
        proposer_id: unknown;
    };
}
export declare class AvailabilityDerivedBlockSummaryCodec extends TypeCheckingCodec<AvailabilityDerivedBlockSummary, ReturnType<InstanceType<new () => AvailabilityDerivedBlockSummaryEncoder>['convert']>> {
    readonly encoder: AvailabilityDerivedBlockSummaryEncoder;
    readonly decoder: AvailabilityDerivedBlockSummaryDecoder;
}
export declare const availabilityDerivedBlockSummaryCodec: AvailabilityDerivedBlockSummaryCodec;
export declare const listAvailabilityDerivedBlockSummaryCodec: ArrayCodec<AvailabilityDerivedBlockSummary, {
    header: unknown;
    hash: string;
    size: number;
    num_transactions: number;
    proposer_id: unknown;
}>;
