import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoFeeInfo represents the fee information in the Cappuccino API.
 */
export declare class CappuccinoFeeInfo {
    readonly account: ArrayBuffer;
    readonly amount: ArrayBuffer;
    constructor(account: ArrayBuffer, amount: ArrayBuffer);
    toJSON(): {
        account: string;
        amount: string;
    };
}
declare class CappuccinoFeeInfoDecoder implements Converter<unknown, CappuccinoFeeInfo> {
    convert(input: unknown): CappuccinoFeeInfo;
}
declare class CappuccinoFeeInfoEncoder implements Converter<CappuccinoFeeInfo> {
    convert(input: CappuccinoFeeInfo): {
        account: string;
        amount: string;
    };
}
declare class CappuccinoFeeInfoCodec extends TypeCheckingCodec<CappuccinoFeeInfo, ReturnType<InstanceType<new () => CappuccinoFeeInfoEncoder>['convert']>> {
    readonly encoder: CappuccinoFeeInfoEncoder;
    readonly decoder: CappuccinoFeeInfoDecoder;
}
export declare const cappuccinoFeeInfoCodec: CappuccinoFeeInfoCodec;
export {};
