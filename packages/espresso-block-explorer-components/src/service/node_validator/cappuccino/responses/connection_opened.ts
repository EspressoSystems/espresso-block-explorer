import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import WebworkerLifeCycleResponse from './web_worker_life_cycle_response';

/**
 * kCappuccinoConnectionOpenedType is the type string for the
 * CappuccinoConnectionOpened class.
 */
export const kCappuccinoConnectionOpenedType = 'ConnectionOpened' as const;

/**
 * CappuccinoConnectionOpened is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export class CappuccinoConnectionOpened extends WebworkerLifeCycleResponse {
  toJSON() {
    return cappuccinoConnectionOpenedCodec.encode(this);
  }
}

class CappuccinoConnectionOpenedDecoder
  implements Converter<unknown, CappuccinoConnectionOpened>
{
  convert(input: unknown): CappuccinoConnectionOpened {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    if (input !== kCappuccinoConnectionOpenedType) {
      throw new InvalidTypeError(input, kCappuccinoConnectionOpenedType);
    }

    return new CappuccinoConnectionOpened();
  }
}

class CappuccinoConnectionOpenedEncoder
  implements Converter<CappuccinoConnectionOpened>
{
  convert() {
    return kCappuccinoConnectionOpenedType;
  }
}

class CappuccinoConnectionOpenedCodec extends TypeCheckingCodec<
  CappuccinoConnectionOpened,
  ReturnType<
    InstanceType<new () => CappuccinoConnectionOpenedEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoConnectionOpenedEncoder();
  readonly decoder = new CappuccinoConnectionOpenedDecoder();
}

export const cappuccinoConnectionOpenedCodec =
  new CappuccinoConnectionOpenedCodec();
