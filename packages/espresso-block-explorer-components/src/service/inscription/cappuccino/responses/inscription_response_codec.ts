import {
  Converter,
  TypeCheckingCodec,
  isRecordWithKeys,
} from '@/convert/codec/convert';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  CappuccinoInscriptionEntry,
  cappuccinoInscriptionCodec,
  kCappuccinoInscriptionType,
} from './inscription_entry';
import CappuccinoInscriptionResponse from './inscription_response';

class CappuccinoInscriptionResponseDecoder
  implements Converter<unknown, CappuccinoInscriptionResponse>
{
  convert(input: unknown): CappuccinoInscriptionResponse {
    if (isRecordWithKeys(input, kCappuccinoInscriptionType)) {
      return cappuccinoInscriptionCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class CappuccinoInscriptionResponseEncoder
  implements Converter<CappuccinoInscriptionResponse>
{
  convert(input: CappuccinoInscriptionResponse) {
    if (input instanceof CappuccinoInscriptionEntry) {
      return cappuccinoInscriptionCodec.encode(input);
    }

    throw new UnimplementedError();
  }
}

class CappuccinoInscriptionResponseCodec extends TypeCheckingCodec<
  CappuccinoInscriptionResponse,
  ReturnType<
    InstanceType<new () => CappuccinoInscriptionResponseEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoInscriptionResponseEncoder();
  readonly decoder = new CappuccinoInscriptionResponseDecoder();
}

export const cappuccinoInscriptionResponseCodec =
  new CappuccinoInscriptionResponseCodec();
