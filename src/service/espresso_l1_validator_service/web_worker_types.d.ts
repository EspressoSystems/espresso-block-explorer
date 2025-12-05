import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';
import { EspressoError } from '../../../../../../../../../../src/errors/espresso_error';
/**
 * RequestID is a unique identifier for a request sent to a Web Worker.
 */
export type RequestID = number;
/**
 * WebWorkerRequest represents a request sent to a Web Worker.
 */
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
/**
 * WebWorkerRequestJSONDecoder is the Codec for encoding and decoding
 * WebWorkerRequest as a JSON value.
 */
declare class WebWorkerRequestJSONDecoder implements Converter<unknown, WebWorkerRequest> {
    convert(input: unknown): WebWorkerRequest;
}
/**
 * WebWorkerRequestJSONEncoder is the Converter for encoding
 * WebWorkerRequest to a JSON value.
 */
declare class WebWorkerRequestJSONEncoder implements Converter<WebWorkerRequest> {
    convert(input: WebWorkerRequest): {
        requestID: number;
        api: string;
        method: string;
        param: unknown;
    };
}
/**
 * WebWorkerRequestJSONCodec is the Codec for encoding and decoding
 * WebWorkerRequest as a JSON value.
 */
declare class WebWorkerRequestJSONCodec extends TypeCheckingCodec<WebWorkerRequest, ReturnType<InstanceType<new () => WebWorkerRequestJSONEncoder>['convert']>> {
    readonly encoder: WebWorkerRequestJSONEncoder;
    readonly decoder: WebWorkerRequestJSONDecoder;
}
/**
 * webWorkerRequestJSONCodec is a shared instance of WebWorkerRequestCodec
 * for encoding and decoding WebWorkerRequest.
 */
export declare const webWorkerRequestJSONCodec: WebWorkerRequestJSONCodec;
/**
 * WebWorkerResponse is the base class for responses from a Web Worker.
 * It can be either a success or an error response.
 */
export declare abstract class WebWorkerResponse {
    readonly requestID: RequestID;
    constructor(requestID: RequestID);
    abstract toJSON(): unknown;
}
/**
 * WebWorkerResponseSuccess represents a successful response from a Web Worker.
 */
export declare class WebWorkerResponseSuccess extends WebWorkerResponse {
    readonly response: unknown;
    constructor(requestID: RequestID, response: unknown);
    toJSON(): {
        requestID: number;
        response: unknown;
    };
}
/**
 * WebWorkerResponseSuccessJSONDecoder is the Codec for encoding and decoding
 * WebWorkerResponseSuccess as a JSON value.
 */
declare class WebWorkerResponseSuccessJSONDecoder implements Converter<unknown, WebWorkerResponseSuccess> {
    convert(input: unknown): WebWorkerResponseSuccess;
}
/**
 * WebWorkerResponseSuccessJSONEncoder is the Converter for encoding
 * WebWorkerResponseSuccess to a JSON value.
 */
declare class WebWorkerResponseSuccessJSONEncoder implements Converter<WebWorkerResponseSuccess> {
    convert(input: WebWorkerResponseSuccess): {
        requestID: number;
        response: unknown;
    };
}
/**
 * WebWorkerResponseSuccessJSONCodec is the Codec for encoding and decoding
 * WebWorkerResponseSuccess as a JSON value.
 */
declare class WebWorkerResponseSuccessJSONCodec extends TypeCheckingCodec<WebWorkerResponseSuccess, ReturnType<InstanceType<new () => WebWorkerResponseSuccessJSONEncoder>['convert']>> {
    readonly encoder: WebWorkerResponseSuccessJSONEncoder;
    readonly decoder: WebWorkerResponseSuccessJSONDecoder;
}
/**
 * webWorkerResponseSuccessJSONCodec is a shared instance of
 * WebWorkerResponseSuccessJSONCodec for encoding and decoding
 * WebWorkerResponseSuccess.
 */
export declare const webWorkerResponseSuccessJSONCodec: WebWorkerResponseSuccessJSONCodec;
/**
 * WebWorkerResponseError represents an error response from a Web Worker.
 */
export declare class WebWorkerResponseError extends WebWorkerResponse {
    readonly error: EspressoError;
    constructor(requestID: RequestID, error: EspressoError);
    toJSON(): {
        requestID: number;
        error: unknown;
    };
}
/**
 * WebWorkerResponseErrorJSONDecoder is the Codec for encoding and decoding
 * WebWorkerResponseError as a JSON value.
 */
