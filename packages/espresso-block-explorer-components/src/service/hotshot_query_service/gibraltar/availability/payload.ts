import {
  Codec,
  Converter,
  InvalidInputError,
  isArrayMemberFunction,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import {
  GibraltarAPITransactionNMTEntry,
  gibraltarAPITransactionNMTEntryCodec,
} from './transaction_nmt_entry';

export class GibraltarAPIPayload {
  readonly transaction_nmt: GibraltarAPITransactionNMTEntry[];

  constructor(transaction_nmt: GibraltarAPITransactionNMTEntry[]) {
    this.transaction_nmt = transaction_nmt;
  }

  toJSON() {
    return gibraltarAPIPayloadCodec.encode(this);
  }
}

const isUnknownArray = isArrayMemberFunction(isUnknown);

export class GibraltarAPIPayloadDecoder
  implements Converter<unknown, GibraltarAPIPayload>
{
  convert(input: unknown): GibraltarAPIPayload {
    if (!isRecord(input, 'transaction_nmt', isUnknownArray)) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIPayload(
      input.transaction_nmt.map(
        gibraltarAPITransactionNMTEntryCodec.decoder.convert,
      ),
    );
  }
}

export class GibraltarAPIPayloadEncoder
  implements Converter<GibraltarAPIPayload, unknown>
{
  convert(input: GibraltarAPIPayload): unknown {
    return {
      transaction_nmt: input.transaction_nmt.map((m) =>
        gibraltarAPITransactionNMTEntryCodec.encode(m),
      ),
    };
  }
}

export class GibraltarAPIPayloadCodec extends Codec<
  GibraltarAPIPayload,
  unknown
> {
  readonly encoder = new GibraltarAPIPayloadEncoder();
  readonly decoder = new GibraltarAPIPayloadDecoder();
}

export const gibraltarAPIPayloadCodec = new GibraltarAPIPayloadCodec();
