import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  isRecord,
  isUnknown,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { stringCodec } from '@/convert/codec/string';
import InvalidInputError from '@/errors/InvalidInputError';

export type RequestID = number;
const requestIDCodec = numberCodec;

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

class WebWorkerRequestDecoder implements Converter<unknown, WebWorkerRequest> {
  convert(input: unknown): WebWorkerRequest {
    assertRecordWithKeys(input, 'requestID', 'api', 'method', 'param');

    return new WebWorkerRequest(
      requestIDCodec.decode(input.requestID),
      stringCodec.decode(input.api),
      stringCodec.decode(input.method),
      input.param,
    );
  }
}

class WebWorkerRequestEncoder implements Converter<WebWorkerRequest> {
  convert(input: WebWorkerRequest) {
    assertInstanceOf(input, WebWorkerRequest);

    return {
      requestID: requestIDCodec.encode(input.requestID),
      api: stringCodec.encode(input.api),
      method: stringCodec.encode(input.method),
      param: input.param,
    };
  }
}

class WebWorkerRequestCodec extends TypeCheckingCodec<
  WebWorkerRequest,
  ReturnType<InstanceType<new () => WebWorkerRequestEncoder>['convert']>
> {
  readonly encoder = new WebWorkerRequestEncoder();
  readonly decoder = new WebWorkerRequestDecoder();
}

export const webWorkerRequestCodec = new WebWorkerRequestCodec();

export abstract class WebWorkerResponse {
  readonly requestID: RequestID;
  constructor(requestID: RequestID) {
    this.requestID = requestID;
  }
  abstract toJSON(): unknown;
}

export class WebWorkerResponseSuccess extends WebWorkerResponse {
  readonly response: unknown;

  constructor(requestID: RequestID, response: unknown) {
    super(requestID);
    this.response = response;
  }

  toJSON() {
    return webWorkerResponseSuccessCodec.encode(this);
  }
}

class WebWorkerResponseSuccessDecoder
  implements Converter<unknown, WebWorkerResponseSuccess>
{
  convert(input: unknown): WebWorkerResponseSuccess {
    assertRecordWithKeys(input, 'requestID', 'response');

    return new WebWorkerResponseSuccess(
      requestIDCodec.decode(input.requestID),
      input.response,
    );
  }
}

class WebWorkerResponseSuccessEncoder
  implements Converter<WebWorkerResponseSuccess>
{
  convert(input: WebWorkerResponseSuccess) {
    assertInstanceOf(input, WebWorkerResponseSuccess);

    return {
      requestID: requestIDCodec.encode(input.requestID),
      response: input.response,
    };
  }
}

class WebWorkerResponseSuccessCodec extends TypeCheckingCodec<
  WebWorkerResponseSuccess,
  ReturnType<InstanceType<new () => WebWorkerResponseSuccessEncoder>['convert']>
> {
  readonly encoder = new WebWorkerResponseSuccessEncoder();
  readonly decoder = new WebWorkerResponseSuccessDecoder();
}

export const webWorkerResponseSuccessCodec =
  new WebWorkerResponseSuccessCodec();

export class WebWorkerResponseError extends WebWorkerResponse {
  readonly error: unknown;

  constructor(requestID: RequestID, error: unknown) {
    super(requestID);
    this.error = error;
  }

  toJSON() {
    return webWorkerResponseErrorCodec.encode(this);
  }
}

class WebWorkerResponseErrorDecoder
  implements Converter<unknown, WebWorkerResponseError>
{
  convert(input: unknown): WebWorkerResponseError {
    assertRecordWithKeys(input, 'requestID', 'error');

    return new WebWorkerResponseError(
      requestIDCodec.decode(input.requestID),
      input.error,
    );
  }
}

class WebWorkerResponseErrorEncoder
  implements Converter<WebWorkerResponseError>
{
  convert(input: WebWorkerResponseError) {
    assertInstanceOf(input, WebWorkerResponseError);

    return {
      requestID: requestIDCodec.encode(input.requestID),
      error: input.error,
    };
  }
}

class WebWorkerResponseErrorCodec extends TypeCheckingCodec<
  WebWorkerResponseError,
  ReturnType<InstanceType<new () => WebWorkerResponseErrorEncoder>['convert']>
> {
  readonly encoder = new WebWorkerResponseErrorEncoder();
  readonly decoder = new WebWorkerResponseErrorDecoder();
}

export const webWorkerResponseErrorCodec = new WebWorkerResponseErrorCodec();

class WebWorkerResponseDecoder
  implements Converter<unknown, WebWorkerResponse>
{
  convert(input: unknown): WebWorkerResponse {
    if (isRecord(input, 'response', isUnknown)) {
      return webWorkerResponseSuccessCodec.decode(input);
    }

    if (isRecord(input, 'error', isUnknown)) {
      return webWorkerResponseErrorCodec.decode(input);
    }

    throw new InvalidInputError();
  }
}

class WebWorkerResponseEncoder implements Converter<WebWorkerResponse> {
  convert(input: WebWorkerResponse) {
    assertInstanceOf(input, WebWorkerResponse);

    return input.toJSON();
  }
}

class WebWorkerResponseCodec extends TypeCheckingCodec<
  WebWorkerResponse,
  ReturnType<InstanceType<new () => WebWorkerResponseEncoder>['convert']>
> {
  readonly encoder = new WebWorkerResponseEncoder();
  readonly decoder = new WebWorkerResponseDecoder();
}

export const webWorkerResponseCodec = new WebWorkerResponseCodec();
