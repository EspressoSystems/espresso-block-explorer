import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import CappuccinoNodeValidatorRequest, {
  Close,
  Connect,
  kCloseValue,
  kConnectValue,
} from './web_worker_life_cycle_request';

class WebWorkerLifeCycleRequestEncoder
  implements Converter<CappuccinoNodeValidatorRequest, string>
{
  convert(input: CappuccinoNodeValidatorRequest): string {
    return input.valueOf();
  }
}

class WebWorkerLifeCycleRequestDecoder
  implements Converter<unknown, CappuccinoNodeValidatorRequest>
{
  convert(input: unknown): CappuccinoNodeValidatorRequest {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    switch (input) {
      case kConnectValue:
        return new Connect();
      case kCloseValue:
        return new Close();

      default:
        throw new InvalidTypeError(input, 'CappuccinoNodeValidatorRequest');
    }
  }
}

class WebWorkerLifeCycleRequestCodec extends TypeCheckingCodec<
  CappuccinoNodeValidatorRequest,
  string
> {
  readonly encoder: Converter<CappuccinoNodeValidatorRequest, string> =
    new WebWorkerLifeCycleRequestEncoder();
  readonly decoder: Converter<string, CappuccinoNodeValidatorRequest> =
    new WebWorkerLifeCycleRequestDecoder();
}

export const webWorkerLifeCycleRequestCodec =
  new WebWorkerLifeCycleRequestCodec();
