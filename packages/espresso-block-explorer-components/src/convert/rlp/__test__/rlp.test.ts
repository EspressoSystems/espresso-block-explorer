import { createBufferedDataView, Endianess } from '@/convert/data_view';
import { describe, expect, test } from 'vitest';
import { createRLPSerializer, RLPSerializer } from '../serializer';

describe('rlp', () => {
  describe('encoding examples', () => {
    // Strings
    test('should encoding the string "dog" as expected', () => {
      const input = 'dog';
      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(8), Endianess.big),
      );
      const textEncoder = new TextEncoder();
      serializer.serializeUnknown(textEncoder.encode(input));
      const bytes = serializer.toBytes();

      expect(bytes).to.deep.equal(
        new Uint8Array([0x83, ...input.split('').map((c) => c.charCodeAt(0))]),
        'should encode "dog" correctly',
      );
    });

    test('should encoding the string "" as expected', () => {
      const input = new Uint8Array(0);
      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(8), Endianess.big),
      );
      serializer.serializeUnknown(input);
      const bytes = serializer.toBytes();

      expect(bytes).to.deep.equal(
        new Uint8Array([0x80]),
        'should encode "" correctly',
      );
    });

    // Integers

    test('should encode integer 0 as expected', () => {
      {
        const examples = [0, 0n];

        for (const input of examples) {
          const serializer = createRLPSerializer(
            createBufferedDataView(new ArrayBuffer(4), Endianess.big),
          );
          serializer.serializeUnknown(input);
          const bytes = serializer.toBytes();
          expect(bytes).to.deep.equal(
            new Uint8Array([0x80]),
            'should encode 0 correctly',
          );
        }
      }

      {
        const examples = [
          (serializer: RLPSerializer) => serializer.serializeUnknown(0),
          (serializer: RLPSerializer) => serializer.serializeUint8(0),
          (serializer: RLPSerializer) => serializer.serializeUint16(0),
          (serializer: RLPSerializer) => serializer.serializeUint32(0),
          (serializer: RLPSerializer) => serializer.serializeUint64(0n),
          (serializer: RLPSerializer) => serializer.serializeUint128(0n),
          (serializer: RLPSerializer) => serializer.serializeInt8(0),
          (serializer: RLPSerializer) => serializer.serializeInt16(0),
          (serializer: RLPSerializer) => serializer.serializeInt32(0),
          (serializer: RLPSerializer) => serializer.serializeInt64(0n),
          (serializer: RLPSerializer) => serializer.serializeInt128(0n),
        ];

        for (const test of examples) {
          const serializer = createRLPSerializer(
            createBufferedDataView(new ArrayBuffer(16), Endianess.big),
          );
          test(serializer);
          const bytes = serializer.toBytes();
          expect(bytes).to.deep.equal(
            new Uint8Array([0x80]),
            'should encode 0 correctly',
          );
        }
      }

      {
        const examples = [
          [
            (serializer: RLPSerializer) => serializer.serializeUnknown(-1),
            new Uint8Array([
              0x88, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            ]),
          ],
          [
            (serializer: RLPSerializer) => serializer.serializeInt8(-1),
            new Uint8Array([0x81, 0xff]),
          ],
          [
            (serializer: RLPSerializer) => serializer.serializeInt16(-1),
            new Uint8Array([0x82, 0xff, 0xff]),
          ],
          [
            (serializer: RLPSerializer) => serializer.serializeInt32(-1),
            new Uint8Array([0x84, 0xff, 0xff, 0xff, 0xff]),
          ],
          [
            (serializer: RLPSerializer) => serializer.serializeInt64(-1n),
            new Uint8Array([
              0x88, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            ]),
          ],
          [
            (serializer: RLPSerializer) => serializer.serializeInt128(-1n),
            new Uint8Array([
              0x90, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
              0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            ]),
          ],
        ] as const;

        for (const [test, result] of examples) {
          const serializer = createRLPSerializer(
            createBufferedDataView(new ArrayBuffer(18), Endianess.big),
          );
          test(serializer);
          const bytes = serializer.toBytes();
          expect(bytes).to.deep.equal(result, 'should encode -1 correctly');
        }
      }
    });

    // Bytes

    test('should encode the bytes "\\x00" as expected', () => {
      const input = new Uint8Array([0x00]);
      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(8), Endianess.big),
      );
      serializer.serializeUnknown(input);
      const bytes = serializer.toBytes();

      expect(bytes).to.deep.equal(
        new Uint8Array([0x00]),
        'should encode "\\x00" correctly',
      );
    });

    test('should encode the bytes "\\x0f" as expected', () => {
      const input = new Uint8Array([0x0f]);
      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(8), Endianess.big),
      );
      serializer.serializeUnknown(input);
      const bytes = serializer.toBytes();

      expect(bytes).to.deep.equal(
        new Uint8Array([0x0f]),
        'should encode "\\x0f" correctly',
      );
    });

    // Lists

    test('should encode the list ["cat", "dog"] as expected', () => {
      const input = ['cat', 'dog'];
      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(9), Endianess.big),
      );
      const textEncoder = new TextEncoder();
      serializer.serializeUnknown(
        input.map((item) => textEncoder.encode(item).buffer),
      );
      // The RLP encoding for ["cat", "dog"] is
      const bytes = serializer.toBytes();

      expect(bytes).to.deep.equal(
        new Uint8Array([
          0xc8,
          0x83,
          'c'.charCodeAt(0),
          'a'.charCodeAt(0),
          't'.charCodeAt(0),
          0x83,
          'd'.charCodeAt(0),
          'o'.charCodeAt(0),
          'g'.charCodeAt(0),
        ]),
        'should encode ["cat", "dog"] correctly',
      );
    });

    test('should encode the set theoretical representation as expected', () => {
      const input = [[], [[]], [[], [[]]]];

      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(8), Endianess.big),
      );
      serializer.serializeUnknown(input);
      const bytes = serializer.toBytes();
      expect(bytes).to.deep.equal(
        new Uint8Array([0xc7, 0xc0, 0xc1, 0xc0, 0xc3, 0xc0, 0xc1, 0xc0]),
        'should encode the set theoretical representation correctly',
      );
    });

    // null
    test('should know how to encode null', () => {
      const input = null;
      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(4), Endianess.big),
      );
      serializer.serializeUnknown(input);
      const bytes = serializer.toBytes();
      expect(bytes).to.deep.equal(
        new Uint8Array([0x80]),
        'should encode null correctly',
      );
    });

    // Exceptions

    test('should not know how to encode a non-integer', () => {
      const input = 1.5;
      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(8), Endianess.big),
      );
      expect(() => serializer.serializeUnknown(input)).toThrow();
    });

    test('should not know how to encode a string', () => {
      const input = 'hello';
      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(8), Endianess.big),
      );
      expect(() => serializer.serializeUnknown(input)).toThrow();
    });

    test('should not know how to encode a an unsupported type', () => {
      const input = Promise.resolve(1);
      const serializer = createRLPSerializer(
        createBufferedDataView(new ArrayBuffer(8), Endianess.big),
      );
      expect(() => serializer.serializeUnknown(input)).toThrow();
    });
  });
});
