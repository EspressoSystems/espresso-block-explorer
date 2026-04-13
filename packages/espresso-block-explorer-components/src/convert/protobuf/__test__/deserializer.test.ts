import { describe, expect, it } from 'vitest';
import { createProtobufDeserializer } from '../deserializer';
import { decodeVarInt } from '../varint';

describe('Protobuf', () => {
  describe('Deserializer', () => {
    // Examples taken from documentation on https://protobuf.dev/programming-guides/encoding/
    describe('Decoding Examples', () => {
      it('should encode example - A Simple Message', () => {
        // Example, Message Structure:
        //
        // message Test1 {
        //   int32 a = 1;
        // }
        //
        // with a set to `150`.

        const deserializer = createProtobufDeserializer(
          new Uint8Array([0x08, 0x96, 0x01]),
        );
        const result = deserializer.deserializeVarIntUint32(1);
        expect(result).toEqual(150);
      });

      it('should encode example - Length-Delimited Reocrd', () => {
        // Example, Message Structure:
        //
        // message Test2 {
        //   string b = 2;
        // }
        //
        // with a set to "testing".
        const deserializer = createProtobufDeserializer(
          new Uint8Array([
            0x12, 0x07, 0x74, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x67,
          ]),
        );
        const result = deserializer.deserializeLenString(2);
        expect(result).toEqual('testing');
      });

      it('should encode example - Length-Delimited Reocrd - Submessages', () => {
        // Example, Message Structure:
        //
        // message Test3 {
        //   Test1 c = 3;
        // }
        //
        // with c's .a field set to 150

        const deserializer0 = createProtobufDeserializer(
          new Uint8Array([0x1a, 0x03, 0x08, 0x96, 0x01]),
        );
        const deserializer1 = deserializer0.deserializeSubMessage(3);

        const result = deserializer1.deserializeVarIntUint32(1);

        expect(result).toEqual(150);
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
        const deserializer = createProtobufDeserializer(
          new Uint8Array([0x32, 0x03, 0x01, 0x02, 0x03]),
        );
        const data = deserializer.deserializeLenBytes(6);
        const dv = new DataView(data.buffer, data.byteOffset);

        const a = decodeVarInt(dv, 0);
        const b = decodeVarInt(dv, a.bytesRead);
        const c = decodeVarInt(dv, a.bytesRead + b.bytesRead);

        expect(a.number).toEqual(1n);
        expect(b.number).toEqual(2n);
        expect(c.number).toEqual(3n);
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
        const deserializer = createProtobufDeserializer(
          new Uint8Array([0x32, 0x06, 0x03, 0x8e, 0x02, 0x9e, 0xa7, 0x05]),
        );
        const data = deserializer.deserializeLenBytes(6);
        const dv = new DataView(data.buffer, data.byteOffset);

        const a = decodeVarInt(dv, 0);
        const b = decodeVarInt(dv, a.bytesRead);
        const c = decodeVarInt(dv, a.bytesRead + b.bytesRead);

        expect(a.number).toEqual(3n);
        expect(b.number).toEqual(270n);
        expect(c.number).toEqual(86942n);
      });
    });
  });
});
