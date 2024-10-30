import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import WebworkerLifeCycleResponse from './web_worker_life_cycle_response';

/**
 * kCappuccinoConnectionClosedType is the type string for the
 * CappuccinoConnectionClosed class.
 */
export const kCappuccinoConnectionClosedType = 'ConnectionClosed' as const;

/**
 * CappuccinoConnectionClosed is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export class CappuccinoConnectionClosed extends WebworkerLifeCycleResponse {
  toJSON() {
    return cappuccinoConnectionClosedCodec.encode(this);
  }
}

class CappuccinoConnectionClosedDecoder
  implements Converter<unknown, CappuccinoConnectionClosed>
{
  convert(input: unknown): CappuccinoConnectionClosed {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    if (input !== kCappuccinoConnectionClosedType) {
      throw new InvalidTypeError(input, kCappuccinoConnectionClosedType);
    }

    return new CappuccinoConnectionClosed();
  }
}

class CappuccinoConnectionClosedEncoder
  implements Converter<CappuccinoConnectionClosed>
{
  convert() {
    return kCappuccinoConnectionClosedType;
  }
}

class CappuccinoConnectionClosedCodec extends TypeCheckingCodec<
  CappuccinoConnectionClosed,
  ReturnType<
    InstanceType<new () => CappuccinoConnectionClosedEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoConnectionClosedEncoder();
  readonly decoder = new CappuccinoConnectionClosedDecoder();
}

export const cappuccinoConnectionClosedCodec =
  new CappuccinoConnectionClosedCodec();
