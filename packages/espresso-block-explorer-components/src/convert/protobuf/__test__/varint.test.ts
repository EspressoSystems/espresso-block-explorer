import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { describe, expect, it } from 'vitest';
import { decodeVarInt, encodeVarInt } from '../varint';

describe('Protobuf', () => {
  describe('varint', () => {
    describe('encoding', () => {
      it('should encode state examples', () => {
        {
          const encoded = encodeVarInt(1n);
          expect(encoded).to.deep.equal(new Uint8Array([0b0000_0001]));
        }

        {
          const encoded = encodeVarInt(150n);
          expect(encoded).to.deep.equal(
            new Uint8Array([0b1001_0110, 0b0000_0001]),
          );
        }
      });
    });

    describe('decoding', () => {
      it('should decode stated example', () => {
        {
          // First Example comes from protbuf's encoding guide:
          // https://protobuf.dev/programming-guides/encoding/ Base 128 Varints

          const example = new Uint8Array([0b0000_0001]);
          const dv = new DataView(example.buffer);

          expect(() => decodeVarInt(dv)).not.toThrow();
          expect(decodeVarInt(dv)).toEqual({
            number: 1n,
            bytesRead: 1,
          });
        }

        {
          // First Example comes from protbuf's encoding guide:
          // https://protobuf.dev/programming-guides/encoding/ Base 128 Varints

          const example = new Uint8Array([0b1001_0110, 0b0000_0001]);
          const dv = new DataView(example.buffer);

          expect(() => decodeVarInt(dv)).not.toThrow();
          expect(decodeVarInt(dv)).toEqual({
            number: 150n,
            bytesRead: 2,
          });
        }
      });
    });

    describe('max uint64', () => {
      it('should encode and decode as expected', () => {
        const example = (1n << 64n) - 1n;
        const expectedEncoding = new Uint8Array([
          0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01,
        ]);
        const encoded = encodeVarInt(example);

        expect(encoded).to.deep.equal(expectedEncoding);

        const decoded = decodeVarInt(new DataView(expectedEncoding.buffer));
        expect(decoded.number).toEqual(example);
        expect(decoded.bytesRead).toEqual(expectedEncoding.byteLength);
      });
    });

    describe('regression tests - edge cases', () => {
      it('should encode / decode value correctly', () => {
        {
          const example = 1973875402863216861n;
          const expectedEncoding = new Uint8Array([
            0xdd, 0x91, 0xac, 0xd4, 0x88, 0xa7, 0xa7, 0xb2, 0x1b,
          ]);
          const encoded = encodeVarInt(example);

          expect(encoded).to.deep.equal(expectedEncoding);

          const decoded = decodeVarInt(new DataView(expectedEncoding.buffer));
          expect(decoded.number).toEqual(example);
          expect(decoded.bytesRead).toEqual(expectedEncoding.byteLength);
        }
      });
    });

    describe('encode and decode random', () => {
      it('should be symetric', () => {
        const prng = new PseudoRandomNumberGenerator();

        for (let i = 0; i < 100; i++) {
          const rand = prng.nextRangeBigInt(0n, 1n << 64n);

          const encoded = encodeVarInt(rand);
          const decoded = decodeVarInt(new DataView(encoded.buffer));

          expect(decoded.number).toEqual(rand);
          expect(decoded.bytesRead).toEqual(encoded.byteLength);
        }
      });
    });
  });
});
