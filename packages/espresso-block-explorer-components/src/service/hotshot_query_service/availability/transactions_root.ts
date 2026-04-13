import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberArrayCodec } from '@/convert/codec/number';

/**
 * AvailabilityTransactionsRoot represents the transactions root in the
 * Availability API.
 */
export class AvailabilityTransactionsRoot {
  constructor(public readonly root: number[]) {}

  toJSON() {
    return availabilityTransactionsRootCodec.encode(this);
  }
}

export class AvailabilityTransactionsRootDecoder implements Converter<
  unknown,
  AvailabilityTransactionsRoot
> {
  convert(input: unknown): AvailabilityTransactionsRoot {
    assertRecordWithKeys(input, 'root');

    return new AvailabilityTransactionsRoot(
      numberArrayCodec.decode(input.root),
    );
  }
}

export class AvailabilityTransactionsRootEncoder implements Converter<AvailabilityTransactionsRoot> {
  convert(input: AvailabilityTransactionsRoot) {
    assertInstanceOf(input, AvailabilityTransactionsRoot);

    return {
      root: numberArrayCodec.encode(input.root),
    };
  }
}

export class AvailabilityTransactionsRootCodec extends TypeCheckingCodec<
  AvailabilityTransactionsRoot,
  ReturnType<
    InstanceType<new () => AvailabilityTransactionsRootEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityTransactionsRootEncoder();
  readonly decoder = new AvailabilityTransactionsRootDecoder();
}

export const availabilityTransactionsRootCodec =
  new AvailabilityTransactionsRootCodec();
