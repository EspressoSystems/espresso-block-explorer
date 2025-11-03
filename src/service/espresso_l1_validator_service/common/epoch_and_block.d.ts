import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
/**
 * EpochAndBlock represents an epoch and block number pair with a timestamp.
 *
 * The EpochAndBlock type is defined by the Espresso L1 Validator Service API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e98026a30aca437cc81769
 * This is defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L81-L90
 */
export declare class EpochAndBlock {
    readonly epoch: bigint;
    readonly block: bigint;
    readonly timestamp: Date;
    constructor(epoch: bigint, block: bigint, timestamp: Date);
    toJSON(): unknown;
}
/**
 * EpochAndBlockNumberJSONDecoder decodes EpochAndBlock objects from a JSON
 * object.
 */
declare class EpochAndBlockNumberJSONDecoder implements Converter<unknown, EpochAndBlock> {
    convert(input: unknown): EpochAndBlock;
}
/**
 * EpochAndBlockNumberJSONEncoder encodes EpochAndBlock objects to a JSON
 * object.
 */
declare class EpochAndBlockNumberJSONEncoder implements Converter<EpochAndBlock, unknown> {
    convert(input: EpochAndBlock): unknown;
}
/**
 * EpochAndBlockNumberJSONCodec is a codec that encodes and decodes
 * EpochAndBlock objects to and from JSON.
 */
declare class EpochAndBlockNumberJSONCodec extends TypeCheckingCodec<EpochAndBlock, unknown> {
    readonly encoder: EpochAndBlockNumberJSONEncoder;
    readonly decoder: EpochAndBlockNumberJSONDecoder;
}
/**
 * epochAndBlockNumberJSONCodec is a codec that encodes and decodes
 * EpochAndBlock objects to and from JSON.
 */
export declare const epochAndBlockNumberJSONCodec: EpochAndBlockNumberJSONCodec;
export {};
