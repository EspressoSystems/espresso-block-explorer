import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../tagged_base64';
export declare class StakeTableEntry {
    stakeKey: TaggedBase64;
    stakeAmount: bigint;
    constructor(stakeKey: TaggedBase64, stakeAmount: bigint);
}
export declare class StakeTableEntryDecoder implements Converter<unknown, StakeTableEntry> {
    convert(input: unknown): StakeTableEntry;
}
export declare class StakeTableEntryEncoder implements Converter<StakeTableEntry, Record<string, unknown>> {
    convert(input: StakeTableEntry): Record<string, unknown>;
}
export declare class StakeTableEntryCodec extends TypeCheckingCodec<StakeTableEntry> {
    encoder: StakeTableEntryEncoder;
    decoder: StakeTableEntryDecoder;
}
export declare const stakeTableEntryCodec: StakeTableEntryCodec;
export declare const nullableStakeTableEntryCodec: NullCodec<StakeTableEntry, unknown>;
export declare const arrayStakeTableEntryCodec: ArrayCodec<StakeTableEntry, unknown>;
