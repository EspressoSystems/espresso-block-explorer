import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import CappuccinoNodeValidatorRequest from './node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from './node_validator_request_codec';
import WebWorkerLifeCycleRequest from './web_worker_life_cycle_request';
import { webWorkerLifeCycleRequestCodec } from './web_worker_life_cycle_request_codec';

export abstract class WebWorkerProxyRequest {}

export const kLifeCycleRequestType = 'LifeCycleRequest' as const;

export class LifeCycleRequest extends WebWorkerProxyRequest {
  public readonly request: WebWorkerLifeCycleRequest;

  constructor(request: WebWorkerLifeCycleRequest) {
    super();
    this.request = request;
  }

  toJson() {
    return lifeCycleRequestCodec.encode(this);
  }
}

class LifeCycleRequestEncoder implements Converter<LifeCycleRequest> {
  convert(input: LifeCycleRequest) {
    return {
      [kLifeCycleRequestType]: webWorkerLifeCycleRequestCodec.encode(
        input.request,
      ),
    };
  }
}

class LifeCycleRequestDecoder implements Converter<unknown, LifeCycleRequest> {
  convert(input: unknown) {
    assertRecordWithKeys(input, kLifeCycleRequestType);

    return new LifeCycleRequest(
      webWorkerLifeCycleRequestCodec.decode(input[kLifeCycleRequestType]),
    );
  }
}

class LifeCycleRequestCodec extends TypeCheckingCodec<
  LifeCycleRequest,
  ReturnType<InstanceType<new () => LifeCycleRequestEncoder>['convert']>
> {
  readonly encoder = new LifeCycleRequestEncoder();
  readonly decoder = new LifeCycleRequestDecoder();
}

export const lifeCycleRequestCodec = new LifeCycleRequestCodec();

export const kNodeValidatorRequestType = 'NodeValidatorRequest' as const;

export class NodeValidatorRequest extends WebWorkerProxyRequest {
  public readonly request: CappuccinoNodeValidatorRequest;

  constructor(request: CappuccinoNodeValidatorRequest) {
    super();
    this.request = request;
  }

  toJson() {
    return nodeValidatorRequestCodec.encode(this);
  }
}

class NodeValidatorRequestEncoder implements Converter<NodeValidatorRequest> {
  convert(input: NodeValidatorRequest) {
    return {
      [kNodeValidatorRequestType]: cappuccinoNodeValidatorRequestCodec.encode(
        input.request,
      ),
    };
  }
}

class NodeValidatorRequestDecoder
  implements Converter<unknown, NodeValidatorRequest>
{
  convert(input: unknown) {
    assertRecordWithKeys(input, kNodeValidatorRequestType);

    return new NodeValidatorRequest(
      cappuccinoNodeValidatorRequestCodec.decode(
        input[kNodeValidatorRequestType],
      ),
    );
  }
}

class NodeValidatorRequestCodec extends TypeCheckingCodec<
  NodeValidatorRequest,
  ReturnType<InstanceType<new () => NodeValidatorRequestEncoder>['convert']>
> {
  readonly encoder = new NodeValidatorRequestEncoder();
  readonly decoder = new NodeValidatorRequestDecoder();
}

export const nodeValidatorRequestCodec = new NodeValidatorRequestCodec();

class LifeCycleRequestToWebWorkerProxyRequestConverter
  implements Converter<WebWorkerLifeCycleRequest, LifeCycleRequest>
{
  convert(input: WebWorkerLifeCycleRequest) {
    return new LifeCycleRequest(input);
  }
}

export const lifeCycleRequestToWebWorkerProxyRequestConverter =
  new LifeCycleRequestToWebWorkerProxyRequestConverter();

class NodeValidatorRequestToWebWorkerProxyRequestConverter
  implements Converter<CappuccinoNodeValidatorRequest, NodeValidatorRequest>
{
  convert(input: CappuccinoNodeValidatorRequest) {
    return new NodeValidatorRequest(input);
  }
}

export const nodeValidatorRequestToWebWorkerProxyRequestConverter =
  new NodeValidatorRequestToWebWorkerProxyRequestConverter();
