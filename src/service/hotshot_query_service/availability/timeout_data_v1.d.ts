import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * TimeoutDataV1 represents the v1 evidence provided for a view timeout.
 */
export declare class TimeoutDataV1 {
    readonly view: number;
    constructor(view: number);
    toJSON(): {
        view: number;
    };
}
export declare class TimeoutDataV1Decoder implements Converter<unknown, TimeoutDataV1> {
    convert(input: unknown): TimeoutDataV1;
}
export declare class TimeoutDataV1Encoder implements Converter<TimeoutDataV1> {
    convert(input: TimeoutDataV1): {
        view: number;
    };
}
export declare class TimeoutDataV1Codec extends TypeCheckingCodec<TimeoutDataV1, ReturnType<InstanceType<new () => TimeoutDataV1Encoder>['convert']>> {
    readonly encoder: TimeoutDataV1Encoder;
    readonly decoder: TimeoutDataV1Decoder;
}
export declare const timeoutDataV1Codec: TimeoutDataV1Codec;
