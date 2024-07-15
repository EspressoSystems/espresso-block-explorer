import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';

/**
 * MissingElementError is an error that indicates that a member of a collection
 * was not present.  This generally occurs when the collection lacks the
 * necessary number of elements.
 */
export default class MissingElementError extends BaseError {
    constructor(message?: string);
}
declare class MissingElementErrorCodec extends TypeCheckingCodec<MissingElementError> {
    readonly encoder: Converter<MissingElementError, unknown>;
    readonly decoder: Converter<unknown, MissingElementError>;
}
export declare const missingElementErrorCodec: MissingElementErrorCodec;
export {};
