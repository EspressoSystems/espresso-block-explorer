import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * AvailabilityFeeInfo represents the fee information in the Availability API.
 */
export declare class AvailabilityFeeInfo {
    readonly account: ArrayBuffer;
    readonly amount: ArrayBuffer;
    constructor(account: ArrayBuffer, amount: ArrayBuffer);
    toJSON(): {
        account: `0x${string}`;
        amount: `0x${string}`;
    };
}
declare class AvailabilityFeeInfoDecoder implements Converter<unknown, AvailabilityFeeInfo> {
    convert(input: unknown): AvailabilityFeeInfo;
}
declare class AvailabilityFeeInfoEncoder implements Converter<AvailabilityFeeInfo> {
    convert(input: AvailabilityFeeInfo): {
        account: `0x${string}`;
        amount: `0x${string}`;
    };
}
declare class AvailabilityFeeInfoCodec extends TypeCheckingCodec<AvailabilityFeeInfo, ReturnType<InstanceType<new () => AvailabilityFeeInfoEncoder>['convert']>> {
    readonly encoder: AvailabilityFeeInfoEncoder;
    readonly decoder: AvailabilityFeeInfoDecoder;
}
export declare const availabilityFeeInfoCodec: AvailabilityFeeInfoCodec;
export {};
