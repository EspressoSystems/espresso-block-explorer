import { default as BaseError } from './BaseError';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';

export default class InvalidStringValueError extends BaseError {
    readonly have: string;
    readonly want: string;
    constructor(haveType: string, wantType: string, message?: string);
    toJSON(): unknown;
}
declare class InvalidStringValueErrorCodec extends TypeCheckingCodec<InvalidStringValueError> {
    readonly encoder: Converter<InvalidStringValueError, unknown>;
    readonly decoder: Converter<unknown, InvalidStringValueError>;
}
export declare const invalidTypeErrorCodec: InvalidStringValueErrorCodec;
export {};
