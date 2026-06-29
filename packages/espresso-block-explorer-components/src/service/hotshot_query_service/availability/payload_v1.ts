import { assertInstanceOf } from '@/assert/assert';
import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer_base64';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import {
  AvailabilityNamespaceTable,
  availabilityNamespaceTableCodec,
} from './namespace_table';
import { AvailabilityAPIPayloadBase } from './payload_base';
import { foldRIterable, iota } from '@/functional/functional';

/**
 * AvailabilityAPIPayloadV0 represents the payload in the Availability API.
 *
 * Multiple pieces of payload based data is stored within the `raw_payload`
 * field.  The `raw_payload` itself is self-descritive, informing how to
 * decode the payload contained within. The associated `ns_table` corresponds
 * to the data contained within the `raw_payload` field.
 *
 * The byte layout format of the `raw_payload` is as follows:
 *
 * +--------+--------+--------+--------+
 * | byte 0 | byte 1 | byte 2 | byte 4 |
 * +--------+--------+--------+--------+
 * |   uint32 LE (Number of Entries)   |
 * +--------+--------+--------+--------+
 * |         uint32 LE: Offset         |
 * |     (Repeated for each Entry)     |
 * +--------+--------+--------+--------+
 * |  Payload Data (based on Offset)   |
 * +--------+--------+--------+--------+
 *
 *   0  1  2  3
 * +--+--+--+--+--+--+--+--+--+--+--+--+..+--+--+--+--+
 * |     N     | offset 0  | offset 1  |..|offset n-1 |
 * +--+--+--+--+--+--+--+--+--+--+--+--+..+--+--+--+--+
 * |<-4 bytes->|<-------------N offsets-------------->|
 * +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 * | N payloads of variable length are stored         |
 * +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *
 *
 * The Byte description of the `raw_payload` starts with a single uint32
 * in Little Endian format, that representes the total number of payload
 * entries.
 *
 * The next thing that follows are `N` additional uint32 entries encoded
 * as Little Endian, where `N` corresponds to the number of entries read
 * from the first encoded value.  These entries, `Oi` represent `byte`
 * offsets into the `raw_payload` the represents each individual entry
 * contained within.  Each payload `Pi` can be retrieved based on these
 * offsets such that the payload can be retrieved by taking byte offsets
 * into the `raw_payload` from values retrieved via `Oi` as the ending byte,
 * and `Oi-1` as the leading byte.  The exception to this is for `O0`, which
 * will have a leading byte of `4 * N + 4` to account for the leading uint32
 * values.
 *
 * The `namespace` for the payload can be determined by the namespace table.
 * The namespace table reords namespace data that corresponds to the offsets
 * within the namespace table.  The namespace markers mark the ending offset
 * of the `raw_payload` such that, any starting offset that is before the
 * namespace table's ending offset, can be considered as belonging to the
 * describing namespace.  Or, if you wish to use the ending offset of the
 * `raw_payload` entries instead, anything that is less or equal to the
 * ending offset of the namespace entry would be attributed to that namespace
 * as well.
 *
 */
export class AvailabilityAPIPayloadV1 extends AvailabilityAPIPayloadBase {
  private dataView: DataView;
  constructor(
    public readonly ns_table: AvailabilityNamespaceTable,
    public readonly raw_payload: ArrayBuffer,
  ) {
    super();
    this.dataView = new DataView(raw_payload);
  }

  public getNumberOfPayloadEntries(): number {
    return this.dataView.getUint32(0, true);
  }

  public getPayloadLengthForIndex(index: number): number {
    if (
      !Number.isInteger(index) ||
      index < 0 ||
      index >= this.getNumberOfPayloadEntries()
    ) {
      return -1;
    }

    if (index === 0) {
      return this.dataView.getUint32(4 + index * 4, true);
    }

    return (
      this.dataView.getUint32(4 + index * 4, true) -
      this.dataView.getUint32(4 + (index - 1) * 4, true)
    );
  }

  public getPayloadSliceForIndex(index: number): undefined | ArrayBuffer {
    if (
      !Number.isInteger(index) ||
      index < 0 ||
      index >= this.getNumberOfPayloadEntries()
    ) {
      return undefined;
    }

    const startByte = foldRIterable(
      (acc, i) => acc + this.getPayloadLengthForIndex(i),
      4 + this.getNumberOfPayloadEntries() * 4,
      iota(index - 1),
    );

    const length = this.getPayloadLengthForIndex(index);

    if (length < 0) {
      return undefined;
    }

    return this.raw_payload.slice(startByte, startByte + length);
  }

  toJSON() {
    return availabilityAPIPayloadV1Codec.encode(this);
  }
}

export function isPayloadV1(
  payload: AvailabilityAPIPayloadBase,
): payload is AvailabilityAPIPayloadV1 {
  return payload instanceof AvailabilityAPIPayloadV1;
}

export class AvailabilityAPIPayloadV1Decoder implements Converter<
  unknown,
  AvailabilityAPIPayloadV1
> {
  convert(input: unknown): AvailabilityAPIPayloadV1 {
    assertRecordWithKeys(input, 'ns_table', 'raw_payload');

    return new AvailabilityAPIPayloadV1(
      availabilityNamespaceTableCodec.decode(input.ns_table),
      stdBase64ArrayBufferCodec.decode(input.raw_payload),
    );
  }
}

export class AvailabilityAPIPayloadV1Encoder implements Converter<AvailabilityAPIPayloadV1> {
  convert(input: AvailabilityAPIPayloadV1) {
    assertInstanceOf(input, AvailabilityAPIPayloadV1);

    return {
      ns_table: availabilityNamespaceTableCodec.encode(input.ns_table),
      raw_payload: stdBase64ArrayBufferCodec.encode(input.raw_payload),
    };
  }
}

export class AvailabilityAPIPayloadV1Codec extends TypeCheckingCodec<
  AvailabilityAPIPayloadV1,
  ReturnType<InstanceType<new () => AvailabilityAPIPayloadV1Encoder>['convert']>
> {
  readonly encoder = new AvailabilityAPIPayloadV1Encoder();
  readonly decoder = new AvailabilityAPIPayloadV1Decoder();
}

export const availabilityAPIPayloadV1Codec =
  new AvailabilityAPIPayloadV1Codec();
export const nullableAvailabilityAPIPayloadV1Codec = new NullCodec(
  new NullDecoder(availabilityAPIPayloadV1Codec),
  new NullEncoder(availabilityAPIPayloadV1Codec),
);
