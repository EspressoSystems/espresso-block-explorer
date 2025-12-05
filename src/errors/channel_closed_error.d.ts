import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './base_error';
/**
 * ChannelClosedError is an error that indicates that the buffered channel
 * has been closed and can no longer be read from or written to.
 */
export default class ChannelClosedError extends BaseError {
    constructor(message?: string);
    get code(): string;
}
declare class ChannelClosedErrorCodec extends TypeCheckingCodec<ChannelClosedError> {
    readonly encoder: Converter<ChannelClosedError, unknown>;
    readonly decoder: Converter<unknown, ChannelClosedError>;
}
export declare const invalidHexStringErrorCodec: ChannelClosedErrorCodec;
export {};
