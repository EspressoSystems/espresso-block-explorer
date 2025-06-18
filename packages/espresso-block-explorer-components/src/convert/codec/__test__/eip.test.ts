import { describe, expect, it } from 'vitest';
import { hexArrayBufferCodec } from '../array_buffer';
import { eip55Encoder } from '../eip_55';

describe('EIP-55 tests', () => {
  // these specification examples are taken from the EIP-55 specification
  // https://eips.ethereum.org/EIPS/eip-55
  describe('Specification Examples', () => {
    it('should encode and decode EIP-55 addresses correctly', () => {
      const testCases = [
        '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
        '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
        '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB',
        '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb',
      ];

      for (const address of testCases) {
        const decoded = hexArrayBufferCodec.decode(address);
        expect(eip55Encoder.convert(decoded)).to.equal(address);
      }
    });
  });
});
