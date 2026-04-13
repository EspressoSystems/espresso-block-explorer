import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * AvailabilityAPITransactionNMTEntry represents a transaction NMT entry in the
 * Availability API.
 */
export declare class AvailabilityAPITransactionNMTEntry {
    readonly vm: number;
    readonly payload: number[];
    constructor(vm: number, payload: number[]);
    toJSON(): {
        vm: number;
        payload: number[];
    };
}
export declare class AvailabilityAPITransactionNMTEntryDecoder implements Converter<unknown, AvailabilityAPITransactionNMTEntry> {
    convert(input: unknown): AvailabilityAPITransactionNMTEntry;
}
export declare class AvailabilityAPITransactionNMTEntryEncoder implements Converter<AvailabilityAPITransactionNMTEntry> {
    convert(input: AvailabilityAPITransactionNMTEntry): {
        vm: number;
        payload: number[];
    };
}
export declare class AvailabilityAPITransactionNMTEntryCodec extends TypeCheckingCodec<AvailabilityAPITransactionNMTEntry, ReturnType<InstanceType<new () => AvailabilityAPITransactionNMTEntryEncoder>['convert']>> {
    readonly encoder: AvailabilityAPITransactionNMTEntryEncoder;
    readonly decoder: AvailabilityAPITransactionNMTEntryDecoder;
}
export declare const availabilityAPITransactionNMTEntryCodec: AvailabilityAPITransactionNMTEntryCodec;
export declare const arrayAvailabilityAPITransactionNMTEntryCodec: ArrayCodec<AvailabilityAPITransactionNMTEntry, {
    vm: number;
    payload: number[];
}>;
