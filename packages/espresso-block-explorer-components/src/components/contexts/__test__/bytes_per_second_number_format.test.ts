import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import BytesPerSecondNumberFormat from '../bytes_per_second_number_format';

describe('BytesPerSecondNumberFormat', () => {
  describe('Basic Usage', () => {
    it('should format with basic denominations', () => {
      const formatter = new BytesPerSecondNumberFormat('en-US');

      expect(formatter.format(1)).toEqual('1 byte/s');
      expect(formatter.format(1e3)).toEqual('1 kB/s');
      expect(formatter.format(1e6)).toEqual('1 MB/s');
      expect(formatter.format(1e9)).toEqual('1 GB/s');
      expect(formatter.format(1e12)).toEqual('1 PB/s');

      expect(formatter.format(BigInt(1))).toEqual('1 byte/s');
      expect(formatter.format(BigInt(1e3))).toEqual('1 kB/s');
      expect(formatter.format(BigInt(1e6))).toEqual('1 MB/s');
      expect(formatter.format(BigInt(1e9))).toEqual('1 GB/s');
      expect(formatter.format(BigInt(1e12))).toEqual('1 PB/s');

      expect(formatter.format('1')).toEqual('1 byte/s');
      expect(formatter.format('1000')).toEqual('1 kB/s');
      expect(formatter.format('1000000')).toEqual('1 MB/s');
      expect(formatter.format('1000000000')).toEqual('1 GB/s');
      expect(formatter.format('1000000000000')).toEqual('1 PB/s');
    });

    it('should format with ranges', () => {
      const formatter = new BytesPerSecondNumberFormat('en-US');

      expect(formatter.formatRange(1, 1e3)).toEqual('0.001–1 kB/s');
      expect(formatter.formatRange(1e3, 1e6)).toEqual('0.001–1 MB/s');
      expect(formatter.formatRange(1e6, 1e9)).toEqual('0.001–1 GB/s');
    });

    it('should format with parts', () => {
      const formatter = new BytesPerSecondNumberFormat('en-US');

      const expected = [
        { type: 'integer', value: '1' },
        { type: 'literal', value: ' ' },
        { type: 'unit', value: 'kB/s' },
      ];

      {
        const parts = formatter.formatToParts(1e3);
        for (let i = 0; i < expected.length; i++) {
          expect(parts[i]).to.deep.equal(expected[i]);
        }
      }

      {
        const parts = formatter.formatToParts(1000n);
        for (let i = 0; i < expected.length; i++) {
          expect(parts[i]).to.deep.equal(expected[i]);
        }
      }
    });

    it('should format to parts with ranges', () => {
      const formatter = new BytesPerSecondNumberFormat('en-US');

      const expected = [
        { type: 'integer', value: '0', source: 'startRange' },
        { type: 'decimal', value: '.', source: 'startRange' },
        { type: 'fraction', value: '001', source: 'startRange' },
        { type: 'literal', value: '–', source: 'shared' },
        { type: 'integer', value: '1', source: 'endRange' },
        { type: 'literal', value: ' ', source: 'shared' },
        { type: 'unit', value: 'kB/s', source: 'shared' },
      ];

      {
        const parts = formatter.formatRangeToParts(1, 1e3);
        for (let i = 0; i < expected.length; i++) {
          expect(parts[i]).to.deep.equal(expected[i]);
        }
      }

      {
        const parts = formatter.formatRangeToParts(1n, 1000n);
        for (let i = 0; i < expected.length; i++) {
          expect(parts[i]).to.deep.equal(expected[i]);
        }
      }

      {
        const parts = formatter.formatRangeToParts(1n, 1000);
        for (let i = 0; i < expected.length; i++) {
          expect(parts[i]).to.deep.equal(expected[i]);
        }
      }
    });
  });
});
