import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './base_error';
export default class NoCompleterFoundForRequestID<RequestID = unknown> extends BaseError {
    readonly requestID: RequestID;
    constructor(requestID: RequestID, message?: string);
    toJSON(): unknown;
    get code(): string;
}
declare class NoCompleterFoundForRequestIDCodec extends TypeCheckingCodec<NoCompleterFoundForRequestID> {
    readonly encoder: Converter<NoCompleterFoundForRequestID, unknown>;
    readonly decoder: Converter<unknown, NoCompleterFoundForRequestID>;
}
export declare const noCompleterFoundForRequestIDCodec: NoCompleterFoundForRequestIDCodec;
export {};
