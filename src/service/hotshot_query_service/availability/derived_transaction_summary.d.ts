import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityAPIHeader } from './block_header';
import { AvailabilityAPITransactionNMTEntry } from './transaction_nmt_entry';
/**
 * AvailabilityDerivedTransactionSummary represents a Transaction summary that
 * is derived from other primitives in the Availability API.
 */
export declare class AvailabilityDerivedTransactionSummary {
    readonly hash: TaggedBase64;
    readonly header: AvailabilityAPIHeader;
    readonly offset: number;
    readonly transaction: AvailabilityAPITransactionNMTEntry;
    constructor(hash: TaggedBase64, header: AvailabilityAPIHeader, offset: number, transaction: AvailabilityAPITransactionNMTEntry);
    toJSON(): {
        hash: string;
        header: unknown;
        offset: number;
        transaction: {
            vm: number;
            payload: number[];
        };
    };
}
export declare class AvailabilityDerivedTransactionSummaryDecoder implements Converter<unknown, AvailabilityDerivedTransactionSummary> {
    convert(input: unknown): AvailabilityDerivedTransactionSummary;
}
export declare class AvailabilityDerivedTransactionSummaryEncoder implements Converter<AvailabilityDerivedTransactionSummary> {
    convert(input: AvailabilityDerivedTransactionSummary): {
        hash: string;
        header: unknown;
        offset: number;
        transaction: {
            vm: number;
            payload: number[];
        };
    };
}
export declare class AvailabilityDerivedTransactionSummaryCodec extends TypeCheckingCodec<AvailabilityDerivedTransactionSummary, ReturnType<InstanceType<new () => AvailabilityDerivedTransactionSummaryEncoder>['convert']>> {
    readonly encoder: AvailabilityDerivedTransactionSummaryEncoder;
    readonly decoder: AvailabilityDerivedTransactionSummaryDecoder;
}
export declare const availabilityDerivedTransactionSummaryCodec: AvailabilityDerivedTransactionSummaryCodec;
export declare const listAvailabilityDerivedTransactionSummaryCodec: ArrayCodec<AvailabilityDerivedTransactionSummary, {
    hash: string;
    header: unknown;
    offset: number;
    transaction: {
        vm: number;
        payload: number[];
    };
}>;
