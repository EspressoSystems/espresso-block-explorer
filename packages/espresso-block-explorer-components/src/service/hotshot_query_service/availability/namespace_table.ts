import { assertInstanceOf } from '@/assert/assert';
import { urlBase64ArrayBufferCodec } from '@/convert/codec/array_buffer_base64';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';

export class NamespaceTableEntry {
  constructor(
    public namespace: number,
    public start: number,
    public end: number,
  ) {
    Object.freeze(this);
  }
}

/**
 * AvailabilityNamespaceTable represents the namespace table in the Availability API.
 *
 * The namespace table records information about the layout of a Payload data
 * block and which payloads correspond to the relevant namespace.
 *
 * The namespace table effectively reprsents a list of pairs of numbers that
 * correspond to an encoded namespace, and a byte offset.  The byte offset
 * is utilized as a marker, such that any payload entry that falls before
 * that byte offset (but prior to any previous) is attributed to the namespace
 * indicated.
 */
export class AvailabilityNamespaceTable {
  private dataview: DataView;
  constructor(public readonly bytes: ArrayBuffer) {
    this.dataview = new DataView(bytes);
  }

  public len(): number {
    return Math.floor((this.bytes.byteLength - 4) / 8);
  }

  public numEntries(): number {
    return this.dataview.getUint32(0, true);
  }

  public getNamespaceForIndex(index: number): undefined | number {
    if (!Number.isInteger(index) || index < 0 || index >= this.numEntries()) {
      return undefined;
    }

    return this.dataview.getUint32(4 + index * 8 + 0, true);
  }

  public getOffsetForIndex(index: number): undefined | number {
    if (!Number.isInteger(index) || index < 0 || index >= this.numEntries()) {
      return undefined;
    }

    return this.dataview.getUint32(4 + index * 8 + 4, true);
  }

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
