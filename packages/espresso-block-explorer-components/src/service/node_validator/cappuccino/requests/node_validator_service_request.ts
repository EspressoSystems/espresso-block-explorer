import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { WebWorkerProxyRequest } from '@/models/web_worker/web_worker_proxy_request';
import CappuccinoNodeValidatorRequest from './node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from './node_validator_request_codec';

export const kNodeValidatorRequestType = 'NodeValidatorRequest' as const;

export class NodeValidatorServiceRequest extends WebWorkerProxyRequest {
  public readonly request: CappuccinoNodeValidatorRequest;
  get type() {
    return kNodeValidatorRequestType;
  }

  constructor(request: CappuccinoNodeValidatorRequest) {
    super();
    this.request = request;
  }

  toJSON() {
    return nodeValidatorServiceRequestCodec.encode(this);
  }
}

class NodeValidatorServiceRequestEncoder
  implements Converter<NodeValidatorServiceRequest>
{
  convert(input: NodeValidatorServiceRequest) {
    return {
      [kNodeValidatorRequestType]: cappuccinoNodeValidatorRequestCodec.encode(
        input.request,
      ),
    };
  }
}

class NodeValidatorServiceRequestDecoder
  implements Converter<unknown, NodeValidatorServiceRequest>
{
  convert(input: unknown) {
    assertRecordWithKeys(input, kNodeValidatorRequestType);

    return new NodeValidatorServiceRequest(
      cappuccinoNodeValidatorRequestCodec.decode(
        input[kNodeValidatorRequestType],
      ),
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

class NodeValidatorRequestToWebWorkerProxyRequestConverter
  implements
    Converter<CappuccinoNodeValidatorRequest, NodeValidatorServiceRequest>
{
  convert(input: CappuccinoNodeValidatorRequest) {
    return new NodeValidatorServiceRequest(input);
  }
}

export const nodeValidatorRequestToWebWorkerProxyRequestConverter =
  new NodeValidatorRequestToWebWorkerProxyRequestConverter();
