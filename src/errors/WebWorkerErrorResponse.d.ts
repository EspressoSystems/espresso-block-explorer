import { EspressoError } from './EspressoError';
import { default as BaseError } from './BaseError';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';

export default class WebWorkerErrorResponse extends BaseError {
    readonly error: EspressoError;
    constructor(error: EspressoError, message?: string);
    toJSON(): unknown;
}
declare class WebWorkerErrorResponseCodec extends TypeCheckingCodec<WebWorkerErrorResponse> {
    readonly encoder: Converter<WebWorkerErrorResponse, unknown>;
    readonly decoder: Converter<unknown, WebWorkerErrorResponse>;
}
export declare const webWorkerErrorResponseCodec: WebWorkerErrorResponseCodec;
export {};
