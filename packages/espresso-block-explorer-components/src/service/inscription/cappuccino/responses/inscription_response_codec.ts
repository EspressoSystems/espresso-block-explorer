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
import {
  CappuccinoRetrievedInscriptionsForWalletAddress,
  cappuccinoRetrievedInscriptionsForWalletAddressCodec,
  kRetrievedInscriptionsForWalletAddressType,
} from './retrieved_inscriptions';
import {
  CappuccinoInscriptionStats,
  cappuccinoInscriptionStatsCodec,
  kCappuccinoStatsType,
} from './stats_entry';

class CappuccinoInscriptionResponseDecoder
  implements Converter<unknown, CappuccinoInscriptionResponse>
{
  convert(input: unknown): CappuccinoInscriptionResponse {
    if (isRecordWithKeys(input, kCappuccinoInscriptionType)) {
      return cappuccinoInscriptionCodec.decode(input);
    }

    if (isRecordWithKeys(input, kCappuccinoStatsType)) {
      return cappuccinoInscriptionStatsCodec.decode(input);
    }

    if (isRecordWithKeys(input, kRetrievedInscriptionsForWalletAddressType)) {
      return cappuccinoRetrievedInscriptionsForWalletAddressCodec.decode(input);
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

    if (input instanceof CappuccinoInscriptionStats) {
      return cappuccinoInscriptionStatsCodec.encode(input);
    }

    if (input instanceof CappuccinoRetrievedInscriptionsForWalletAddress) {
      return cappuccinoRetrievedInscriptionsForWalletAddressCodec.encode(input);
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
