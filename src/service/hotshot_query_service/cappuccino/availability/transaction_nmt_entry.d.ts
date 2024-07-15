import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoAPITransactionNMTEntry represents a transaction NMT entry in the
 * Cappuccino API.
 */
export declare class CappuccinoAPITransactionNMTEntry {
    readonly vm: number;
    readonly payload: number[];
    constructor(vm: number, payload: number[]);
    toJSON(): {
        vm: number;
        payload: number[];
    };
}
export declare class CappuccinoAPITransactionNMTEntryDecoder implements Converter<unknown, CappuccinoAPITransactionNMTEntry> {
    convert(input: unknown): CappuccinoAPITransactionNMTEntry;
}
export declare class CappuccinoAPITransactionNMTEntryEncoder implements Converter<CappuccinoAPITransactionNMTEntry> {
    convert(input: CappuccinoAPITransactionNMTEntry): {
        vm: number;
        payload: number[];
    };
}
export declare class CappuccinoAPITransactionNMTEntryCodec extends TypeCheckingCodec<CappuccinoAPITransactionNMTEntry, ReturnType<InstanceType<new () => CappuccinoAPITransactionNMTEntryEncoder>['convert']>> {
    readonly encoder: CappuccinoAPITransactionNMTEntryEncoder;
    readonly decoder: CappuccinoAPITransactionNMTEntryDecoder;
}
export declare const cappuccinoAPITransactionNMTEntryCodec: CappuccinoAPITransactionNMTEntryCodec;
export declare const arrayCappuccinoAPITransactionNMTEntryCodec: ArrayCodec<CappuccinoAPITransactionNMTEntry, {
    vm: number;
    payload: number[];
}>;
