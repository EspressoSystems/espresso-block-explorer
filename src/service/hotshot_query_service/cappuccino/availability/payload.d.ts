import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoAPITransactionNMTEntry } from './transaction_nmt_entry';
import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
/**
 * CappuccinoAPIPayload represents the payload in the Cappuccino API.
 */
export declare class CappuccinoAPIPayload {
    readonly transaction_nmt: CappuccinoAPITransactionNMTEntry[];
    constructor(transaction_nmt: CappuccinoAPITransactionNMTEntry[]);
    toJSON(): {
        transaction_nmt: {
            vm: number;
            payload: number[];
        }[];
    };
}
export declare class CappuccinoAPIPayloadDecoder implements Converter<unknown, CappuccinoAPIPayload> {
    convert(input: unknown): CappuccinoAPIPayload;
}
export declare class CappuccinoAPIPayloadEncoder implements Converter<CappuccinoAPIPayload> {
    convert(input: CappuccinoAPIPayload): {
        transaction_nmt: {
            vm: number;
            payload: number[];
        }[];
    };
}
export declare class CappuccinoAPIPayloadCodec extends TypeCheckingCodec<CappuccinoAPIPayload, ReturnType<InstanceType<new () => CappuccinoAPIPayloadEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIPayloadEncoder;
    readonly decoder: CappuccinoAPIPayloadDecoder;
}
export declare const cappuccinoAPIPayloadCodec: CappuccinoAPIPayloadCodec;
export declare const nullableCappuccinoAPIPayloadCodec: NullCodec<CappuccinoAPIPayload, {
    transaction_nmt: {
        vm: number;
        payload: number[];
    }[];
}>;
