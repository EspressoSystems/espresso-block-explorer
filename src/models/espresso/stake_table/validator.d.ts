import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { default as WalletAddress } from '../../../../../../../../../../../src/models/wallet_address/wallet_address';
import { TaggedBase64 } from '../tagged_base64';
import { CommissionPercent } from './commission_percent';
export declare class Validator {
    account: WalletAddress;
    stakeTableKey: TaggedBase64;
    stateVerKey: TaggedBase64;
    stake: bigint;
    commission: CommissionPercent;
    delegators: Map<string, bigint>;
    constructor(account: WalletAddress, stakeTableKey: TaggedBase64, stateVerKey: TaggedBase64, stake: bigint, commission: CommissionPercent, delegators: Map<string, bigint>);
}
export declare class ValidatorDecoder implements Converter<unknown, Validator> {
    convert(input: unknown): Validator;
}
export declare class ValidatorEncoder implements Converter<Validator, Record<string, unknown>> {
    convert(input: Validator): Record<string, unknown>;
}
export declare class ValidatorCodec extends TypeCheckingCodec<Validator> {
    encoder: ValidatorEncoder;
    decoder: ValidatorDecoder;
}
export declare const validatorCodec: ValidatorCodec;
export declare const nullableValidatorCodec: NullCodec<Validator, unknown>;
export declare const arrayValidatorCodec: ArrayCodec<Validator, unknown>;
