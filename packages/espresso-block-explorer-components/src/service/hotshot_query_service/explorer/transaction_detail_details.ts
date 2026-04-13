import { assertInstanceOf } from '@/assert/assert';
import { booleanCodec } from '@/convert/codec/boolean';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { rfc3999DateCodec } from '@/convert/codec/date';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';

/**
 * ExplorerTransactionDetailDetails represents the details of a
 * transaction in the block explorer.
 */
export class ExplorerTransactionDetailDetails {
  constructor(
    public readonly hash: TaggedBase64,
    public readonly height: number,
    public readonly blockConfirmed: boolean,
    public readonly offset: number,
    public readonly numTransactions: number,
    public readonly size: number,
    public readonly time: Date,
    public readonly sequencingFees: unknown[],
    public readonly feeDetails: unknown[],
  ) {}

  toJSON() {
    return explorerTransactionDetailDetailsCodec.encode(this);
  }
}

class ExplorerTransactionDetailDetailsDecoder implements Converter<
  unknown,
  ExplorerTransactionDetailDetails
> {
  convert(input: unknown): ExplorerTransactionDetailDetails {
    assertRecordWithKeys(
      input,
      'hash',
      'height',
      'block_confirmed',
      'offset',
      'num_transactions',
      'size',
      'time',
      'sequencing_fees',
      'fee_details',
    );

    return new ExplorerTransactionDetailDetails(
      taggedBase64Codec.decode(input.hash),
      numberCodec.decode(input.height),
      booleanCodec.decode(input.block_confirmed),
      numberCodec.decode(input.offset),
      numberCodec.decode(input.num_transactions),
      numberCodec.decode(input.size),
      rfc3999DateCodec.decode(input.time),
      [],
      [],
      // unknownCodec.decode(input.sequencing_fees),
      // unknownCodec.decode(input.fee_details),
    );
  }
}

class ExplorerTransactionDetailDetailsEncoder implements Converter<ExplorerTransactionDetailDetails> {
  convert(input: ExplorerTransactionDetailDetails) {
    assertInstanceOf(input, ExplorerTransactionDetailDetails);

    return {
      hash: taggedBase64Codec.encode(input.hash),
      height: numberCodec.encode(input.height),
      block_confirmed: booleanCodec.encode(input.blockConfirmed),
      offset: numberCodec.encode(input.offset),
      num_transactions: numberCodec.encode(input.numTransactions),
      size: numberCodec.encode(input.size),
      time: rfc3999DateCodec.encode(input.time),
      sequencing_fees: [],
      fee_details: [],
      // sequencing_fees: unknownCodec.encode(input.sequencingFees),
      // fee_details: unknownCodec.encode(input.feeDetails),
    };
  }
}

class ExplorerTransactionDetailDetailsCodec extends TypeCheckingCodec<
  ExplorerTransactionDetailDetails,
  ReturnType<
    InstanceType<new () => ExplorerTransactionDetailDetailsEncoder>['convert']
  >
> {
  readonly encoder = new ExplorerTransactionDetailDetailsEncoder();
  readonly decoder = new ExplorerTransactionDetailDetailsDecoder();
}

export const explorerTransactionDetailDetailsCodec =
  new ExplorerTransactionDetailDetailsCodec();
