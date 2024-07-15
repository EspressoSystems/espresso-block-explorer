import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';
import { EspressoError } from '../../../../../../../../../../src/errors/EspressoError';

export type RequestID = number;
export declare class WebWorkerRequest<API extends string = string, Method extends string = string, Param = unknown> {
    requestID: RequestID;
    api: API;
    method: Method;
    param: Param;
    constructor(requestID: RequestID, api: API, method: Method, param: Param);
    toJSON(): {
        requestID: number;
        api: API;
        method: Method;
        param: Param;
    };
}
declare class WebWorkerRequestDecoder implements Converter<unknown, WebWorkerRequest> {
    convert(input: unknown): WebWorkerRequest;
}
declare class WebWorkerRequestEncoder implements Converter<WebWorkerRequest> {
    convert(input: WebWorkerRequest): {
        requestID: number;
        api: string;
        method: string;
        param: unknown;
    };
}
declare class WebWorkerRequestCodec extends TypeCheckingCodec<WebWorkerRequest, ReturnType<InstanceType<new () => WebWorkerRequestEncoder>['convert']>> {
    readonly encoder: WebWorkerRequestEncoder;
    readonly decoder: WebWorkerRequestDecoder;
}
export declare const webWorkerRequestCodec: WebWorkerRequestCodec;
export declare abstract class WebWorkerResponse {
    readonly requestID: RequestID;
    constructor(requestID: RequestID);
    abstract toJSON(): unknown;
}
export declare class WebWorkerResponseSuccess extends WebWorkerResponse {
    readonly response: unknown;
    constructor(requestID: RequestID, response: unknown);
    toJSON(): {
        requestID: number;
        response: unknown;
    };
}
declare class WebWorkerResponseSuccessDecoder implements Converter<unknown, WebWorkerResponseSuccess> {
    convert(input: unknown): WebWorkerResponseSuccess;
}
declare class WebWorkerResponseSuccessEncoder implements Converter<WebWorkerResponseSuccess> {
    convert(input: WebWorkerResponseSuccess): {
        requestID: number;
        response: unknown;
    };
}
declare class WebWorkerResponseSuccessCodec extends TypeCheckingCodec<WebWorkerResponseSuccess, ReturnType<InstanceType<new () => WebWorkerResponseSuccessEncoder>['convert']>> {
    readonly encoder: WebWorkerResponseSuccessEncoder;
    readonly decoder: WebWorkerResponseSuccessDecoder;
}
export declare const webWorkerResponseSuccessCodec: WebWorkerResponseSuccessCodec;
export declare class WebWorkerResponseError extends WebWorkerResponse {
    readonly error: EspressoError;
    constructor(requestID: RequestID, error: EspressoError);
    toJSON(): {
        requestID: number;
        error: unknown;
    };
}
declare class WebWorkerResponseErrorDecoder implements Converter<unknown, WebWorkerResponseError> {
    convert(input: unknown): WebWorkerResponseError;
}
declare class WebWorkerResponseErrorEncoder implements Converter<WebWorkerResponseError> {
    convert(input: WebWorkerResponseError): {
        requestID: number;
        error: unknown;
    };
}
declare class WebWorkerResponseErrorCodec extends TypeCheckingCodec<WebWorkerResponseError, ReturnType<InstanceType<new () => WebWorkerResponseErrorEncoder>['convert']>> {
    readonly encoder: WebWorkerResponseErrorEncoder;
    readonly decoder: WebWorkerResponseErrorDecoder;
}
export declare const webWorkerResponseErrorCodec: WebWorkerResponseErrorCodec;
declare class WebWorkerResponseDecoder implements Converter<unknown, WebWorkerResponse> {
    convert(input: unknown): WebWorkerResponse;
}
declare class WebWorkerResponseEncoder implements Converter<WebWorkerResponse> {
    convert(input: WebWorkerResponse): unknown;
}
declare class WebWorkerResponseCodec extends TypeCheckingCodec<WebWorkerResponse, ReturnType<InstanceType<new () => WebWorkerResponseEncoder>['convert']>> {
    readonly encoder: WebWorkerResponseEncoder;
    readonly decoder: WebWorkerResponseDecoder;
}
export declare const webWorkerResponseCodec: WebWorkerResponseCodec;
export {};
