import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { WebWorkerProxyResponse } from '@/models/web_worker/web_worker_proxy_response';
import NodeValidatorResponse from './node_validator_response';
import { nodeValidatorResponseCodec } from './node_validator_response_codec';

export const kNodeValidatorServiceResponseType =
  'NodeValidatorResponse' as const;

export class NodeValidatorServiceResponse extends WebWorkerProxyResponse {
  public readonly response: NodeValidatorResponse;

  get type(): string {
    return kNodeValidatorServiceResponseType;
  }

  constructor(response: NodeValidatorResponse) {
    super();
    this.response = response;
  }

  toJSON() {
    return nodeValidatorServiceResponseCodec.encode(this);
  }
}

class NodeValidatorServiceResponseEncoder implements Converter<NodeValidatorServiceResponse> {
  convert(input: NodeValidatorServiceResponse) {
    return {
      [kNodeValidatorServiceResponseType]: nodeValidatorResponseCodec.encode(
        input.response,
      ),
    };
  }
}

class NodeValidatorServiceResponseDecoder implements Converter<
  unknown,
  NodeValidatorServiceResponse
> {
  convert(input: unknown): NodeValidatorServiceResponse {
    assertRecordWithKeys(input, kNodeValidatorServiceResponseType);

    const response = input[kNodeValidatorServiceResponseType];
    return new NodeValidatorServiceResponse(
      nodeValidatorResponseCodec.decode(response),
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

class NodeValidatorResponseToWebWorkerProxyResponseConverter implements Converter<
  NodeValidatorResponse,
  WebWorkerProxyResponse
> {
  convert(input: NodeValidatorResponse): WebWorkerProxyResponse {
    return new NodeValidatorServiceResponse(input);
  }
}

export const nodeValidatorResponseToWebWorkerProxyResponseConverter =
  new NodeValidatorResponseToWebWorkerProxyResponseConverter();
