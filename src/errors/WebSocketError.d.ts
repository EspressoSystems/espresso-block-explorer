import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';
/**
 * WebSocketError is an error class that represents and wraps a general
 * WebSocketError that doesn't have a more specific error representation.
 */
export default class WebSocketError extends BaseError {
    cause: unknown;
    constructor(cause: unknown, message?: string);
    get code(): string;
}
declare class WebSocketErrorCodec extends TypeCheckingCodec<WebSocketError> {
    readonly encoder: Converter<WebSocketError, unknown>;
    readonly decoder: Converter<unknown, WebSocketError>;
}
export declare const bufferFullErrorCodec: WebSocketErrorCodec;
export {};
