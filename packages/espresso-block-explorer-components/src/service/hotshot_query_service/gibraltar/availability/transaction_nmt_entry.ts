import {
  Codec,
  Converter,
  InvalidInputError,
  isNumber,
  isRecord,
} from '../../../../convert/codec/convert';
import { isNumberArray } from '../../../../convert/codec/number';

export class GibraltarAPITransactionNMTEntry {
  readonly vm: number;
  readonly payload: number[];

  constructor(vm: number, payload: number[]) {
    this.vm = vm;
    this.payload = payload;
  }

  toJSON() {
    return gibraltarAPITransactionNMTEntryCodec.encode(this);
  }
}

export class GibraltarAPITransactionNMTEntryDecoder
  implements Converter<unknown, GibraltarAPITransactionNMTEntry>
{
  convert(input: unknown): GibraltarAPITransactionNMTEntry {
    if (
      !isRecord(input, 'vm', isNumber) ||
      !isRecord(input, 'payload', isNumberArray)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPITransactionNMTEntry(input.vm, input.payload);
  }
}

export class GibraltarAPITransactionNMTEntryEncoder
  implements
    Converter<
      GibraltarAPITransactionNMTEntry,
      Record<'vm', number> & Record<'payload', number[]>
    >
{
  convert(
    input: GibraltarAPITransactionNMTEntry,
  ): Record<'vm', number> & Record<'payload', number[]> {
    return {
      vm: input.vm,
      payload: input.payload,
    };
  }
}

export class GibraltarAPITransactionNMTEntryCodec extends Codec<
  GibraltarAPITransactionNMTEntry,
  unknown
> {
  readonly encoder = new GibraltarAPITransactionNMTEntryEncoder();
  readonly decoder = new GibraltarAPITransactionNMTEntryDecoder();
}

export const gibraltarAPITransactionNMTEntryCodec =
  new GibraltarAPITransactionNMTEntryCodec();
