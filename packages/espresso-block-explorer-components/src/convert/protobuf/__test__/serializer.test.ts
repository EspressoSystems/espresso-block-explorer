import { createBufferedDataView } from '@/convert/data_view/buffered_data_view';
import { Endianess } from '@/convert/data_view/endianess';
import { describe, expect, it } from 'vitest';
import { createProtobufSerializer } from '../serializer';
import { encodeVarInt } from '../varint';

describe('Protobuf', () => {
  describe('Serializer', () => {
    // Examples taken from documentation on https://protobuf.dev/programming-guides/encoding/
    describe('Encoding Examples', () => {
      it('should encode example - A Simple Message', () => {
        // Example, Message Structure:
        //
        // message Test1 {
        //   int32 a = 1;
        // }
        //
        // with a set to `150`.

        const dv = createBufferedDataView(new ArrayBuffer(3), Endianess.little);
        const serializer = createProtobufSerializer(dv);

        serializer.serializeVarIntUint32(1, 150);

        const bytes = serializer.toBytes();
        expect(bytes).to.deep.equal(new Uint8Array([0x08, 0x96, 0x01]));
      });

      it('should encode example - Length-Delimited Reocrd', () => {
        // Example, Message Structure:
        //
        // message Test2 {
        //   string b = 2;
        // }
        //
        // with a set to "testing".

        const dv = createBufferedDataView(new ArrayBuffer(9), Endianess.little);
        const serializer = createProtobufSerializer(dv);

        serializer.serializeLenString(2, 'testing');

        const bytes = serializer.toBytes();
        expect(bytes).to.deep.equal(
          new Uint8Array([
            0x12, 0x07, 0x74, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x67,
          ]),
        );
      });

      it('should encode example - Length-Delimited Reocrd - Submessages', () => {
        // Example, Message Structure:
        //
        // message Test3 {
        //   Test1 c = 3;
        // }
        //
        // with c's .a field set to 150

        const dv = createBufferedDataView(new ArrayBuffer(5), Endianess.little);
        const serializer = createProtobufSerializer(dv);

        serializer.serializeSubMessage(3, (ser) => {
          ser.serializeVarIntUint32(1, 150);
        });

        const bytes = serializer.toBytes();
        expect(bytes).to.deep.equal(
          new Uint8Array([0x1a, 0x03, 0x08, 0x96, 0x01]),
        );
      });

      it('should encode example - Repeated Elements (corrected)', () => {
        // Example, Message Structure:
        //
        // message Test4 {
        // string d = 4;
        // repeated int32 e = 6;
        // }
        //
        // with e set to 1, 2, and 3
        const dv = createBufferedDataView(new ArrayBuffer(8), Endianess.little);
        const serializer = createProtobufSerializer(dv);

        const a = encodeVarInt(1n);
        const b = encodeVarInt(2n);
        const c = encodeVarInt(3n);

        const arr = new Uint8Array(a.byteLength + b.byteLength + c.byteLength);
        arr.set(a, 0);
        arr.set(b, 1);
        arr.set(c, 2);

        serializer.serializeLenBytes(6, arr);

        const bytes = serializer.toBytes();
        expect(bytes).to.deep.equal(
          new Uint8Array([0x32, 0x03, 0x01, 0x02, 0x03]),
        );
      });

      it('should encode example - Repeated Elements', () => {
        // Example, Message Structure:
        //
        // message Test4 {
        // string d = 4;
        // repeated int32 e = 6;
        // }
        //
        // with e set to 3, 270, and 86942
        const dv = createBufferedDataView(new ArrayBuffer(8), Endianess.little);
        const serializer = createProtobufSerializer(dv);

        const a = encodeVarInt(3n);
        const b = encodeVarInt(270n);
        const c = encodeVarInt(86942n);

        const arr = new Uint8Array(a.byteLength + b.byteLength + c.byteLength);
        arr.set(a, 0);
        arr.set(b, 1);
        arr.set(c, 3);

        serializer.serializeLenBytes(6, arr);

        const bytes = serializer.toBytes();
        expect(bytes).to.deep.equal(
          new Uint8Array([0x32, 0x06, 0x03, 0x8e, 0x02, 0x9e, 0xa7, 0x05]),
        );
      });
    });
  });
});
