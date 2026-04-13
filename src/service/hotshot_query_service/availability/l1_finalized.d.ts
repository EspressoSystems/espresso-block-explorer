import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
/**
 * AvailabilityL1Finalized represents the finalized block for an L1.
 */
export declare class AvailabilityL1Finalized {
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
export declare class AvailabilityL1FinalizedDecoder implements Converter<unknown, AvailabilityL1Finalized> {
    convert(input: unknown): AvailabilityL1Finalized;
}
export declare class AvailabilityL1FinalizedEncoder implements Converter<AvailabilityL1Finalized> {
    convert(input: AvailabilityL1Finalized): {
        number: number;
        timestamp: string;
        hash: string;
    };
}
export declare class AvailaibilityL1FinalizedCodec extends TypeCheckingCodec<AvailabilityL1Finalized, ReturnType<InstanceType<new () => AvailabilityL1FinalizedEncoder>['convert']>> {
    readonly encoder: AvailabilityL1FinalizedEncoder;
    readonly decoder: AvailabilityL1FinalizedDecoder;
}
export declare const availabilityL1FinalizedCodec: AvailaibilityL1FinalizedCodec;
export declare const nullableAvailabilityL1FinalizedCodec: NullCodec<AvailabilityL1Finalized, {
    number: number;
    timestamp: string;
    hash: string;
}>;
