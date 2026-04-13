import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * L1BlockInfo contains information about an L1 block.
 *
 * This type is defined by the Espresso L1 Validator Service API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2952431b68e980c08eb2f6a6c62b9abe
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L42-L51
 */
export declare class L1BlockInfo {
    readonly number: bigint;
    readonly hash: ArrayBuffer;
    readonly timestamp: Date;
    constructor(number: bigint, hash: ArrayBuffer, timestamp: Date);
    toJSON(): unknown;
}
/**
 * L1BlockInfoJSONDecoder decodes L1BlockInfo objects from a JSON object.
 */
declare class L1BlockInfoJSONDecoder implements Converter<unknown, L1BlockInfo> {
    convert(input: unknown): L1BlockInfo;
}
/**
 * L1BlockInfoJSONEncoder encodes L1BlockInfo objects to a JSON object.
 */
declare class L1BlockInfoJSONEncoder implements Converter<L1BlockInfo, unknown> {
    convert(input: L1BlockInfo): unknown;
}
/**
 * L1BlockInfoJSONCodec is a codec that encodes and decodes L1BlockInfo
 * objects to and from JSON.
 */
export declare class L1BlockInfoJSONCodec extends TypeCheckingCodec<L1BlockInfo, unknown> {
    readonly encoder: L1BlockInfoJSONEncoder;
    readonly decoder: L1BlockInfoJSONDecoder;
}
/**
 * l1BlockInfoJSONCodec is a codec that encodes and decodes L1BlockInfo
 * objects to and from JSON.
 */
export declare const l1BlockInfoJSONCodec: L1BlockInfoJSONCodec;
export {};
