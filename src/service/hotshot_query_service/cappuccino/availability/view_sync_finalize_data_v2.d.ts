import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
/**
 * ViewSyncFinalizeDataV2 data used for a finalize vote.
 */
export declare class ViewSyncFinalizeDataV2 {
    readonly relay: number;
    readonly round: number;
    readonly epoch: null | number;
    constructor(relay: number, round: number, epoch: null | number);
    toJSON(): {
        relay: number;
        round: number;
        epoch: number | null;
    };
}
export declare class ViewSyncFinalizeDataV2Decoder implements Converter<unknown, ViewSyncFinalizeDataV2> {
    convert(input: unknown): ViewSyncFinalizeDataV2;
}
export declare class ViewSyncFinalizeDataV2Encoder implements Converter<ViewSyncFinalizeDataV2> {
    convert(input: ViewSyncFinalizeDataV2): {
        relay: number;
        round: number;
        epoch: number | null;
    };
}
export declare class ViewSyncFinalizeDataV2Codec extends TypeCheckingCodec<ViewSyncFinalizeDataV2, ReturnType<InstanceType<new () => ViewSyncFinalizeDataV2Encoder>['convert']>> {
    readonly encoder: ViewSyncFinalizeDataV2Encoder;
    readonly decoder: ViewSyncFinalizeDataV2Decoder;
}
export declare const viewSyncFinalizeDataV2Codec: ViewSyncFinalizeDataV2Codec;
