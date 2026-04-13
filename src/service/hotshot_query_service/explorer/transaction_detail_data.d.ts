import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
type NamespaceID = number;
/**
 * ExplorerTransactionDetailData represents the data associated with a
 * transaction in the Explorer.
 */
export declare class ExplorerTransactionDetailData {
    readonly namespace: NamespaceID;
    readonly payload: ArrayBuffer;
    constructor(namespace: NamespaceID, payload: ArrayBuffer);
    toJSON(): {
        namespace: number;
        payload: string;
    };
}
declare class ExplorerTransactionDetailDataDecoder implements Converter<unknown, ExplorerTransactionDetailData> {
    convert(input: unknown): ExplorerTransactionDetailData;
}
declare class ExplorerTransactionDetailDataEncoder implements Converter<ExplorerTransactionDetailData> {
    convert(input: ExplorerTransactionDetailData): {
        namespace: number;
        payload: string;
    };
}
declare class ExplorerTransactionDetailDataCodec extends TypeCheckingCodec<ExplorerTransactionDetailData, ReturnType<InstanceType<new () => ExplorerTransactionDetailDataEncoder>['convert']>> {
    readonly encoder: ExplorerTransactionDetailDataEncoder;
    readonly decoder: ExplorerTransactionDetailDataDecoder;
}
export declare const explorerTransactionDetailDataCodec: ExplorerTransactionDetailDataCodec;
export declare const explorerTransactionDetailDataArrayCodec: ArrayCodec<ExplorerTransactionDetailData, {
    namespace: number;
    payload: string;
}>;
export {};
