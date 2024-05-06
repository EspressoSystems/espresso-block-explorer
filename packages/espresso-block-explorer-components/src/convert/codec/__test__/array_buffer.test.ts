import { TypeCheckingCodec } from '@/convert';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { describe, expect, it } from 'vitest';
import {
  hexArrayBufferCodec,
  rawStdBase64ArrayBufferCodec,
  rawURLBase64ArrayBufferCodec,
  stdBase64ArrayBufferCodec,
  urlBase64ArrayBufferCodec,
} from '../array_buffer';

function appendGarbage(
  input: (boolean | number | null | undefined | string | bigint | object)[],
): void {
  input.push(1, null, undefined, 'f', 1n, {});
}

function testCodecEncodeDecode(codec: TypeCheckingCodec<ArrayBuffer, string>) {
  const prng = new PseudoRandomNumberGenerator();
  const ab1 = prng.fillBytes(20);
  const encoded = codec.encode(ab1);
  const ab2 = codec.decode(encoded);
  expect(ab1).deep.equals(ab2);
}

describe('Array Buffer Codec', () => {
  describe('Base64', () => {
    describe('URL Safe Padded', () => {
      it('should recover the same result from decoding an encoded Array Buffer', () => {
        testCodecEncodeDecode(urlBase64ArrayBufferCodec);
      });

      it('should encoded as expected', () => {
        expect(
          urlBase64ArrayBufferCodec.encode(
            new Uint8Array([0xde, 0xad, 0xc0, 0xde, 0xde, 0xff, 0xbe, 0xef])
              .buffer,
          ),
        ).equals('3q3A3t7_vu8=');
      });
    });

    describe('Std Padded', () => {
      it('should recover the same result from decoding an encoded Array Buffer', () => {
        testCodecEncodeDecode(stdBase64ArrayBufferCodec);
      });

      it('should encoded as expected', () => {
        expect(
          stdBase64ArrayBufferCodec.encode(
            new Uint8Array([0xde, 0xad, 0xc0, 0xde, 0xde, 0xff, 0xbe, 0xef])
              .buffer,
          ),
        ).equals('3q3A3t7/vu8=');
      });
    });

    describe('URL Safe Raw', () => {
      it('should recover the same result from decoding an encoded Array Buffer', () => {
        testCodecEncodeDecode(rawURLBase64ArrayBufferCodec);
      });

      it('should encoded as expected', () => {
        expect(
          rawURLBase64ArrayBufferCodec.encode(
            new Uint8Array([0xde, 0xad, 0xc0, 0xde, 0xde, 0xff, 0xbe, 0xef])
              .buffer,
          ),
        ).equals('3q3A3t7_vu8');
      });

      it('should throw an error when encountering an invalid type', () => {
        const cases: string[] = [];

        appendGarbage(cases);

        const l = cases.length;
        for (let i = 0; i < l; i++) {
          const c = cases[i];
          expect(() => rawURLBase64ArrayBufferCodec.decode(c)).toThrow();
        }
      });
    });

    describe('Std Raw', () => {
      it('should recover the same result from decoding an encoded Array Buffer', () => {
        testCodecEncodeDecode(rawStdBase64ArrayBufferCodec);
      });

      it('should encoded as expected', () => {
        expect(
          rawStdBase64ArrayBufferCodec.encode(
            new Uint8Array([0xde, 0xad, 0xc0, 0xde, 0xde, 0xff, 0xbe, 0xef])
              .buffer,
          ),
        ).equals('3q3A3t7/vu8');
      });

      it('should throw an error when encountering an invalid type', () => {
        const cases: string[] = [];

        appendGarbage(cases);

        const l = cases.length;
        for (let i = 0; i < l; i++) {
          const c = cases[i];
          expect(() => rawStdBase64ArrayBufferCodec.decode(c)).toThrow();
        }
      });
    });
  });

  describe('Hex', () => {
    it('should recover the same result from decoding an encoded Array Buffer', () => {
      testCodecEncodeDecode(hexArrayBufferCodec);
    });

    it('should encoded as expected', () => {
      expect(
        hexArrayBufferCodec.encode(
          new Uint8Array([0xde, 0xad, 0xc0, 0xde, 0xde, 0xff, 0xbe, 0xef])
            .buffer,
        ),
      ).equals('0xdeadc0dedeffbeef');
    });

    it('should throw an error when encountering an invalid type', () => {
      const cases: string[] = [];

      appendGarbage(cases);

      const l = cases.length;
      for (let i = 0; i < l; i++) {
        const c = cases[i];
        expect(() => hexArrayBufferCodec.decode(c)).toThrow();
      }
    });
  });
});
