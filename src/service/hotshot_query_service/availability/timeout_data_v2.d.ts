import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * TimeoutDataV2 represents the v2 evidence provided for a view timeout.
 */
export declare class TimeoutDataV2 {
    readonly view: number;
    readonly epoch: null | number;
    constructor(view: number, epoch: null | number);
    toJSON(): {
        view: number;
        epoch: number | null;
    };
}
export declare class TimeoutDataV2Decoder implements Converter<unknown, TimeoutDataV2> {
    convert(input: unknown): TimeoutDataV2;
}
export declare class TimeoutDataV2Encoder implements Converter<TimeoutDataV2> {
    convert(input: TimeoutDataV2): {
        view: number;
        epoch: number | null;
    };
}
export declare class TimeoutDataV2Codec extends TypeCheckingCodec<TimeoutDataV2, ReturnType<InstanceType<new () => TimeoutDataV2Encoder>['convert']>> {
    readonly encoder: TimeoutDataV2Encoder;
    readonly decoder: TimeoutDataV2Decoder;
}
export declare const timeoutDataV2Codec: TimeoutDataV2Codec;
