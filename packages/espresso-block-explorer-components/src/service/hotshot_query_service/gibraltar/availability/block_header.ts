import {
  Codec,
  Converter,
  InvalidInputError,
  isNumber,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { isNumberArray } from '../../../../convert/codec/number';
import {
  GibraltarL1Finalized,
  gibraltarL1FinalizedCodec,
} from './l1_finalized';
import {
  GibraltarTransactionsRoot,
  gibraltarTransactionsRootCodec,
} from './transactions_root';

export class GibraltarAPIHeader {
  readonly height: number;
  readonly timestamp: number;
  readonly l1_head: number;
  readonly l1_finalized: null | GibraltarL1Finalized;
  readonly payload_commitment: number[];
  readonly transactions_root: GibraltarTransactionsRoot;

  constructor(
    height: number,
    timestamp: number,
    l1_head: number,
    l1_finalized: null | GibraltarL1Finalized,
    payload_commitment: number[],
    transactions_root: GibraltarTransactionsRoot,
  ) {
    this.height = height;
    this.timestamp = timestamp;
    this.l1_head = l1_head;
    this.l1_finalized = l1_finalized;
    this.payload_commitment = payload_commitment;
    this.transactions_root = transactions_root;
  }

  toJSON() {
    return gibraltarAPIHeaderCodec.encode(this);
  }
}

export class GibraltarAPIHeaderDecoder
  implements Converter<unknown, GibraltarAPIHeader>
{
  convert(input: unknown): GibraltarAPIHeader {
    if (
      !isRecord(input, 'height', isNumber) ||
      !isRecord(input, 'timestamp', isNumber) ||
      !isRecord(input, 'l1_head', isNumber) ||
      !isRecord(input, 'l1_finalized', isUnknown) ||
      !isRecord(input, 'payload_commitment', isNumberArray) ||
      !isRecord(input, 'transactions_root', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIHeader(
      input.height,
      input.timestamp,
      input.l1_head,
      input.l1_finalized === null
        ? null
        : gibraltarL1FinalizedCodec.decode(input.l1_finalized),
      input.payload_commitment,
      gibraltarTransactionsRootCodec.decode(input.transactions_root),
    );
  }
}

export class GibraltarAPIHeaderEncoder
  implements Converter<GibraltarAPIHeader, unknown>
{
  convert(input: GibraltarAPIHeader): unknown {
    return {
      height: input.height,
      timestamp: input.timestamp,
      l1_head: input.l1_head,
      l1_finalized:
        input.l1_finalized &&
        gibraltarL1FinalizedCodec.encode(input.l1_finalized),
      payload_commitment: input.payload_commitment,
      transactions_root: gibraltarTransactionsRootCodec.encode(
        input.transactions_root,
      ),
    };
  }
}

export class GibraltarAPIHeaderCodec extends Codec<
  GibraltarAPIHeader,
  unknown
> {
  readonly encoder = new GibraltarAPIHeaderEncoder();
  readonly decoder = new GibraltarAPIHeaderDecoder();
}

export const gibraltarAPIHeaderCodec = new GibraltarAPIHeaderCodec();
