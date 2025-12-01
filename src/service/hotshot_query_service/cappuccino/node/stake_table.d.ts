import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec';
import { StakeTableField } from './stake_table_field';
export declare class StakeTable {
    readonly entries: StakeTableField[];
    constructor(entries: StakeTableField[]);
}
declare class StakeTableDecoder implements Converter<unknown, StakeTable> {
    convert(input: unknown): StakeTable;
}
declare class StakeTableEncoder implements Converter<StakeTable> {
    convert(input: StakeTable): {
        stake_table_entry: {
            stake_key: string;
            stake_amount: unknown;
        };
        state_ver_key: string;
    }[];
}
export declare class StakeTableCodec extends TypeCheckingCodec<StakeTable, ReturnType<InstanceType<new () => StakeTableEncoder>['convert']>> {
    readonly encoder: StakeTableEncoder;
    readonly decoder: StakeTableDecoder;
}
export declare const stakeTableCodec: StakeTableCodec;
export {};
