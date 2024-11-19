import {
  assertRecordWithKeys,
  Converter,
  isString,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import CappuccinoInscriptionRequest from './inscription_request';
import {
  kPutInscriptionValue,
  PutInscription,
  putInscriptionCodec,
} from './put_inscription';
import {
  kRetrieveInscriptionsForAddressValue,
  RetrieveInscriptionsForAddress,
  retrieveInscriptionsForAddressCodec,
} from './retrieve_inscriptions_for_address';

class CappuccinoInscriptionRequestEncoder
  implements Converter<CappuccinoInscriptionRequest, unknown>
{
  convert(input: CappuccinoInscriptionRequest): unknown {
    if (input instanceof PutInscription) {
      return putInscriptionCodec.encode(input);
    }

    if (input instanceof RetrieveInscriptionsForAddress) {
      return retrieveInscriptionsForAddressCodec.encode(input);
    }

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

      case kRetrieveInscriptionsForAddressValue:
        return retrieveInscriptionsForAddressCodec.decode(input);

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
