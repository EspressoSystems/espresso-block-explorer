import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec';
import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as MonetaryValue } from '../../../../../../../../../../../../src/models/block_explorer/monetary_value';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
export declare class CappuccinoExplorerBlockDetail {
    readonly hash: TaggedBase64;
    readonly height: number;
    readonly time: Date;
    readonly numTransactions: number;
    readonly proposerID: ArrayBuffer[];
    readonly feeRecipient: ArrayBuffer[];
    readonly size: number;
    readonly blockReward: MonetaryValue[];
    constructor(hash: TaggedBase64, height: number, time: Date, numTransactions: number, proposerID: ArrayBuffer[], feeRecipient: ArrayBuffer[], size: number, blockReward: MonetaryValue[]);
    toJSON(): unknown;
}
declare class CappuccinoExplorerBlockDetailDecoder implements Converter<unknown, CappuccinoExplorerBlockDetail> {
    convert(input: unknown): CappuccinoExplorerBlockDetail;
}
declare class CappuccinoExplorerBlockDetailEncoder implements Converter<CappuccinoExplorerBlockDetail, unknown> {
    convert(input: CappuccinoExplorerBlockDetail): unknown;
}
declare class CappuccinoExplorerBlockDetailCodec extends Codec<CappuccinoExplorerBlockDetail, unknown> {
    readonly encoder: CappuccinoExplorerBlockDetailEncoder;
    readonly decoder: CappuccinoExplorerBlockDetailDecoder;
}
export declare const cappuccinoExplorerBlockDetailCodec: CappuccinoExplorerBlockDetailCodec;
export declare const cappuccinoExplorerBlockDetailArrayCodec: ArrayCodec<CappuccinoExplorerBlockDetail, unknown>;
export {};
