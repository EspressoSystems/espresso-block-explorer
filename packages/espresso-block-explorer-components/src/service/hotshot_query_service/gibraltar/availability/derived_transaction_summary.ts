import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
} from '../../../../convert/codec/array';
import {
  Codec,
  Converter,
  InvalidInputError,
  isNumber,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import { GibraltarAPIHeader, gibraltarAPIHeaderCodec } from './block_header';
import {
  GibraltarAPITransactionNMTEntry,
  gibraltarAPITransactionNMTEntryCodec,
} from './transaction_nmt_entry';

export class GibraltarDerivedTransactionSummary {
  readonly hash: TaggedBase64;
  readonly header: GibraltarAPIHeader;
  readonly offset: number;
  readonly transaction: GibraltarAPITransactionNMTEntry;

  constructor(
    hash: TaggedBase64,
    header: GibraltarAPIHeader,
    offset: number,
    transaction: GibraltarAPITransactionNMTEntry,
  ) {
    this.hash = hash;
    this.header = header;
    this.offset = offset;
    this.transaction = transaction;
  }

  toJSON() {
    return gibraltarDerivedTransactionSummaryCodec.encode(this);
  }
}

export class GibraltarDerivedTransactionSummaryDecoder
  implements Converter<unknown, GibraltarDerivedTransactionSummary>
{
  convert(input: unknown): GibraltarDerivedTransactionSummary {
    if (
      !isRecord(input, 'hash', isUnknown) ||
      !isRecord(input, 'header', isUnknown) ||
      !isRecord(input, 'offset', isNumber) ||
      !isRecord(input, 'transaction', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarDerivedTransactionSummary(
      taggedBase64Codec.decode(input.hash),
      gibraltarAPIHeaderCodec.decode(input.header),
      input.offset,
      gibraltarAPITransactionNMTEntryCodec.decode(input.transaction),
    );
  }
}

export class GibraltarDerivedTransactionSummaryEncoder
  implements Converter<GibraltarDerivedTransactionSummary, unknown>
{
  convert(input: GibraltarDerivedTransactionSummary): unknown {
    return {
      hash: taggedBase64Codec.encode(input.hash),
      header: gibraltarAPIHeaderCodec.encode(input.header),
      offset: input.offset,
      transaction: gibraltarAPITransactionNMTEntryCodec.encode(
        input.transaction,
      ),
    };
  }
}

export class GibraltarDerivedTransactionSummaryCodec extends Codec<
  GibraltarDerivedTransactionSummary,
  unknown
> {
  readonly encoder = new GibraltarDerivedTransactionSummaryEncoder();
  readonly decoder = new GibraltarDerivedTransactionSummaryDecoder();
}

export const gibraltarDerivedTransactionSummaryCodec =
  new GibraltarDerivedTransactionSummaryCodec();

export const listGibraltarDerivedTransactionSummaryCodec = new ArrayCodec(
  new ArrayDecoder(gibraltarDerivedTransactionSummaryCodec),
  new ArrayEncoder(gibraltarDerivedTransactionSummaryCodec),
);
