import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  CappuccinoConnectionClosed,
  cappuccinoConnectionClosedCodec,
  kCappuccinoConnectionClosedType,
} from './connection_closed';
import {
  CappuccinoConnectionConnecting,
  cappuccinoConnectionConnectingCodec,
  kCappuccinoConnectionConnectingType,
} from './connection_connecting';
import {
  CappuccinoConnectionOpened,
  cappuccinoConnectionOpenedCodec,
  kCappuccinoConnectionOpenedType,
} from './connection_opened';
import WebWorkerLifeCycleResponse from './web_worker_life_cycle_response';

class WebWorkerLifeCycleResponseDecoder
  implements Converter<unknown, WebWorkerLifeCycleResponse>
{
  convert(input: unknown): WebWorkerLifeCycleResponse {
    // Non Server Based Messages
    // This is in-band, technically, not the greatest approach.
    if (input === kCappuccinoConnectionOpenedType) {
      return cappuccinoConnectionOpenedCodec.decode(input);
    }
    if (input === kCappuccinoConnectionClosedType) {
      return cappuccinoConnectionClosedCodec.decode(input);
    }
    if (input === kCappuccinoConnectionConnectingType) {
      return cappuccinoConnectionConnectingCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class WebWorkerLifeCycleResponseEncoder
  implements Converter<WebWorkerLifeCycleResponse>
{
  convert(input: WebWorkerLifeCycleResponse) {
    if (input instanceof CappuccinoConnectionOpened) {
      return cappuccinoConnectionOpenedCodec.encode(input);
    }
    if (input instanceof CappuccinoConnectionClosed) {
      return cappuccinoConnectionClosedCodec.encode(input);
    }
    if (input instanceof CappuccinoConnectionConnecting) {
      return cappuccinoConnectionConnectingCodec.encode(input);
    }

    throw new UnimplementedError();
  }
}

class WebWorkerLifeCycleResponseCodec extends TypeCheckingCodec<
  WebWorkerLifeCycleResponse,
  ReturnType<
    InstanceType<new () => WebWorkerLifeCycleResponseEncoder>['convert']
  >
> {
  readonly encoder = new WebWorkerLifeCycleResponseEncoder();
  readonly decoder = new WebWorkerLifeCycleResponseDecoder();
}

export const webWorkerLifeCycleResponseCodec =
  new WebWorkerLifeCycleResponseCodec();
