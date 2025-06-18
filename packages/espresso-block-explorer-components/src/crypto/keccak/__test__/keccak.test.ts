import { hexArrayBufferCodec } from '@/convert/codec';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { createKeccakHash } from '../family';

describe('keccak', () => {
  describe('NPM Examples', () => {
    it('should match the NPM examples', () => {
      const testCases = [
        [
          'keccak256',
          [],
          '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
        ],
        [
          'keccak256',
          ['Hello world!'],
          '0xecd0e108a98e192af1d2c25055f4e3bed784b5c877204e73219a5203251feaab',
        ],
      ];
      const encoder = new TextEncoder();

      for (const [algorithm, inputs, expected] of testCases) {
        const hash = createKeccakHash(algorithm);
        for (const input of inputs) {
          const encoded = encoder.encode(input);
          hash.update(encoded.buffer);
        }
        const digest = hash.digest();
        expect(hexArrayBufferCodec.encode(digest)).to.equal(expected);
      }
    });
  });

  describe('examples', () => {
    it('should match the examples', () => {
      const encoder = new TextEncoder();
      const testCases = [
        [
          'keccak256',
          [new Uint8Array(encoder.encode('Hello, world!'))],
          '0xb6e16d27ac5ab427a7f68900ac5559ce272dc6c37c82b3e052246c82244c50e4',
        ],

        [
          'keccak256',
          [
            // 0x1234567890123456789012345678901234567890
            new Uint8Array(
              encoder.encode('0x1234567890123456789012345678901234567890'),
            ),
          ],
          '0x55608cdbde2ff4183a81e62da096fa863d8f910d29d17826124fccc9bcc11f62',
        ],

        [
          'keccak256',
          [
            // 0x1234567890123456789012345678901234567890
            new Uint8Array(
              encoder.encode('1234567890123456789012345678901234567890'),
            ),
          ],
          '0xc9b63ffea58bd290410ff41c36bd5f7d365cb9e81ec9925d620cff36b5a6fe38',
        ],

        [
          'keccak256',
          [
            // 0x1234567890123456789012345678901234567890
            new Uint8Array([
              0x12, 0x34, 0x56, 0x78, 0x90, 0x12, 0x34, 0x56, 0x78, 0x90, 0x12,
              0x34, 0x56, 0x78, 0x90, 0x12, 0x34, 0x56, 0x78, 0x90,
            ]),
          ],
          '0xb6979620706f8c652cfb6bf6e923f5156eadd5abaf4022a0b19d52ada089475f',
        ],
      ] as const;

      for (const [algorithm, inputs, expected] of testCases) {
        const hash = createKeccakHash(algorithm);
        for (const input of inputs) {
          hash.update(input);
        }
        const digest = hash.digest();
        expect(
          hexArrayBufferCodec.encode(digest),
          `hashed values for [${inputs.map((input) => hexArrayBufferCodec.encode(input.buffer)).join(', ')}] should match`,
        ).to.equal(expected);
      }
    });
  });
});
