import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { Ratio } from '../../common/ratio';
import { ActiveNodeSetDiff } from './active_node_set_diff';
/**
 * NewEpoch represents the beginning of a new epoch in the active validator set.
 * It contains the list of validators that are active in the new epoch.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e9804d9c99ea7b6a2c87ca
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/1118a4c6a953c5270e3bd001d281dc2a8b032a27/src/types/global.rs#L101-L107
 */
export declare class NewEpoch extends ActiveNodeSetDiff {
    readonly nodes: ArrayBuffer[];
    readonly apr: Ratio;
    constructor(nodes: ArrayBuffer[], apr: Ratio);
    toJSON(): unknown;
}
/**
 * CurrentEpochJSONDecoder decodes NewEpoch objects from a JSON object.
 */
declare class CurrentEpochJSONDecoder implements Converter<unknown, NewEpoch> {
    convert(input: unknown): NewEpoch;
}
/**
 * CurrentEpochJSONEncoder encodes NewEpoch objects to a JSON object.
 */
declare class CurrentEpochJSONEncoder implements Converter<NewEpoch, unknown> {
    convert(input: NewEpoch): unknown;
}
/**
 * CurrentEpochJSONCodec is a codec that encodes and decodes
 * NewEpoch objects to and from JSON.
 */
declare class CurrentEpochJSONCodec extends TypeCheckingCodec<NewEpoch, unknown> {
    readonly encoder: CurrentEpochJSONEncoder;
    readonly decoder: CurrentEpochJSONDecoder;
}
/**
 * CurrentEpochKey is the key used to identify the NewEpoch object in the
 * validator set diff JSON representation.
 */
export declare const CurrentEpochKey = "NewEpoch";
/**
 * currentEpochJSONCodec is a codec that encodes and decodes
 * NewEpoch objects to and from JSON.
 */
export declare const currentEpochJSONCodec: CurrentEpochJSONCodec;
export {};
