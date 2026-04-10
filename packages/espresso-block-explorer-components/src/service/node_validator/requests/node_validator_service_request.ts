import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { WebWorkerProxyRequest } from '@/models/web_worker/web_worker_proxy_request';
import { default as NodeValidatorRequest } from './node_validator_request';
import { nodeValidatorRequestCodec } from './node_validator_request_codec';

export const kNodeValidatorRequestType = 'NodeValidatorRequest' as const;

export class NodeValidatorServiceRequest extends WebWorkerProxyRequest {
  public readonly request: NodeValidatorRequest;
  get type() {
    return kNodeValidatorRequestType;
  }

  constructor(request: NodeValidatorRequest) {
    super();
    this.request = request;
  }

  toJSON() {
    return nodeValidatorServiceRequestCodec.encode(this);
  }
}

class NodeValidatorServiceRequestEncoder implements Converter<NodeValidatorServiceRequest> {
  convert(input: NodeValidatorServiceRequest) {
    return {
      [kNodeValidatorRequestType]: nodeValidatorRequestCodec.encode(
        input.request,
      ),
    };
  }
}

class NodeValidatorServiceRequestDecoder implements Converter<
  unknown,
  NodeValidatorServiceRequest
> {
  convert(input: unknown) {
    assertRecordWithKeys(input, kNodeValidatorRequestType);

    return new NodeValidatorServiceRequest(
      nodeValidatorRequestCodec.decode(input[kNodeValidatorRequestType]),
    );
  }
}

class NodeValidatorServiceRequestCodec extends TypeCheckingCodec<
  NodeValidatorServiceRequest,
  ReturnType<
    InstanceType<new () => NodeValidatorServiceRequestEncoder>['convert']
  >
> {
  readonly encoder = new NodeValidatorServiceRequestEncoder();
  readonly decoder = new NodeValidatorServiceRequestDecoder();
}

export const nodeValidatorServiceRequestCodec =
  new NodeValidatorServiceRequestCodec();

class NodeValidatorRequestToWebWorkerProxyRequestConverter implements Converter<
  NodeValidatorRequest,
  NodeValidatorServiceRequest
> {
  convert(input: NodeValidatorRequest) {
    return new NodeValidatorServiceRequest(input);
  }
}

export const nodeValidatorRequestToWebWorkerProxyRequestConverter =
  new NodeValidatorRequestToWebWorkerProxyRequestConverter();
