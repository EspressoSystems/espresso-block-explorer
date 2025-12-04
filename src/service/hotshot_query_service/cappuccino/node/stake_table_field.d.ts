import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso';
import { StakeTableEntry } from './stake_table_entry';
export declare class StakeTableField {
    readonly stakeTableEntry: StakeTableEntry;
    readonly stateVerKey: TaggedBase64;
    constructor(stakeTableEntry: StakeTableEntry, stateVerKey: TaggedBase64);
}
declare class StakeTableFieldDecoder implements Converter<unknown, StakeTableField> {
    convert(input: unknown): StakeTableField;
}
declare class StakeTableFieldEncoder implements Converter<StakeTableField> {
    convert(input: StakeTableField): {
        stake_table_entry: {
            stake_key: string;
            stake_amount: `0x${string}`;
        };
        state_ver_key: string;
    };
}
declare class StakeTableFieldCodec extends TypeCheckingCodec<StakeTableField, ReturnType<InstanceType<new () => StakeTableFieldEncoder>['convert']>> {
    readonly encoder: StakeTableFieldEncoder;
    readonly decoder: StakeTableFieldDecoder;
}
export declare const stakeTableFieldCodec: StakeTableFieldCodec;
export declare const stakeTableFieldArrayCodec: ArrayCodec<StakeTableField, {
    stake_table_entry: {
        stake_key: string;
        stake_amount: `0x${string}`;
    };
    state_ver_key: string;
}>;
export {};
