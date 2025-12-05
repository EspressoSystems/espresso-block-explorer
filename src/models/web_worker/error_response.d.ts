import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';
import { EspressoError } from '../../../../../../../../../../src/errors/espresso_error';
import { WebWorkerProxyResponse } from './web_worker_proxy_response';
export declare const kErrorResponseType: "Error";
/**
 * ErrorResponse represents a WebWorkerProxyResponse that conveys an error
 * has occurred.
 */
export declare class ErrorResponse extends WebWorkerProxyResponse {
    readonly error: EspressoError;
    get type(): string;
    constructor(error: EspressoError);
    toJSON(): {
        Error: unknown;
    };
}
declare class ErrorResponseEncoder implements Converter<ErrorResponse> {
    convert(input: ErrorResponse): {
        Error: unknown;
    };
}
declare class ErrorResponseDecoder implements Converter<unknown, ErrorResponse> {
    convert(input: unknown): ErrorResponse;
}
declare class ErrorResponseCodec extends TypeCheckingCodec<ErrorResponse, ReturnType<InstanceType<new () => ErrorResponseEncoder>['convert']>> {
    readonly encoder: ErrorResponseEncoder;
    readonly decoder: ErrorResponseDecoder;
}
export declare const errorResponseCodec: ErrorResponseCodec;
export {};
