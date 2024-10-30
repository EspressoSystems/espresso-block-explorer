import {
  assertRecordWithKeys,
  Converter,
  isString,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import CappuccinoInscriptionRequest, {
  kPutInscriptionValue,
  putInscriptionCodec,
} from './inscription_request';

class CappuccinoInscriptionRequestEncoder
  implements Converter<CappuccinoInscriptionRequest, unknown>
{
  convert(input: CappuccinoInscriptionRequest): unknown {
    return input.toJSON();
  }
}

class CappuccinoInscriptionRequestDecoder
  implements Converter<unknown, CappuccinoInscriptionRequest>
{
  convert(input: unknown): CappuccinoInscriptionRequest {
    assertRecordWithKeys(input, 'type');

    if (!isString(input.type)) {
      throw new InvalidTypeError(typeof input.type, 'string');
    }

    switch (input.type) {
      case kPutInscriptionValue:
        return putInscriptionCodec.decode(input);

      default:
        throw new InvalidTypeError(input.type, 'CappuccinoInscriptionRequest');
    }
  }
}

class CappuccinoInscriptionRequestCodec extends TypeCheckingCodec<
  CappuccinoInscriptionRequest,
  unknown
> {
  readonly encoder: Converter<CappuccinoInscriptionRequest, unknown> =
    new CappuccinoInscriptionRequestEncoder();
  readonly decoder: Converter<string, CappuccinoInscriptionRequest> =
    new CappuccinoInscriptionRequestDecoder();
}

export const cappuccinoInscriptionRequestCodec =
  new CappuccinoInscriptionRequestCodec();
