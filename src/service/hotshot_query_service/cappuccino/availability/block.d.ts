import { CappuccinoAPIPayload } from './payload';
import { CappuccinoAPIHeader } from './block_header';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoAPIBlock represents a block in the Cappuccino API.
 */
export declare class CappuccinoAPIBlock {
    readonly header: CappuccinoAPIHeader;
    readonly payload: CappuccinoAPIPayload;
    readonly hash: TaggedBase64;
    readonly size: number;
    readonly numTransactions: number;
    constructor(header: CappuccinoAPIHeader, payload: CappuccinoAPIPayload, hash: TaggedBase64, size: number, numTransactions: number);
    toJSON(): unknown;
}
export declare class CappuccinoAPIBlockDecode implements Converter<unknown, CappuccinoAPIBlock> {
    convert(input: unknown): CappuccinoAPIBlock;
}
export declare class CappuccinoAPIBlockEncoder implements Converter<CappuccinoAPIBlock, unknown> {
    convert(input: CappuccinoAPIBlock): unknown;
}
export declare class CappuccinoAPIBlockCodec extends Codec<CappuccinoAPIBlock, unknown> {
    readonly encoder: CappuccinoAPIBlockEncoder;
    readonly decoder: CappuccinoAPIBlockDecode;
}
export declare const cappuccinoAPIBlockCodec: CappuccinoAPIBlockCodec;
