import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberArrayCodec, numberCodec } from '@/convert/codec/number';

/**
 * CappuccinoAPITransactionNMTEntry represents a transaction NMT entry in the
 * Cappuccino API.
 */
export class CappuccinoAPITransactionNMTEntry {
  readonly vm: number;
  readonly payload: number[];

  constructor(vm: number, payload: number[]) {
    this.vm = vm;
    this.payload = payload;
  }

  toJSON() {
    return cappuccinoAPITransactionNMTEntryCodec.encode(this);
  }
}

export class CappuccinoAPITransactionNMTEntryDecoder implements Converter<
  unknown,
  CappuccinoAPITransactionNMTEntry
> {
  convert(input: unknown): CappuccinoAPITransactionNMTEntry {
    assertRecordWithKeys(input, 'vm', 'payload');

    return new CappuccinoAPITransactionNMTEntry(
      numberCodec.decode(input.vm),
      numberArrayCodec.decode(input.payload),
    );
  }
}

export class CappuccinoAPITransactionNMTEntryEncoder implements Converter<CappuccinoAPITransactionNMTEntry> {
  convert(input: CappuccinoAPITransactionNMTEntry) {
    assertInstanceOf(input, CappuccinoAPITransactionNMTEntry);

    return {
      vm: numberCodec.encode(input.vm),
      payload: numberArrayCodec.encode(input.payload),
    };
  }
}

export class CappuccinoAPITransactionNMTEntryCodec extends TypeCheckingCodec<
  CappuccinoAPITransactionNMTEntry,
  ReturnType<
    InstanceType<new () => CappuccinoAPITransactionNMTEntryEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPITransactionNMTEntryEncoder();
  readonly decoder = new CappuccinoAPITransactionNMTEntryDecoder();
}

export const cappuccinoAPITransactionNMTEntryCodec =
  new CappuccinoAPITransactionNMTEntryCodec();
export const arrayCappuccinoAPITransactionNMTEntryCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoAPITransactionNMTEntryCodec),
  new ArrayEncoder(cappuccinoAPITransactionNMTEntryCodec),
);
