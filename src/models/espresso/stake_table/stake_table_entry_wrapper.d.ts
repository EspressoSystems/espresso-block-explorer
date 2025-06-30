import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../tagged_base64';
import { StakeTableEntry } from './stake_table_entry';
export declare class StakeTableEntryWrapper {
    stakeTableEntry: StakeTableEntry;
    stateVerKey: TaggedBase64;
    constructor(stakeTableEntry: StakeTableEntry, stateVerKey: TaggedBase64);
}
export declare class StakeTableEntryWrapperDecoder implements Converter<unknown, StakeTableEntryWrapper> {
    convert(input: unknown): StakeTableEntryWrapper;
}
export declare class StakeTableEntryWrapperEncoder implements Converter<StakeTableEntryWrapper, Record<string, unknown>> {
    convert(input: StakeTableEntryWrapper): Record<string, unknown>;
}
export declare class StakeTableEntryWrapperCodec extends TypeCheckingCodec<StakeTableEntryWrapper> {
    encoder: StakeTableEntryWrapperEncoder;
    decoder: StakeTableEntryWrapperDecoder;
}
export declare const stakeTableEntryWrapperCodec: StakeTableEntryWrapperCodec;
export declare const nullableStakeTableEntryWrapperCodec: NullCodec<StakeTableEntryWrapper, unknown>;
export declare const arrayStakeTableEntryWrapperCodec: ArrayCodec<StakeTableEntryWrapper, unknown>;
