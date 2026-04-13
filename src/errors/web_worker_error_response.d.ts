import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { BaseError } from './base_error';
export declare class WebWorkerErrorResponse extends BaseError {
    readonly error: unknown;
    constructor(error: unknown, message?: string);
    toJSON(): unknown;
    get code(): string;
}
declare class WebWorkerErrorResponseCodec extends TypeCheckingCodec<WebWorkerErrorResponse> {
    readonly encoder: Converter<WebWorkerErrorResponse, unknown>;
    readonly decoder: Converter<unknown, WebWorkerErrorResponse>;
}
export declare const webWorkerErrorResponseCodec: WebWorkerErrorResponseCodec;
export {};
