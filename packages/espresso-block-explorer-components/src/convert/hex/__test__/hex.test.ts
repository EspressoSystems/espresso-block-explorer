import { compareArrayBuffer } from '@/functional/functional';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { parseHexString } from '../hex';

describe('hex', () => {
  it('should decode lower case hex string without issue', () => {
    expect(
      compareArrayBuffer(
        parseHexString('0123456789abcdef'),
        new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef]).buffer,
      ),
    ).equals(0);
  });

  it('should decode upper case hex string without issue', () => {
    expect(
      compareArrayBuffer(
        parseHexString('0123456789ABCDEF'),
        new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef]).buffer,
      ),
    ).equals(0);
  });

  it('should handle prefixes with 0x', () => {
    expect(
      compareArrayBuffer(
        parseHexString('0x0123456789abcdef'),
        new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef]).buffer,
      ),
    ).equals(0);
  });

  it('should throw if the hex string is not a multiple of 2', () => {
    expect(() => parseHexString('1')).toThrow();
  });

  it('should throw if the contents of the string are not a hex value', () => {
    expect(() => parseHexString('0123ax')).toThrow();
  });
});
