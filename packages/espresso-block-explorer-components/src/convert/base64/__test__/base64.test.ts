import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { rawURLEncoding, stdEncoding } from '../base64';

function* charCodes(str: string): Generator<number> {
  const l = str.length;
  for (let i = 0; i < l; i++) {
    yield str.charCodeAt(i);
  }
}

describe('base64', () => {
  describe('Std Encoding', () => {
    describe('RFC 3548 examples', () => {
      it('should encode to expected value', () => {
        const examples = new Map<ArrayBuffer, string>([
          [
            new Uint8Array([0x14, 0xfb, 0x9c, 0x03, 0xd9, 0x7e]).buffer,
            'FPucA9l+',
          ],
          [new Uint8Array([0x14, 0xfb, 0x9c, 0x03, 0xd9]).buffer, 'FPucA9k='],
          [new Uint8Array([0x14, 0xfb, 0x9c, 0x003]).buffer, 'FPucAw=='],
        ]);

        for (const [input, want] of examples.entries()) {
          expect(stdEncoding.encodeToString(input)).equals(want);
        }
      });
    });

    describe('RFC 4648 examples', () => {
      it('should encode to expected value', () => {
        const examples = new Map<ArrayBuffer, string>([
          [new Uint8Array(charCodes('')).buffer, ''],
          [new Uint8Array(charCodes('f')).buffer, 'Zg=='],
          [new Uint8Array(charCodes('fo')).buffer, 'Zm8='],
          [new Uint8Array(charCodes('foo')).buffer, 'Zm9v'],
          [new Uint8Array(charCodes('foob')).buffer, 'Zm9vYg=='],
          [new Uint8Array(charCodes('fooba')).buffer, 'Zm9vYmE='],
          [new Uint8Array(charCodes('foobar')).buffer, 'Zm9vYmFy'],
        ]);

        for (const [input, want] of examples.entries()) {
          expect(stdEncoding.encodeToString(input)).equals(want);
        }
      });
    });

    describe('Wikipedia Examples', () => {
      it('should encode to expected value', () => {
        const examples = new Map<ArrayBuffer, string>([
          [new Uint8Array(charCodes('sure.')).buffer, 'c3VyZS4='],
          [new Uint8Array(charCodes('sure')).buffer, 'c3VyZQ=='],
          [new Uint8Array(charCodes('sur')).buffer, 'c3Vy'],
          [new Uint8Array(charCodes('su')).buffer, 'c3U='],
          [new Uint8Array(charCodes('leasure.')).buffer, 'bGVhc3VyZS4='],
          [new Uint8Array(charCodes('easure.')).buffer, 'ZWFzdXJlLg=='],
          [new Uint8Array(charCodes('asure.')).buffer, 'YXN1cmUu'],
          [new Uint8Array(charCodes('sure.')).buffer, 'c3VyZS4='],
        ]);

        for (const [input, want] of examples.entries()) {
          expect(stdEncoding.encodeToString(input)).equals(want);
        }
      });
    });

    describe('Decoding Corruption', () => {
      it('should not be corrupted', () => {
        const examples = ['', '\n', 'AAA=', 'AAAA\n', 'AA==', 'AAA=', 'AAAA'];

        for (const example of examples) {
          expect(() =>
            stdEncoding.decode(new Uint8Array(charCodes(example)).buffer),
          ).not.throws();
        }
      });

      it('should be corrupted', () => {
        const examples = [
          '!!!!',
          '====',
          'x===',
          '-AAA',
          'A=AA',
          'AA=A',
          'AAA=AAAA',
          'AAAAA',
          'AAAAAA',
          'A=',
          'A==',
          'AA=',
          'AAAAA=',
          'YWJjZA=====',
          'A!\n',
          'A=\n',
        ];

        for (const example of examples) {
          expect(() =>
            stdEncoding.decode(new Uint8Array(charCodes(example))),
          ).throws();
        }
      });
    });

    describe('With New Lines', () => {
      it('should decode to "sure"', () => {
        const examples = [
          'c3VyZQ==',
          'c3VyZQ==\r',
          'c3VyZQ==\n',
          'c3VyZQ==\r\n',
          'c3VyZ\r\nQ==',
          'c3V\ryZ\nQ==',
          'c3V\nyZ\rQ==',
          'c3VyZ\nQ==',
          'c3VyZQ\n==',
          'c3VyZQ=\n=',
          'c3VyZQ=\r\n\r\n=',
        ];
        const textDecoder = new TextDecoder();

        for (const example of examples) {
          const buffer = stdEncoding.decode(
            new Uint8Array(charCodes(example)).buffer,
          );
          const have = textDecoder.decode(buffer);
          expect(have).equals('sure');
        }
      });
    });
  });

  describe('encoding', () => {
    it('should re-encode to what was encoded when a multiple of 4', () => {
      const raw = 'deadbeef';
      const decoded = rawURLEncoding.decodeString(raw);
      expect(Array.from(new Uint8Array(decoded))).deep.equals([
        117, 230, 157, 109, 231, 159,
      ]);
      expect(decoded.byteLength).equals(6);
      const encoded = rawURLEncoding.encodeToString(decoded);

      expect(encoded).equals(raw);
    });

    it('should re-encode with a longer example', () => {
      const raw =
        'Wmt99l4trRZU91A6kBIIP748xkwE2eeDkmnAcwYNhQZZtwrwgqLYIEavovqw83HzRSEI2YvQvFeRz6f7I51GC30';
      const decoded = rawURLEncoding.decodeString(raw);
      expect(Array.from(new Uint8Array(decoded))).deep.equals([
        90, 107, 125, 246, 94, 45, 173, 22, 84, 247, 80, 58, 144, 18, 8, 63,
        190, 60, 198, 76, 4, 217, 231, 131, 146, 105, 192, 115, 6, 13, 133, 6,
        89, 183, 10, 240, 130, 162, 216, 32, 70, 175, 162, 250, 176, 243, 113,
        243, 69, 33, 8, 217, 139, 208, 188, 87, 145, 207, 167, 251, 35, 157, 70,
        11, 125,
      ]);
      expect(decoded.byteLength).equals(65);
      const encoded = rawURLEncoding.encodeToString(decoded);

      expect(encoded).equals(raw);
    });

    // it('should re-encode to what was encoded when a multiple of 3', () => {
    //   const raw = 'deadbe';
    //   const decoded = rawURLEncoding.decodeString(raw);
    //   expect(decoded.byteLength).equals(5);
    //   const encoded = rawURLEncoding.encodeToString(decoded);

    //   expect(encoded).equals(raw);
    // });
  });
});
