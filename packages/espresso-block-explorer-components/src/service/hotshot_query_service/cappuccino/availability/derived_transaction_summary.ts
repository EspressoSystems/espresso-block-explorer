import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPIHeader, cappuccinoAPIHeaderCodec } from './block_header';
import {
  CappuccinoAPITransactionNMTEntry,
  cappuccinoAPITransactionNMTEntryCodec,
} from './transaction_nmt_entry';

/**
 * CappuccinoDerivedTransactionSummary represents a Transaction summary that
 * is derived from other primitives in the Cappuccino API.
 */
export class CappuccinoDerivedTransactionSummary {
  readonly hash: TaggedBase64;
  readonly header: CappuccinoAPIHeader;
  readonly offset: number;
  readonly transaction: CappuccinoAPITransactionNMTEntry;

  constructor(
    hash: TaggedBase64,
    header: CappuccinoAPIHeader,
    offset: number,
    transaction: CappuccinoAPITransactionNMTEntry,
  ) {
    this.hash = hash;
    this.header = header;
    this.offset = offset;
    this.transaction = transaction;
  }

  toJSON() {
    return cappuccinoDerivedTransactionSummaryCodec.encode(this);
  }
}

export class CappuccinoDerivedTransactionSummaryDecoder
  implements Converter<unknown, CappuccinoDerivedTransactionSummary>
{
  convert(input: unknown): CappuccinoDerivedTransactionSummary {
    assertRecordWithKeys(input, 'hash', 'header', 'offset', 'transaction');

    return new CappuccinoDerivedTransactionSummary(
      taggedBase64Codec.decode(input.hash),
      cappuccinoAPIHeaderCodec.decode(input.header),
      numberCodec.decode(input.offset),
      cappuccinoAPITransactionNMTEntryCodec.decode(input.transaction),
    );
  }
}

export class CappuccinoDerivedTransactionSummaryEncoder
  implements Converter<CappuccinoDerivedTransactionSummary>
{
  convert(input: CappuccinoDerivedTransactionSummary) {
    return {
      hash: taggedBase64Codec.encode(input.hash),
      header: cappuccinoAPIHeaderCodec.encode(input.header),
      offset: numberCodec.encode(input.offset),
      transaction: cappuccinoAPITransactionNMTEntryCodec.encode(
        input.transaction,
      ),
    };
  }
}

export class CappuccinoDerivedTransactionSummaryCodec extends TypeCheckingCodec<
  CappuccinoDerivedTransactionSummary,
  ReturnType<
    InstanceType<
      new () => CappuccinoDerivedTransactionSummaryEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoDerivedTransactionSummaryEncoder();
  readonly decoder = new CappuccinoDerivedTransactionSummaryDecoder();
}

export const cappuccinoDerivedTransactionSummaryCodec =
  new CappuccinoDerivedTransactionSummaryCodec();

export const listCappuccinoDerivedTransactionSummaryCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoDerivedTransactionSummaryCodec),
  new ArrayEncoder(cappuccinoDerivedTransactionSummaryCodec),
);
