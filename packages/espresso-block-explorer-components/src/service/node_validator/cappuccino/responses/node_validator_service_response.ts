import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { WebWorkerProxyResponse } from '@/models/web_worker/web_worker_proxy_response';
import CappuccinoNodeValidatorResponse from './node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from './node_validator_response_codec';

export const kNodeValidatorServiceResponseType =
  'NodeValidatorResponse' as const;

export class NodeValidatorServiceResponse extends WebWorkerProxyResponse {
  public readonly response: CappuccinoNodeValidatorResponse;

  get type(): string {
    return kNodeValidatorServiceResponseType;
  }

  constructor(response: CappuccinoNodeValidatorResponse) {
    super();
    this.response = response;
  }

  toJson() {
    return nodeValidatorServiceResponseCodec.encode(this);
  }
}

class NodeValidatorServiceResponseEncoder
  implements Converter<NodeValidatorServiceResponse>
{
  convert(input: NodeValidatorServiceResponse) {
    return {
      [kNodeValidatorServiceResponseType]:
        cappuccinoNodeValidatorResponseCodec.encode(input.response),
    };
  }
}

class NodeValidatorServiceResponseDecoder
  implements Converter<unknown, NodeValidatorServiceResponse>
{
  convert(input: unknown): NodeValidatorServiceResponse {
    assertRecordWithKeys(input, kNodeValidatorServiceResponseType);

    const response = input[kNodeValidatorServiceResponseType];
    return new NodeValidatorServiceResponse(
      cappuccinoNodeValidatorResponseCodec.decode(response),
    );
  }
}

class NodeValidatorServiceResponseCodec extends TypeCheckingCodec<
  NodeValidatorServiceResponse,
  ReturnType<
    InstanceType<new () => NodeValidatorServiceResponseEncoder>['convert']
  >
> {
  readonly encoder = new NodeValidatorServiceResponseEncoder();
  readonly decoder = new NodeValidatorServiceResponseDecoder();
}

export const nodeValidatorServiceResponseCodec =
  new NodeValidatorServiceResponseCodec();

class NodeValidatorResponseToWebWorkerProxyResponseConverter
  implements Converter<CappuccinoNodeValidatorResponse, WebWorkerProxyResponse>
{
  convert(input: CappuccinoNodeValidatorResponse): WebWorkerProxyResponse {
    return new NodeValidatorServiceResponse(input);
  }
}

export const nodeValidatorResponseToWebWorkerProxyResponseConverter =
  new NodeValidatorResponseToWebWorkerProxyResponseConverter();
