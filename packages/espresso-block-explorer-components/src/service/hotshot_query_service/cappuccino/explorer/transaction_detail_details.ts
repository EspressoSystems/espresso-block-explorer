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
} from '@/models/espresso/tagged_base64/TaggedBase64';

export class CappuccinoExplorerTransactionDetailDetails {
  readonly hash: TaggedBase64;
  readonly height: number;
  readonly blockConfirmed: boolean;
  readonly offset: number;
  readonly numTransactions: number;
  readonly size: number;
  readonly time: Date;
  readonly sequencingFees: unknown[];
  readonly feeDetails: unknown[];

  constructor(
    hash: TaggedBase64,
    height: number,
    blockConfirmed: boolean,
    offset: number,
    numTransactions: number,
    size: number,
    time: Date,
    sequencingFees: unknown[],
    feeDetails: unknown[],
  ) {
    this.hash = hash;
    this.height = height;
    this.blockConfirmed = blockConfirmed;
    this.offset = offset;
    this.numTransactions = numTransactions;
    this.size = size;
    this.time = time;
    this.sequencingFees = sequencingFees;
    this.feeDetails = feeDetails;
  }

  toJSON() {
    return cappuccinoExplorerTransactionDetailDetailsCodec.encode(this);
  }
}

class CappuccinoExplorerTransactionDetailDetailsDecoder implements Converter<
  unknown,
  CappuccinoExplorerTransactionDetailDetails
> {
  convert(input: unknown): CappuccinoExplorerTransactionDetailDetails {
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

    return new CappuccinoExplorerTransactionDetailDetails(
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

class CappuccinoExplorerTransactionDetailDetailsEncoder implements Converter<CappuccinoExplorerTransactionDetailDetails> {
  convert(input: CappuccinoExplorerTransactionDetailDetails) {
    assertInstanceOf(input, CappuccinoExplorerTransactionDetailDetails);

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

class CappuccinoExplorerTransactionDetailDetailsCodec extends TypeCheckingCodec<
  CappuccinoExplorerTransactionDetailDetails,
  ReturnType<
    InstanceType<
      new () => CappuccinoExplorerTransactionDetailDetailsEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoExplorerTransactionDetailDetailsEncoder();
  readonly decoder = new CappuccinoExplorerTransactionDetailDetailsDecoder();
}

export const cappuccinoExplorerTransactionDetailDetailsCodec =
  new CappuccinoExplorerTransactionDetailDetailsCodec();
