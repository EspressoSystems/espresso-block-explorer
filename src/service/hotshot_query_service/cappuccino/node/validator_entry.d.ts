import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CommissionPercent, TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso';
export declare class ValidatorEntry {
    readonly address: ArrayBuffer;
    readonly stakeTableKey: TaggedBase64;
    readonly stakeKey: TaggedBase64;
    readonly stake: bigint;
    readonly comission: CommissionPercent;
    readonly delegators: Map<`0x${string}`, bigint>;
    constructor(address: ArrayBuffer, stakeTableKey: TaggedBase64, stakeKey: TaggedBase64, stake: bigint, comission: CommissionPercent, delegators: Map<`0x${string}`, bigint>);
    toJSON(): {
        account: `0x${string}`;
        stake_table_key: string;
        state_ver_key: string;
        stake: unknown;
        commission: number;
        delegators: Record<string, unknown>;
    };
}
declare class ValidatorEntryDecoder implements Converter<unknown, ValidatorEntry> {
    convert(input: unknown): ValidatorEntry;
}
declare class ValidatorEntryEncoder implements Converter<ValidatorEntry> {
    convert(input: ValidatorEntry): {
        account: `0x${string}`;
        stake_table_key: string;
        state_ver_key: string;
        stake: unknown;
        commission: number;
        delegators: Record<string, unknown>;
    };
}
declare class ValidatorEntryCodec extends TypeCheckingCodec<ValidatorEntry, ReturnType<InstanceType<new () => ValidatorEntryEncoder>['convert']>> {
    readonly encoder: ValidatorEntryEncoder;
    readonly decoder: ValidatorEntryDecoder;
}
export declare const validatorEntryCodec: ValidatorEntryCodec;
export {};
