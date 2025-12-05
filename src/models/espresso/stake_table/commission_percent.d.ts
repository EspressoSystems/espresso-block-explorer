import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from '../../../../../../../../../../../src/errors/base_error';
export default class PercentageOutOfRangeError extends BaseError {
    value: number;
    constructor(value: number, message?: string);
    get code(): string;
}
/**
 * CommissionPercent represents the commission percentage for a validator.
 * These values are stored in the range 0 to 10_000, where 10_000 represents
 * 100%.
 */
export declare class CommissionPercent {
    readonly value: number;
    constructor(value: number);
    toString(): string;
    toJSON(): number;
    valueOf(): number;
}
export declare class CommissionPercentDecoder implements Converter<unknown, CommissionPercent> {
    convert(input: unknown): CommissionPercent;
}
export declare class CommissionPercentEncoder implements Converter<CommissionPercent, number> {
    convert(input: CommissionPercent): number;
}
export declare class CommissionPercentCodec extends TypeCheckingCodec<CommissionPercent, number> {
    readonly encoder: Converter<CommissionPercent, number>;
    readonly decoder: Converter<unknown, CommissionPercent>;
}
export declare const commissionPercentCodec: CommissionPercentCodec;
