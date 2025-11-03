import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * L1BlockID contains information about an L1 block.
 *
 * This type is defined by the Espresso L1 Validator Service API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e98063aeccd2c7cbfc86c5
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L55-L64
 */
export declare class L1BlockID {
    readonly number: bigint;
    readonly hash: ArrayBuffer;
    readonly parent: ArrayBuffer;
    constructor(number: bigint, hash: ArrayBuffer, parent: ArrayBuffer);
    toJSON(): unknown;
}
/**
 * L1BlockIDJSONDecoder decodes L1BlockId objects from a JSON object.
 */
declare class L1BlockIDJSONDecoder implements Converter<unknown, L1BlockID> {
    convert(input: unknown): L1BlockID;
}
/**
 * L1BlockIDJSONEncoder encodes L1BlockId objects to a JSON object.
 */
declare class L1BlockIDJSONEncoder implements Converter<L1BlockID, unknown> {
    convert(input: L1BlockID): unknown;
}
/**
 * L1BlockIDJSONCodec is a codec that encodes and decodes L1BlockId
 * objects to and from JSON.
 */
export declare class L1BlockIDJSONCodec extends TypeCheckingCodec<L1BlockID, unknown> {
    readonly encoder: L1BlockIDJSONEncoder;
    readonly decoder: L1BlockIDJSONDecoder;
}
/**
 * L1BlockIdJSONCodec is a codec that encodes and decodes L1BlockId
 * objects to and from JSON.
 */
export declare const l1BlockIDJSONCodec: L1BlockIDJSONCodec;
export {};
