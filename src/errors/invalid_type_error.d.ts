import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { BaseError } from './base_error';
export declare class InvalidTypeError extends BaseError {
    readonly have: string;
    readonly want: string;
    constructor(haveType: string, wantType: string, message?: string);
    toJSON(): unknown;
    get code(): string;
}
declare class InvalidTypeErrorCodec extends TypeCheckingCodec<InvalidTypeError> {
    readonly encoder: Converter<InvalidTypeError, unknown>;
    readonly decoder: Converter<unknown, InvalidTypeError>;
}
export declare const invalidTypeErrorCodec: InvalidTypeErrorCodec;
export {};
