import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso';
export declare class StakeTableEntry {
    readonly stakeKey: TaggedBase64;
    readonly stakeAmount: bigint;
    constructor(stakeKey: TaggedBase64, stakeAmount: bigint);
    toJSON(): {
        stake_key: string;
        stake_amount: `0x${string}`;
    };
}
declare class StakeTableEntryDecoder implements Converter<unknown, StakeTableEntry> {
    convert(input: unknown): StakeTableEntry;
}
declare class StakeTableEntryEncoder implements Converter<StakeTableEntry> {
    convert(input: StakeTableEntry): {
        stake_key: string;
        stake_amount: `0x${string}`;
    };
}
declare class StakeTableEntryCodec extends TypeCheckingCodec<StakeTableEntry, ReturnType<InstanceType<new () => StakeTableEntryEncoder>['convert']>> {
    readonly encoder: StakeTableEntryEncoder;
    readonly decoder: StakeTableEntryDecoder;
}
export declare const stakeTableEntryCodec: StakeTableEntryCodec;
export {};
