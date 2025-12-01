import { assertInstanceOf } from '@/assert/assert';
import { breakpoint } from '@/assert/debugger';
import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  isRecord,
  isUnknown,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { stringCodec } from '@/convert/codec/string';
import {
  Completer,
  createCompleter,
} from '@/data_structures/async/completer/Completer';
import { EspressoError } from '@/errors/EspressoError';
import InvalidInputError from '@/errors/InvalidInputError';
import InvalidTypeError from '@/errors/InvalidTypeError';
import NoCompleterFoundForRequestID from '@/errors/NoCompleterFoundForRequestID';
import { espressoErrorCodec } from '@/errors/registry';
import WebWorkerErrorResponse from '@/errors/WebWorkerErrorResponse';

/**
 * RequestID is a unique identifier for a request sent to a Web Worker.
 */
export type RequestID = number;

/**
 * requestIDCodec is the Codec for encoding and decoding the RequestID
 * as a JSON value.
 */
const requestIDJSONCodec = numberCodec;

/**
 * WebWorkerRequest represents a request sent to a Web Worker.
 */
export class WebWorkerRequest<
  API extends string = string,
  Method extends string = string,
  Param = unknown,
> {
  requestID: RequestID;
  api: API;
  method: Method;
  param: Param;

  constructor(requestID: RequestID, api: API, method: Method, param: Param) {
    this.requestID = requestID;
    this.api = api;
    this.method = method;
    this.param = param;
  }

  toJSON() {
    return {
      requestID: this.requestID,
      api: this.api,
      method: this.method,
      param: this.param,
    };
  }
}

/**
 * WebWorkerRequestJSONDecoder is the Codec for encoding and decoding
 * WebWorkerRequest as a JSON value.
 */
class WebWorkerRequestJSONDecoder implements Converter<
  unknown,
  WebWorkerRequest
> {
  convert(input: unknown): WebWorkerRequest {
    assertRecordWithKeys(input, 'requestID', 'api', 'method', 'param');

    return new WebWorkerRequest(
      requestIDJSONCodec.decode(input.requestID),
      stringCodec.decode(input.api),
      stringCodec.decode(input.method),
      input.param,
    );
  }
}

/**
 * WebWorkerRequestJSONEncoder is the Converter for encoding
 * WebWorkerRequest to a JSON value.
 */
class WebWorkerRequestJSONEncoder implements Converter<WebWorkerRequest> {
  convert(input: WebWorkerRequest) {
    assertInstanceOf(input, WebWorkerRequest);

    return {
      requestID: requestIDJSONCodec.encode(input.requestID),
      api: stringCodec.encode(input.api),
      method: stringCodec.encode(input.method),
      param: input.param,
    };
  }
}

/**
 * WebWorkerRequestJSONCodec is the Codec for encoding and decoding
 * WebWorkerRequest as a JSON value.
 */
class WebWorkerRequestJSONCodec extends TypeCheckingCodec<
  WebWorkerRequest,
  ReturnType<InstanceType<new () => WebWorkerRequestJSONEncoder>['convert']>
> {
  readonly encoder = new WebWorkerRequestJSONEncoder();
  readonly decoder = new WebWorkerRequestJSONDecoder();
}

/**
 * webWorkerRequestJSONCodec is a shared instance of WebWorkerRequestCodec
 * for encoding and decoding WebWorkerRequest.
 */
export const webWorkerRequestJSONCodec = new WebWorkerRequestJSONCodec();

/**
 * WebWorkerResponse is the base class for responses from a Web Worker.
 * It can be either a success or an error response.
 */
export abstract class WebWorkerResponse {
  readonly requestID: RequestID;
  constructor(requestID: RequestID) {
    this.requestID = requestID;
  }
  abstract toJSON(): unknown;
}

/**
 * WebWorkerResponseSuccess represents a successful response from a Web Worker.
 */
export class WebWorkerResponseSuccess extends WebWorkerResponse {
  readonly response: unknown;

  constructor(requestID: RequestID, response: unknown) {
    super(requestID);
    this.response = response;
  }

  toJSON() {
    return webWorkerResponseSuccessJSONCodec.encode(this);
  }
}

/**
 * WebWorkerResponseSuccessJSONDecoder is the Codec for encoding and decoding
 * WebWorkerResponseSuccess as a JSON value.
 */
class WebWorkerResponseSuccessJSONDecoder implements Converter<
  unknown,
  WebWorkerResponseSuccess
