import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
} from '../../../../convert/codec/array';
import {
  Converter,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import {
  numberArrayCodec,
  numberCodec,
} from '../../../../convert/codec/number';
import InvalidInputError from '../../../../errors/InvalidInputError';

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

export class CappuccinoAPITransactionNMTEntryDecoder
  implements Converter<unknown, CappuccinoAPITransactionNMTEntry>
{
  convert(input: unknown): CappuccinoAPITransactionNMTEntry {
    if (
      !isRecord(input, 'vm', isUnknown) ||
      !isRecord(input, 'payload', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoAPITransactionNMTEntry(
      numberCodec.decode(input.vm),
      numberArrayCodec.decode(input.payload),
    );
  }
}

export class CappuccinoAPITransactionNMTEntryEncoder
  implements Converter<CappuccinoAPITransactionNMTEntry>
{
  convert(input: CappuccinoAPITransactionNMTEntry) {
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
