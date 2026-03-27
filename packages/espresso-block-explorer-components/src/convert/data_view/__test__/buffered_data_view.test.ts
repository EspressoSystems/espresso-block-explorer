import { describe, it, expect } from 'vitest';
import { createBufferedDataView } from '../buffered_data_view';
import { Endianess } from '../endianess';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';

describe('BufferedDataView', () => {
  describe('-1n', () => {
    it('should encode signed 512 bits correctly', () => {
      const cases = [Endianess.little, Endianess.big] as const;
      for (const endianess of cases) {
        const ab = new ArrayBuffer(64);
        {
          const dv = createBufferedDataView(ab, endianess);
          dv.setBigInt512(-1n);
        }

        {
          const dv = createBufferedDataView(ab, endianess);
          const result = dv.getBigInt512();

          expect(result).toBe(-1n);
        }

        {
          const dv = new DataView(ab);
          for (let i = 0; i < 64; i++) {
            expect(dv.getUint8(i)).toBe(0xff);
          }
        }
      }
    });
  });

  describe('1n', () => {
    describe('Little Endian', () => {
      it('should encode signed 512 bits correctly', () => {
        const ab = new ArrayBuffer(64);
        {
          const dv = createBufferedDataView(ab, Endianess.little);
          dv.setBigInt512(1n);
        }

        {
          const dv = createBufferedDataView(ab, Endianess.little);
          const result = dv.getBigInt512();

          expect(result).toBe(1n);
        }

        {
          const dv = new DataView(ab);
          expect(dv.getUint8(0)).toBe(0x01);
          for (let i = 1; i < 64; i++) {
            expect(dv.getUint8(i)).toBe(0);
          }
        }
      });
    });

    it('should encode signed static value as expected', () => {
      const ab = new ArrayBuffer(64);
      const value =
        0x6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345n;
      {
        const dv = createBufferedDataView(ab, Endianess.little);
        dv.setBigInt512(value);
      }

      {
        const dv = createBufferedDataView(ab, Endianess.little);
        const result = dv.getBigInt512();

        expect(result).toBe(value);
      }

      expect(hexArrayBufferCodec.encode(ab)).toBe(
        '0x452301efcdab8967452301efcdab8967452301efcdab8967452301efcdab8967452301efcdab8967452301efcdab8967452301efcdab8967452301efcdab8967',
      );
    });
  });

  describe('Big Endian', () => {
    it('should encode signed 512 bits correctly', () => {
      const ab = new ArrayBuffer(64);
      {
        const dv = createBufferedDataView(ab, Endianess.big);
        dv.setBigInt512(1n);
      }

      {
        const dv = createBufferedDataView(ab, Endianess.big);
        const result = dv.getBigInt512();

        expect(result).toBe(1n);
      }

      {
        const dv = new DataView(ab);
        for (let i = 0; i < 63; i++) {
          expect(dv.getUint8(i)).toBe(0);
        }
        expect(dv.getUint8(63)).toBe(0x01);
      }
    });

    it('should encode signed static value as expected', () => {
      const ab = new ArrayBuffer(64);
      const value =
        0x6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345_6789abcdef012345n;
      {
        const dv = createBufferedDataView(ab, Endianess.big);
        dv.setBigInt512(value);
      }

      {
        const dv = createBufferedDataView(ab, Endianess.big);
        const result = dv.getBigInt512();

        expect(result).toBe(value);
      }

      expect(hexArrayBufferCodec.encode(ab)).toBe(
        '0x6789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef012345',
      );
    });
  });

  describe('Known Value', () => {
    /**
     * Example Value retrieved from website: https://asecuritysite.com/principles/numbers01
     * on 2026-03-24. Content is:
     *
     * Value (hex): 9a8f4925d1519f5775cf46b04b5800d4ee9ee8bae8bc5565d498c28dd9c9baf5
     * Number of bytes: 32
     *
     * Little-endian:	111146674573202261995886684352240153595598170674206952625799086936268189831066
     * Big-endian:	69909342659131521642512266713390767261668034345493398857294559805169799379701
     */

    it('should match the expected value', () => {
      const string =
        '0x9a8f4925d1519f5775cf46b04b5800d4ee9ee8bae8bc5565d498c28dd9c9baf5';
      const buffer = hexArrayBufferCodec.decode(string);

      {
        const dv = createBufferedDataView(buffer, Endianess.little);
        expect(
          dv.getBigUint256(),
          'Little Endian value did not match expected value',
        ).toBe(
          111146674573202261995886684352240153595598170674206952625799086936268189831066n,
        );
      }

      {
        const dv = createBufferedDataView(buffer, Endianess.big);
        expect(
          dv.getBigUint256(),
          'Big Endian value did not match expected value',
        ).toBe(
          69909342659131521642512266713390767261668034345493398857294559805169799379701n,
        );
      }
    });
  });
});
