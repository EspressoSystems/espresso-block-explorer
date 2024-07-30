import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { EspressoError } from '@/errors/EspressoError';
import { espressoErrorCodec } from '@/errors/registry';
import CappuccinoNodeValidatorResponse from './node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from './node_validator_response_codec';
import WebWorkerLifeCycleResponse from './web_worker_life_cycle_response';
import { webWorkerLifeCycleResponseCodec } from './web_worker_lifecycle_response_codec';

export abstract class WebWorkerProxyResponse {}

export const kNodeValidatorResponseType = 'NodeValidatorResponse' as const;

export class NodeValidatorResponse extends WebWorkerProxyResponse {
  public readonly response: CappuccinoNodeValidatorResponse;

  constructor(response: CappuccinoNodeValidatorResponse) {
    super();
    this.response = response;
  }

  toJson() {
    return nodeValidatorResponseCodec.encode(this);
  }
}

class NodeValidatorResponseEncoder implements Converter<NodeValidatorResponse> {
  convert(input: NodeValidatorResponse) {
    return {
      [kNodeValidatorResponseType]: cappuccinoNodeValidatorResponseCodec.encode(
        input.response,
      ),
    };
  }
}

class NodeValidatorResponseDecoder
  implements Converter<unknown, NodeValidatorResponse>
{
  convert(input: unknown): NodeValidatorResponse {
    assertRecordWithKeys(input, kNodeValidatorResponseType);

    const response = input[kNodeValidatorResponseType];
    return new NodeValidatorResponse(
      cappuccinoNodeValidatorResponseCodec.decode(response),
    );
  }
}

class NodeValidatorResponseCodec extends TypeCheckingCodec<
  NodeValidatorResponse,
  ReturnType<InstanceType<new () => NodeValidatorResponseEncoder>['convert']>
> {
  readonly encoder = new NodeValidatorResponseEncoder();
  readonly decoder = new NodeValidatorResponseDecoder();
}

export const nodeValidatorResponseCodec = new NodeValidatorResponseCodec();

export class LifeCycleResponse extends WebWorkerProxyResponse {
  public readonly response: WebWorkerLifeCycleResponse;

  constructor(response: WebWorkerLifeCycleResponse) {
    super();
    this.response = response;
  }

  toJson() {
    return webWorkerLifeCycleResponseCodec.encode(this);
  }
}

export const kLifeCycleResponseType = 'LifeCycleResponse' as const;

class LifeCycleResponseEncoder implements Converter<LifeCycleResponse> {
  convert(input: LifeCycleResponse) {
    return {
      [kLifeCycleResponseType]: webWorkerLifeCycleResponseCodec.encode(
        input.response,
      ),
    };
  }
}

class LifeCycleResponseDecoder
  implements Converter<unknown, LifeCycleResponse>
{
  convert(input: unknown): LifeCycleResponse {
    assertRecordWithKeys(input, kLifeCycleResponseType);

    return new LifeCycleResponse(
      webWorkerLifeCycleResponseCodec.decode(input[kLifeCycleResponseType]),
    );
  }
}

class LifeCycleResponseCodec extends TypeCheckingCodec<
  LifeCycleResponse,
  ReturnType<InstanceType<new () => LifeCycleResponseEncoder>['convert']>
> {
  readonly encoder = new LifeCycleResponseEncoder();
  readonly decoder = new LifeCycleResponseDecoder();
}

export const lifeCycleResponseCodec = new LifeCycleResponseCodec();

export const kErrorResponseType = 'ErrorResponse' as const;

export class ErrorResponse extends WebWorkerProxyResponse {
  public readonly error: EspressoError;

  constructor(error: EspressoError) {
    super();
    this.error = error;
  }

  toJson() {
    return errorResponseCodec.encode(this);
  }
}

class ErrorResponseEncoder implements Converter<ErrorResponse> {
  convert(input: ErrorResponse) {
    return {
      [kErrorResponseType]: espressoErrorCodec.encode(input.error),
    };
  }
}

class ErrorResponseDecoder implements Converter<unknown, ErrorResponse> {
  convert(input: unknown): ErrorResponse {
    assertRecordWithKeys(input, kErrorResponseType);

    return new ErrorResponse(
      espressoErrorCodec.decode(input[kErrorResponseType]),
    );
  }
}

class ErrorResponseCodec extends TypeCheckingCodec<
  ErrorResponse,
  ReturnType<InstanceType<new () => ErrorResponseEncoder>['convert']>
> {
  readonly encoder = new ErrorResponseEncoder();
  readonly decoder = new ErrorResponseDecoder();
}

export const errorResponseCodec = new ErrorResponseCodec();

class NodeValidatorResponseToWebWorkerProxyResponseConverter
  implements Converter<CappuccinoNodeValidatorResponse, WebWorkerProxyResponse>
{
  convert(input: CappuccinoNodeValidatorResponse): WebWorkerProxyResponse {
    return new NodeValidatorResponse(input);
  }
}

export const nodeValidatorResponseToWebWorkerProxyResponseConverter =
  new NodeValidatorResponseToWebWorkerProxyResponseConverter();

class LifeCycleResponseToWebWorkerProxyResponseConverter
  implements Converter<WebWorkerLifeCycleResponse, WebWorkerProxyResponse>
{
  convert(input: WebWorkerLifeCycleResponse): WebWorkerProxyResponse {
    return new LifeCycleResponse(input);
  }
}

export const lifeCycleResponseToWebWorkerProxyResponseConverter =
  new LifeCycleResponseToWebWorkerProxyResponseConverter();

class EspressoErrorResponseToWebWorkerProxyResponseConverter
  implements Converter<unknown, WebWorkerProxyResponse>
{
  convert(input: EspressoError): WebWorkerProxyResponse {
    return new ErrorResponse(input);
  }
}

export const espressoErrorResponseToWebWorkerProxyResponseConverter =
  new EspressoErrorResponseToWebWorkerProxyResponseConverter();
