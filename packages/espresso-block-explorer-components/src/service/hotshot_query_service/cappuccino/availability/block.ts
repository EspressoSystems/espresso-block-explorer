import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPIHeader, cappuccinoAPIHeaderCodec } from './block_header';
import { CappuccinoAPIPayload, cappuccinoAPIPayloadCodec } from './payload';

/**
 * CappuccinoAPIBlock represents a block in the Cappuccino API.
 */
export class CappuccinoAPIBlock {
  readonly header: CappuccinoAPIHeader;
  readonly payload: CappuccinoAPIPayload;
  readonly hash: TaggedBase64;
  readonly size: number;
  readonly numTransactions: number;

  constructor(
    header: CappuccinoAPIHeader,
    payload: CappuccinoAPIPayload,
    hash: TaggedBase64,
    size: number,
    numTransactions: number,
  ) {
    this.header = header;
    this.payload = payload;
    this.hash = hash;
    this.size = size;
    this.numTransactions = numTransactions;
  }

  toJSON() {
    return cappuccinoAPIBlockCodec.encode(this);
  }
}

export class CappuccinoAPIBlockDecode
  implements Converter<unknown, CappuccinoAPIBlock>
{
  convert(input: unknown): CappuccinoAPIBlock {
    assertRecordWithKeys(
      input,
      'header',
      'payload',
      'hash',
      'size',
      'num_transactions',
    );

    return new CappuccinoAPIBlock(
      cappuccinoAPIHeaderCodec.decode(input.header),
      cappuccinoAPIPayloadCodec.decode(input.payload),
      taggedBase64Codec.decode(input.hash),
      numberCodec.decode(input.size),
      numberCodec.decode(input.num_transactions),
    );
  }
}

export class CappuccinoAPIBlockEncoder
  implements Converter<CappuccinoAPIBlock, unknown>
{
  convert(input: CappuccinoAPIBlock): unknown {
    assertInstanceOf(input, CappuccinoAPIBlock);

    return {
      header: cappuccinoAPIHeaderCodec.encode(input.header),
      payload: cappuccinoAPIPayloadCodec.encode(input.payload),
      hash: taggedBase64Codec.encode(input.hash),
      size: numberCodec.encode(input.size),
      num_transactions: numberCodec.encode(input.numTransactions),
    };
  }
}

export class CappuccinoAPIBlockCodec extends Codec<
  CappuccinoAPIBlock,
  unknown
> {
  readonly encoder = new CappuccinoAPIBlockEncoder();
  readonly decoder = new CappuccinoAPIBlockDecode();
}

export const cappuccinoAPIBlockCodec = new CappuccinoAPIBlockCodec();
