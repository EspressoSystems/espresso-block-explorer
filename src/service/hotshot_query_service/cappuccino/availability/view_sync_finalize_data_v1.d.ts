import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
/**
 * ViewSyncFinalizeDataV1 data used for a finalize vote.
 */
export declare class ViewSyncFinalizeDataV1 {
    readonly relay: number;
    readonly round: number;
    constructor(relay: number, round: number);
    toJSON(): {
        relay: number;
        round: number;
    };
}
export declare class ViewSyncFinalizeDataV1Decoder implements Converter<unknown, ViewSyncFinalizeDataV1> {
    convert(input: unknown): ViewSyncFinalizeDataV1;
}
export declare class ViewSyncFinalizeDataV1Encoder implements Converter<ViewSyncFinalizeDataV1> {
    convert(input: ViewSyncFinalizeDataV1): {
        relay: number;
        round: number;
    };
}
export declare class ViewSyncFinalizeDataV1Codec extends TypeCheckingCodec<ViewSyncFinalizeDataV1, ReturnType<InstanceType<new () => ViewSyncFinalizeDataV1Encoder>['convert']>> {
    readonly encoder: ViewSyncFinalizeDataV1Encoder;
    readonly decoder: ViewSyncFinalizeDataV1Decoder;
}
export declare const viewSyncFinalizeDataV1Codec: ViewSyncFinalizeDataV1Codec;
