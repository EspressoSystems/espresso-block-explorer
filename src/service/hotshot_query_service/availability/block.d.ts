import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityAPIHeader } from './block_header';
import { AvailabilityAPIPayload } from './payload';
/**
 * AvailabilityAPIBlock represents a block in the Availability API.
 */
export declare class AvailabilityAPIBlock {
    readonly header: AvailabilityAPIHeader;
    readonly payload: AvailabilityAPIPayload;
    readonly hash: TaggedBase64;
    readonly size: number;
    readonly numTransactions: number;
    constructor(header: AvailabilityAPIHeader, payload: AvailabilityAPIPayload, hash: TaggedBase64, size: number, numTransactions: number);
    toJSON(): unknown;
}
export declare class AvailabilityAPIBlockDecode implements Converter<unknown, AvailabilityAPIBlock> {
    convert(input: unknown): AvailabilityAPIBlock;
}
export declare class AvailabilityAPIBlockEncoder implements Converter<AvailabilityAPIBlock, unknown> {
    convert(input: AvailabilityAPIBlock): unknown;
}
export declare class AvailabilityAPIBlockCodec extends Codec<AvailabilityAPIBlock, unknown> {
    readonly encoder: AvailabilityAPIBlockEncoder;
    readonly decoder: AvailabilityAPIBlockDecode;
}
export declare const availabilityAPIBlockCodec: AvailabilityAPIBlockCodec;