declare class WebWorkerResponseErrorJSONDecoder implements Converter<unknown, WebWorkerResponseError> {
    convert(input: unknown): WebWorkerResponseError;
}
/**
 * WebWorkerResponseErrorJSONEncoder is the Converter for encoding
 * WebWorkerResponseError to a JSON value.
 */
declare class WebWorkerResponseErrorJSONEncoder implements Converter<WebWorkerResponseError> {
    convert(input: WebWorkerResponseError): {
        requestID: number;
        error: unknown;
    };
}
/**
 * WebWorkerResponseErrorJSONCodec is the Codec for encoding and decoding
 * WebWorkerResponseError as a JSON value.
 */
declare class WebWorkerResponseErrorJSONCodec extends TypeCheckingCodec<WebWorkerResponseError, ReturnType<InstanceType<new () => WebWorkerResponseErrorJSONEncoder>['convert']>> {
    readonly encoder: WebWorkerResponseErrorJSONEncoder;
    readonly decoder: WebWorkerResponseErrorJSONDecoder;
}
/**
 * webWorkerResponseErrorJSONCodec is a shared instance of
 * WebWorkerResponseErrorJSONCodec for encoding and decoding
 * WebWorkerResponseError.
 */
export declare const webWorkerResponseErrorJSONCodec: WebWorkerResponseErrorJSONCodec;
/**
 * WebWorkerResponseJSONDecoder is the Codec for encoding and decoding
 * WebWorkerResponse (either success or error) as a JSON value.
 */
declare class WebWorkerResponseJSONDecoder implements Converter<unknown, WebWorkerResponse> {
    convert(input: unknown): WebWorkerResponse;
}
/**
 * WebWorkerResponseJSONEncoder is the Converter for encoding
 * WebWorkerResponse to a JSON value.
 */
declare class WebWorkerResponseJSONEncoder implements Converter<WebWorkerResponse> {
    convert(input: WebWorkerResponse): unknown;
}
/**
 * WebWorkerResponseJSONCodec is the Codec for encoding and decoding
 * WebWorkerResponse (either success or error) as a JSON value.
 */
declare class WebWorkerResponseJSONCodec extends TypeCheckingCodec<WebWorkerResponse, ReturnType<InstanceType<new () => WebWorkerResponseJSONEncoder>['convert']>> {
    readonly encoder: WebWorkerResponseJSONEncoder;
    readonly decoder: WebWorkerResponseJSONDecoder;
}
/**
 * webWorkerResponseJSONCodec is a shared instance of
 * WebWorkerResponseJSONCodec for encoding and decoding
 * WebWorkerResponse.
 */
export declare const webWorkerResponseJSONCodec: WebWorkerResponseJSONCodec;
/**
 * AsyncRequestHelper is a helper class that manages asynchronous
 * requests to a Web Worker, handling the encoding and decoding
 * of requests and responses, as well as tracking pending requests
 * and their completions.
 *
 * It is primarily responsible for creating unique RequestIDs, and registering
 * completers for each request, so that when a response is received from the
 * Web Worker, it can be matched to the original request and the appropriate
 * completer can be completed with the response data.
 */
export declare class AsyncRequestHelper {
    private worker;
    private nextRequestID;
    private requestCompleters;
    constructor(worker: Worker);
    /**
     * submitRequest submits a request to the Web Worker and returns
     * a Promise that resolves with the response data once the request
     * is completed.
     */
    submitRequest<T, API extends string = string, Method extends string = string, Param = unknown>(codec: Codec<T, unknown>, api: API, method: Method, param: Param): Promise<T>;
    /**
     * nextRequest generates the next unique RequestID and
     * creates a Completer for the request.
     */
    private nextRequest;
    /**
     * handleMessage handles incoming messages from the Web Worker,
     * matches them to the corresponding request using the RequestID,
     * and completes the associated Completer with the response data.
     */
    handleMessage(event: MessageEvent): void;
    /**
     * handleMessageError handles errors that occur during message
     * processing from the Web Worker, completing the associated
     * Completer with an error response.
     */
    handleMessageError(event: MessageEvent): void;
    /**
     * handleError handles errors that occur in the Web Worker
     */
    handleError(event: ErrorEvent): void;
}
export {};