> {
  convert(input: unknown): WebWorkerResponseSuccess {
    assertRecordWithKeys(input, 'requestID', 'response');

    return new WebWorkerResponseSuccess(
      requestIDJSONCodec.decode(input.requestID),
      input.response,
    );
  }
}

/**
 * WebWorkerResponseSuccessJSONEncoder is the Converter for encoding
 * WebWorkerResponseSuccess to a JSON value.
 */
class WebWorkerResponseSuccessJSONEncoder implements Converter<WebWorkerResponseSuccess> {
  convert(input: WebWorkerResponseSuccess) {
    assertInstanceOf(input, WebWorkerResponseSuccess);

    return {
      requestID: requestIDJSONCodec.encode(input.requestID),
      response: input.response,
    };
  }
}

/**
 * WebWorkerResponseSuccessJSONCodec is the Codec for encoding and decoding
 * WebWorkerResponseSuccess as a JSON value.
 */
class WebWorkerResponseSuccessJSONCodec extends TypeCheckingCodec<
  WebWorkerResponseSuccess,
  ReturnType<
    InstanceType<new () => WebWorkerResponseSuccessJSONEncoder>['convert']
  >
> {
  readonly encoder = new WebWorkerResponseSuccessJSONEncoder();
  readonly decoder = new WebWorkerResponseSuccessJSONDecoder();
}

/**
 * webWorkerResponseSuccessJSONCodec is a shared instance of
 * WebWorkerResponseSuccessJSONCodec for encoding and decoding
 * WebWorkerResponseSuccess.
 */
export const webWorkerResponseSuccessJSONCodec =
  new WebWorkerResponseSuccessJSONCodec();

/**
 * WebWorkerResponseError represents an error response from a Web Worker.
 */
export class WebWorkerResponseError extends WebWorkerResponse {
  readonly error: EspressoError;

  constructor(requestID: RequestID, error: EspressoError) {
    super(requestID);
    this.error = error;
  }

  toJSON() {
    return webWorkerResponseErrorJSONCodec.encode(this);
  }
}

/**
 * WebWorkerResponseErrorJSONDecoder is the Codec for encoding and decoding
 * WebWorkerResponseError as a JSON value.
 */
class WebWorkerResponseErrorJSONDecoder implements Converter<
  unknown,
  WebWorkerResponseError
> {
  convert(input: unknown): WebWorkerResponseError {
    assertRecordWithKeys(input, 'requestID', 'error');

    return new WebWorkerResponseError(
      requestIDJSONCodec.decode(input.requestID),
      espressoErrorCodec.decode(input.error),
    );
  }
}

/**
 * WebWorkerResponseErrorJSONEncoder is the Converter for encoding
 * WebWorkerResponseError to a JSON value.
 */
class WebWorkerResponseErrorJSONEncoder implements Converter<WebWorkerResponseError> {
  convert(input: WebWorkerResponseError) {
    assertInstanceOf(input, WebWorkerResponseError);

    return {
      requestID: requestIDJSONCodec.encode(input.requestID),
      error: espressoErrorCodec.encode(input.error),
    };
  }
}

/**
 * WebWorkerResponseErrorJSONCodec is the Codec for encoding and decoding
 * WebWorkerResponseError as a JSON value.
 */
class WebWorkerResponseErrorJSONCodec extends TypeCheckingCodec<
  WebWorkerResponseError,
  ReturnType<
    InstanceType<new () => WebWorkerResponseErrorJSONEncoder>['convert']
  >
> {
  readonly encoder = new WebWorkerResponseErrorJSONEncoder();
  readonly decoder = new WebWorkerResponseErrorJSONDecoder();
}

/**
 * webWorkerResponseErrorJSONCodec is a shared instance of
 * WebWorkerResponseErrorJSONCodec for encoding and decoding
 * WebWorkerResponseError.
 */
export const webWorkerResponseErrorJSONCodec =
  new WebWorkerResponseErrorJSONCodec();

/**
 * WebWorkerResponseJSONDecoder is the Codec for encoding and decoding
 * WebWorkerResponse (either success or error) as a JSON value.
 */
class WebWorkerResponseJSONDecoder implements Converter<
  unknown,
  WebWorkerResponse
