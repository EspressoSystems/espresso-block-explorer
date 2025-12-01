import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { ValidatorEntry } from './validator_entry';
export declare class ActiveValidators {
    readonly validators: Map<`0x${string}`, ValidatorEntry>;
    constructor(validators: Map<`0x${string}`, ValidatorEntry>);
    toJSON(): Record<string, unknown>;
}
declare class ActiveValidatorsDecoder implements Converter<unknown, ActiveValidators> {
    convert(input: unknown): ActiveValidators;
}
declare class ActiveValidatorsEncoder implements Converter<ActiveValidators> {
    convert(input: ActiveValidators): Record<string, unknown>;
}
declare class ActiveValidatorsCodec extends TypeCheckingCodec<ActiveValidators, ReturnType<InstanceType<new () => ActiveValidatorsEncoder>['convert']>> {
    readonly encoder: ActiveValidatorsEncoder;
    readonly decoder: ActiveValidatorsDecoder;
}
export declare const activeValidatorsCodec: ActiveValidatorsCodec;
export {};
