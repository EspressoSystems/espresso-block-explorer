import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as MonetaryValue } from '../../../../../../../../../../../src/models/block_explorer/monetary_value';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
export declare class ExplorerBlockDetail {
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
declare class ExplorerBlockDetailDecoder implements Converter<unknown, ExplorerBlockDetail> {
    convert(input: unknown): ExplorerBlockDetail;
}
declare class ExplorerBlockDetailEncoder implements Converter<ExplorerBlockDetail, unknown> {
    convert(input: ExplorerBlockDetail): unknown;
}
declare class ExplorerBlockDetailCodec extends Codec<ExplorerBlockDetail, unknown> {
    readonly encoder: ExplorerBlockDetailEncoder;
    readonly decoder: ExplorerBlockDetailDecoder;
}
export declare const explorerBlockDetailCodec: ExplorerBlockDetailCodec;
export declare const explorerBlockDetailArrayCodec: ArrayCodec<ExplorerBlockDetail, unknown>;
export {};
