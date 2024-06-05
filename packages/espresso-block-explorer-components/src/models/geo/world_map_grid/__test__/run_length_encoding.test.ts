import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { describe, it } from 'vitest';
import {
  expandRunLengthEncoding,
  runLengthEncode,
} from '../run_length_encoding';

describe('Run Length Encoding', () => {
  it('should compress 64 bytes of 0xff to 2 bytes', () => {
    const input = new Uint8Array(64).fill(0xff);
    const encoded = runLengthEncode(input.buffer);

    expect(new Uint8Array(encoded)).toEqual(new Uint8Array([0x40, 0xff]));
  });

  it('should expand into 64 bytes of 0xff', () => {
    const input = new Uint8Array([0x40, 0xff]);
    const decoded = expandRunLengthEncoding(input.buffer);

    expect(new Uint8Array(decoded)).toEqual(new Uint8Array(64).fill(0xff));
  });

  it('should encode and decode to the same value', () => {
    const prng = new PseudoRandomNumberGenerator();
    const input = prng.fillBytes(64);
    const encoded = runLengthEncode(input);
    const decoded = expandRunLengthEncoding(encoded);

    expect(new Uint8Array(decoded)).toEqual(new Uint8Array(input));
  });
});
