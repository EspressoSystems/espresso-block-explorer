import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { AvailabilityAPITransactionNMTEntry } from './transaction_nmt_entry';
/**
 * AvailabilityAPIPayload represents the payload in the Availability API.
 */
export declare class AvailabilityAPIPayload {
    readonly transaction_nmt: AvailabilityAPITransactionNMTEntry[];
    constructor(transaction_nmt: AvailabilityAPITransactionNMTEntry[]);
    toJSON(): {
        transaction_nmt: {
            vm: number;
            payload: number[];
        }[];
    };
}
export declare class AvailabilityAPIPayloadDecoder implements Converter<unknown, AvailabilityAPIPayload> {
    convert(input: unknown): AvailabilityAPIPayload;
}
export declare class AvailabilityAPIPayloadEncoder implements Converter<AvailabilityAPIPayload> {
    convert(input: AvailabilityAPIPayload): {
        transaction_nmt: {
            vm: number;
            payload: number[];
        }[];
    };
}
export declare class AvailabilityAPIPayloadCodec extends TypeCheckingCodec<AvailabilityAPIPayload, ReturnType<InstanceType<new () => AvailabilityAPIPayloadEncoder>['convert']>> {
    readonly encoder: AvailabilityAPIPayloadEncoder;
    readonly decoder: AvailabilityAPIPayloadDecoder;
}
export declare const availabilityAPIPayloadCodec: AvailabilityAPIPayloadCodec;
export declare const nullableAvailabilityAPIPayloadCodec: NullCodec<AvailabilityAPIPayload, {
    transaction_nmt: {
        vm: number;
        payload: number[];
    }[];
}>;
