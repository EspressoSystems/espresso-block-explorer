import { assertInstanceOf } from '@/assert/assert';
import { urlBase64ArrayBufferCodec } from '@/convert/codec/array_buffer_base64';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';

/**
 * AvailabilityNamespaceTable represents the namespace table in the Availability API.
 */
export class AvailabilityNamespaceTable {
  constructor(public readonly bytes: ArrayBuffer) {}

  toJSON() {
    return availabilityNamespaceTableCodec.encode(this);
  }
}

class AvailabilityNamespaceTableDecoder implements Converter<
  unknown,
  AvailabilityNamespaceTable
> {
  convert(input: unknown): AvailabilityNamespaceTable {
    assertRecordWithKeys(input, 'bytes');

    return new AvailabilityNamespaceTable(
      urlBase64ArrayBufferCodec.decode(input.bytes),
    );
  }
}

class AvailabilityNamespaceTableEncoder implements Converter<AvailabilityNamespaceTable> {
  convert(input: AvailabilityNamespaceTable) {
    assertInstanceOf(input, AvailabilityNamespaceTable);

    return {
      bytes: urlBase64ArrayBufferCodec.encode(input.bytes),
    };
  }
}

class AvailabilityNamespaceTableCodec extends TypeCheckingCodec<
  AvailabilityNamespaceTable,
  ReturnType<
    InstanceType<new () => AvailabilityNamespaceTableEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityNamespaceTableEncoder();
  readonly decoder = new AvailabilityNamespaceTableDecoder();
}

export const availabilityNamespaceTableCodec =
  new AvailabilityNamespaceTableCodec();
