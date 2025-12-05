import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './base_error';
/**
 * BufferFullError is an error that indicates that a buffer is at capacity while
 * something was attempted to be added to the buffer.
 */
export default class BufferFullError extends BaseError {
    constructor(message?: string);
    get code(): string;
}
declare class BufferFullErrorCodec extends TypeCheckingCodec<BufferFullError> {
    readonly encoder: Converter<BufferFullError, unknown>;
    readonly decoder: Converter<unknown, BufferFullError>;
}
export declare const bufferFullErrorCodec: BufferFullErrorCodec;
export {};
