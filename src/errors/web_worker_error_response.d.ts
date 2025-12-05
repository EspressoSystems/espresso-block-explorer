import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './base_error';
import { EspressoError } from './espresso_error';
export default class WebWorkerErrorResponse extends BaseError {
    readonly error: EspressoError;
    constructor(error: EspressoError, message?: string);
    toJSON(): unknown;
    get code(): string;
}
declare class WebWorkerErrorResponseCodec extends TypeCheckingCodec<WebWorkerErrorResponse> {
    readonly encoder: Converter<WebWorkerErrorResponse, unknown>;
    readonly decoder: Converter<unknown, WebWorkerErrorResponse>;
}
export declare const webWorkerErrorResponseCodec: WebWorkerErrorResponseCodec;
export {};
