import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

type NamespaceID = number;
export declare class CappuccinoExplorerTransactionDetailData {
    readonly namespace: NamespaceID;
    readonly payload: ArrayBuffer;
    constructor(namespace: NamespaceID, payload: ArrayBuffer);
    toJSON(): {
        namespace: number;
        payload: string;
    };
}
declare class CappuccinoExplorerTransactionDetailDataDecoder implements Converter<unknown, CappuccinoExplorerTransactionDetailData> {
    convert(input: unknown): CappuccinoExplorerTransactionDetailData;
}
declare class CappuccinoExplorerTransactionDetailDataEncoder implements Converter<CappuccinoExplorerTransactionDetailData> {
    convert(input: CappuccinoExplorerTransactionDetailData): {
        namespace: number;
        payload: string;
    };
}
declare class CappuccinoExplorerTransactionDetailDataCodec extends TypeCheckingCodec<CappuccinoExplorerTransactionDetailData, ReturnType<InstanceType<new () => CappuccinoExplorerTransactionDetailDataEncoder>['convert']>> {
    readonly encoder: CappuccinoExplorerTransactionDetailDataEncoder;
    readonly decoder: CappuccinoExplorerTransactionDetailDataDecoder;
}
export declare const cappuccinoExplorerTransactionDetailDataCodec: CappuccinoExplorerTransactionDetailDataCodec;
export declare const cappuccinoExplorerTransactionDetailDataArrayCodec: ArrayCodec<CappuccinoExplorerTransactionDetailData, {
    namespace: number;
    payload: string;
}>;
export {};
