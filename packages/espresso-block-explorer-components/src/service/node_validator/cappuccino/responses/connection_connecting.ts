import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * kCappuccinoConnectionConnectingType is the type string for the
 * CappuccinoConnectionConnecting class.
 */
export const kCappuccinoConnectionConnectingType =
  'ConnectionConnecting' as const;

/**
 * CappuccinoConnectionConnecting is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export class CappuccinoConnectionConnecting extends CappuccinoNodeValidatorResponse {
  toJSON() {
    return cappuccinoConnectionConnectingCodec.encode(this);
  }
}

class CappuccinoConnectionConnectingDecoder
  implements Converter<unknown, CappuccinoConnectionConnecting>
{
  convert(input: unknown): CappuccinoConnectionConnecting {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    if (input !== kCappuccinoConnectionConnectingType) {
      throw new InvalidTypeError(input, kCappuccinoConnectionConnectingType);
    }

    return new CappuccinoConnectionConnecting();
  }
}

class CappuccinoConnectionConnectingEncoder
  implements Converter<CappuccinoConnectionConnecting>
{
  convert() {
    return kCappuccinoConnectionConnectingType;
  }
}

class CappuccinoConnectionConnectingCodec extends TypeCheckingCodec<
  CappuccinoConnectionConnecting,
  ReturnType<
    InstanceType<new () => CappuccinoConnectionConnectingEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoConnectionConnectingEncoder();
  readonly decoder = new CappuccinoConnectionConnectingDecoder();
}

export const cappuccinoConnectionConnectingCodec =
  new CappuccinoConnectionConnectingCodec();
