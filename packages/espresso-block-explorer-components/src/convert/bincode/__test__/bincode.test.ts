import { createBufferedDataView, Endianess } from '@/convert/data_view';
import { describe, expect, test } from 'vitest';
import { createBincodeDeserializer } from '../deserializer';
import { createBincodeSerializer } from '../serializer';

describe('bincode', () => {
  describe('primitives', () => {
    describe('serialize and deserialize', () => {
      test('boolean', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [true, false];
        const byteSize = 1;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeBoolean(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeBoolean()).to.equal(value);
          }
        }
      });

      test('int8', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [0, -128, 127, -1];
        const byteSize = 1;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeInt8(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeInt8()).to.equal(value);
          }
        }
      });

      test('uint8', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [0, 255, 127];
        const byteSize = 1;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeUint8(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeUint8()).to.equal(value);
          }
        }
      });

      test('int16', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [0, -128, 127, -1, -0x8000, 0x7fff];
        const byteSize = 2;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeInt16(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeInt16()).to.equal(value);
          }
        }
      });

      test('uint16', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [0, 255, 127, 0xffff];
        const byteSize = 2;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeUint16(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeUint16()).to.equal(value);
          }
        }
      });

      test('int32', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [
          0, -128, 127, -1, -0x8000, 0x7fff, -0x80000000, 0x7fffffff,
        ];
        const byteSize = 4;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeInt32(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeInt32()).to.equal(value);
          }
        }
      });

      test('uint32', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [0, 255, 127, 0xffff, 0xffffffff];
        const byteSize = 4;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeUint32(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeUint32()).to.equal(value);
          }
        }
      });

      test('int64', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [
          0n,
          -128n,
          127n,
          -1n,
          -0x8000n,
          0x7fffn,
          -0x80000000n,
          0x7fffffffn,
          -0x8000000000000000n,
          0x7fffffffffffffffn,
        ];
        const byteSize = 8;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeInt64(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeInt64()).to.equal(value);
          }
        }
      });

      test('uint64', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [
          0n,
          255n,
          127n,
          0xffffn,
          0xffffffffn,
          0xffffffffffffffffn,
        ];
        const byteSize = 8;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeUint64(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeUint64()).to.equal(value);
          }
        }
      });

      test('int128', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [
          0n,
          -128n,
          127n,
          -1n,
          -0x8000n,
          0x7fffn,
          -0x80000000n,
          0x7fffffffn,
          -0x8000000000000000n,
          0x7fffffffffffffffn,
          -0x80000000000000000000000000000000n,
          0x7fffffffffffffffffffffffffffffffn,
        ];
        const byteSize = 16;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeInt128(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeInt128()).to.equal(value);
          }
        }
      });

      test('uint128', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [
          0n,
          255n,
          127n,
          0xffffn,
          0xffffffffn,
          0xffffffffffffffffn,
          0xffffffffffffffffffffffffffffffffn,
        ];
        const byteSize = 16;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeUint128(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeUint128()).to.equal(value);
          }
        }
      });

      test('float32', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [-1.0, 0.0, 1.0];
        const byteSize = 4;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeFloat32(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeFloat32()).to.equal(value);
          }
        }
      });

      test('float64', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [-1.0, 0.0, 1.0];
        const byteSize = 8;

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeFloat64(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(byteSize);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeFloat64()).to.equal(value);
          }
        }
      });

      test('string', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = ['', 'hello', 'world', '🌍'];

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeStringUTF8(value)).not.toThrow();
            const bytes = serializer.toBytes();
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeStringUTF8()).to.equal(value);
          }
        }
      });

      test('bytes', () => {
        const endians = [Endianess.little, Endianess.big];
        const values = [new Uint8Array(0), new Uint8Array([0, 1, 2, 3])];

        for (const endianess of endians) {
          for (const value of values) {
            const dataArray = new Uint8Array(1024);
            const bufferedDataView = createBufferedDataView(
              dataArray.buffer,
              endianess,
            );
            const serializer = createBincodeSerializer(bufferedDataView);
            expect(() => serializer.serializeBytes(value)).not.toThrow();
            const bytes = serializer.toBytes();
            expect(bytes.byteLength).to.equal(value.byteLength + 8);
            const deserializer = createBincodeDeserializer(
              createBufferedDataView(bytes.buffer, endianess),
            );
            expect(deserializer.deserializeBytes()).to.deep.equal(value);
          }
        }
      });
    });
  });
});
