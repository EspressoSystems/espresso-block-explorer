import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoL1Finalized represents the finalized block in the Cappuccino L1.
 */
export declare class CappuccinoL1Finalized {
    readonly number: number;
    readonly timestamp: string;
    readonly hash: string;
    constructor(number: number, timestamp: string, hash: string);
    toJSON(): {
        number: number;
        timestamp: string;
        hash: string;
    };
}
export declare class CappuccinoL1FinalizedDecoder implements Converter<unknown, CappuccinoL1Finalized> {
    convert(input: unknown): CappuccinoL1Finalized;
}
export declare class CappuccinoL1FinalizedEncoder implements Converter<CappuccinoL1Finalized> {
    convert(input: CappuccinoL1Finalized): {
        number: number;
        timestamp: string;
        hash: string;
    };
}
export declare class CappuccinoL1FinalizedCodec extends TypeCheckingCodec<CappuccinoL1Finalized, ReturnType<InstanceType<new () => CappuccinoL1FinalizedEncoder>['convert']>> {
    readonly encoder: CappuccinoL1FinalizedEncoder;
    readonly decoder: CappuccinoL1FinalizedDecoder;
}
export declare const cappuccinoL1FinalizedCodec: CappuccinoL1FinalizedCodec;
export declare const nullableCappuccinoL1FinalizedCodec: NullCodec<CappuccinoL1Finalized, {
    number: number;
    timestamp: string;
    hash: string;
}>;