> {
  convert(input: unknown): WebWorkerResponse {
    if (isRecord(input, 'response', isUnknown)) {
      return webWorkerResponseSuccessJSONCodec.decode(input);
    }

    if (isRecord(input, 'error', isUnknown)) {
      return webWorkerResponseErrorJSONCodec.decode(input);
    }

    throw new InvalidInputError();
  }
}

/**
 * WebWorkerResponseJSONEncoder is the Converter for encoding
 * WebWorkerResponse to a JSON value.
 */
class WebWorkerResponseJSONEncoder implements Converter<WebWorkerResponse> {
  convert(input: WebWorkerResponse) {
    assertInstanceOf(input, WebWorkerResponse);

    return input.toJSON();
  }
}

/**
 * WebWorkerResponseJSONCodec is the Codec for encoding and decoding
 * WebWorkerResponse (either success or error) as a JSON value.
 */
class WebWorkerResponseJSONCodec extends TypeCheckingCodec<
  WebWorkerResponse,
  ReturnType<InstanceType<new () => WebWorkerResponseJSONEncoder>['convert']>
> {
  readonly encoder = new WebWorkerResponseJSONEncoder();
  readonly decoder = new WebWorkerResponseJSONDecoder();
}

/**
 * webWorkerResponseJSONCodec is a shared instance of
 * WebWorkerResponseJSONCodec for encoding and decoding
 * WebWorkerResponse.
 */
export const webWorkerResponseJSONCodec = new WebWorkerResponseJSONCodec();

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
export class AsyncRequestHelper {
  private worker: Worker;
  private nextRequestID: RequestID = 0;
  private requestCompleters: Map<RequestID, Completer<WebWorkerResponse>> =
    new Map();

  constructor(worker: Worker) {
    this.worker = worker;
    worker.addEventListener('message', this.handleMessage.bind(this));
    worker.addEventListener('messageerror', this.handleMessageError.bind(this));
    worker.addEventListener('error', this.handleError.bind(this));
  }

  /**
   * submitRequest submits a request to the Web Worker and returns
   * a Promise that resolves with the response data once the request
   * is completed.
   */
  async submitRequest<
    T,
    API extends string = string,
    Method extends string = string,
    Param = unknown,
  >(
    codec: Codec<T, unknown>,
    api: API,
    method: Method,
    param: Param,
  ): Promise<T> {
    const [id, completer] = this.nextRequest();
    try {
      this.worker.postMessage(
        webWorkerRequestJSONCodec.encode(
          new WebWorkerRequest(id, api, method, param),
        ),
      );

      return await completer.promise.then((result) => {
        if (result instanceof WebWorkerResponseError) {
          throw new WebWorkerErrorResponse(result.error);
        }

        if (result instanceof WebWorkerResponseSuccess) {
          const { response } = result;
          return codec.decode(response);
        }

        throw new InvalidTypeError(typeof result, 'WebWorkerResponse');
      });
    } finally {
      this.requestCompleters.delete(id);
    }
  }

  /**
   * nextRequest generates the next unique RequestID and
   * creates a Completer for the request.
   */
  private nextRequest(): [number, Completer<WebWorkerResponse>] {
    const id = this.nextRequestID++;
    const completer = createCompleter<WebWorkerResponse>();
    this.requestCompleters.set(id, completer);
    return [id, completer];
  }

  /**
   * handleMessage handles incoming messages from the Web Worker,
   * matches them to the corresponding request using the RequestID,
   * and completes the associated Completer with the response data.
   */
  handleMessage(event: MessageEvent) {
    const workerResponse = webWorkerResponseJSONCodec.decode(event.data);
    const completer = this.requestCompleters.get(workerResponse.requestID);
    if (completer === undefined) {
      throw new NoCompleterFoundForRequestID(workerResponse.requestID);
    }

    completer.complete(workerResponse);
  }

  /**
   * handleMessageError handles errors that occur during message
   * processing from the Web Worker, completing the associated
   * Completer with an error response.
   */
  handleMessageError(event: MessageEvent) {
    const workerResponse = webWorkerResponseJSONCodec.decode(event.data);
    const completer = this.requestCompleters.get(workerResponse.requestID);
    if (completer === undefined) {
      throw new NoCompleterFoundForRequestID(workerResponse.requestID);
    }

    completer.completeError(workerResponse);
  }

  /**
   * handleError handles errors that occur in the Web Worker
   */
  handleError(event: ErrorEvent) {
    breakpoint();
    console.error('encountered error setting up Web worker', event);
  }
}
