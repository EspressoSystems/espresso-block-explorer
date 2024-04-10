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

export class GibraltarDerivedBlockSummary {
  readonly header: GibraltarAPIHeader;
  readonly hash: TaggedBase64;
  readonly size: number;
  readonly num_transactions: number;
  readonly proposer_id: TaggedBase64;

  constructor(
    header: GibraltarAPIHeader,
    hash: TaggedBase64,
    size: number,
    num_transactions: number,
    proposer_id: TaggedBase64,
  ) {
    this.header = header;
    this.hash = hash;
    this.size = size;
    this.num_transactions = num_transactions;
    this.proposer_id = proposer_id;
  }

  toJSON() {
    return gibraltarDerivedBlockSummaryCodec.encode(this);
  }
}

export class GibraltarDerivedBlockSummaryDecoder
  implements Converter<unknown, GibraltarDerivedBlockSummary>
{
  convert(input: unknown): GibraltarDerivedBlockSummary {
    if (
      !isRecord(input, 'header', isUnknown) ||
      !isRecord(input, 'hash', isUnknown) ||
      !isRecord(input, 'size', isNumber) ||
      !isRecord(input, 'num_transactions', isNumber) ||
      !isRecord(input, 'proposer_id', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarDerivedBlockSummary(
      gibraltarAPIHeaderCodec.decode(input.header),
      taggedBase64Codec.decode(input.hash),
      input.size,
      input.num_transactions,
      taggedBase64Codec.decode(input.proposer_id),
    );
  }
}

export class GibraltarDerivedBlockSummaryEncoder
  implements Converter<GibraltarDerivedBlockSummary, unknown>
{
  convert(input: GibraltarDerivedBlockSummary): unknown {
    return {
      header: gibraltarAPIHeaderCodec.encode(input.header),
      hash: taggedBase64Codec.encode(input.hash),
      size: input.size,
      num_transactions: input.num_transactions,
      proposer_id: taggedBase64Codec.encode(input.proposer_id),
    };
  }
}

export class GibraltarDerivedBlockSummaryCodec extends Codec<
  GibraltarDerivedBlockSummary,
  unknown
> {
  readonly encoder = new GibraltarDerivedBlockSummaryEncoder();
  readonly decoder = new GibraltarDerivedBlockSummaryDecoder();
}

export const gibraltarDerivedBlockSummaryCodec =
  new GibraltarDerivedBlockSummaryCodec();

export const listGibraltarDerivedBlockSummaryCodec = new ArrayCodec(
  new ArrayDecoder(gibraltarDerivedBlockSummaryCodec),
  new ArrayEncoder(gibraltarDerivedBlockSummaryCodec),
);
