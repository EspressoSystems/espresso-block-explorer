import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { default as VariableBytesNumberFormat } from '../variable_bytes_number_format';

describe('VariableBytesNumberFormat', () => {
  describe('Basic Usage', () => {
    it('should format with basic denominations', () => {
      const formatter = new VariableBytesNumberFormat('en-US');

      expect(formatter.format(1)).toEqual('1 B');
      expect(formatter.format(1e3)).toEqual('1 kB');
      expect(formatter.format(1e6)).toEqual('1 MB');
      expect(formatter.format(1e9)).toEqual('1 GB');
      expect(formatter.format(1e12)).toEqual('1,000 GB');

      expect(formatter.format(BigInt(1))).toEqual('1 B');
      expect(formatter.format(BigInt(1e3))).toEqual('1 kB');
      expect(formatter.format(BigInt(1e6))).toEqual('1 MB');
      expect(formatter.format(BigInt(1e9))).toEqual('1 GB');
      expect(formatter.format(BigInt(1e12))).toEqual('1,000 GB');

      expect(formatter.format('1')).toEqual('1 B');
      expect(formatter.format('1000')).toEqual('1 kB');
      expect(formatter.format('1000000')).toEqual('1 MB');
      expect(formatter.format('1000000000')).toEqual('1 GB');
      expect(formatter.format('1000000000000')).toEqual('1,000 GB');
    });

    it('should read the way the explorer shows sizes', () => {
      // The options the explorer's number formatters use.
      const formatter = new VariableBytesNumberFormat('en-US', {
        unitDisplay: 'short',
        maximumFractionDigits: 2,
      });

      expect(formatter.format(0)).toEqual('0 B');
      expect(formatter.format(512)).toEqual('512 B');
      expect(formatter.format(2000)).toEqual('2 kB');
      expect(formatter.format(2048)).toEqual('2.05 kB');
      expect(formatter.format(995000)).toEqual('995 kB');
      expect(formatter.format(1500000)).toEqual('1.5 MB');
      expect(formatter.format(1536000)).toEqual('1.54 MB');
    });

    it('should step up rather than read as 1,000 of a unit', () => {
      const formatter = new VariableBytesNumberFormat('en-US', {
        unitDisplay: 'short',
        maximumFractionDigits: 2,
      });

      expect(formatter.format(999999)).toEqual('1 MB');
      expect(formatter.format(999999999)).toEqual('1 GB');
    });

    it('should format a range of plain bytes with the symbol', () => {
      const formatter = new VariableBytesNumberFormat('en-US');

      expect(formatter.formatRange(1, 500)).toEqual('1–500 B');
    });

    it('should format with ranges', () => {
      const formatter = new VariableBytesNumberFormat('en-US');

      expect(formatter.formatRange(1, 1e3)).toEqual('0.001–1 kB');
      expect(formatter.formatRange(1e3, 1e6)).toEqual('0.001–1 MB');
      expect(formatter.formatRange(1e6, 1e9)).toEqual('0.001–1 GB');
    });

    it('should format with parts', () => {
      const formatter = new VariableBytesNumberFormat('en-US');

      const expected = [
        { type: 'integer', value: '1' },
        { type: 'literal', value: ' ' },
        { type: 'unit', value: 'kB' },
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
      const formatter = new VariableBytesNumberFormat('en-US');

      const expected = [
        { type: 'integer', value: '0', source: 'startRange' },
        { type: 'decimal', value: '.', source: 'startRange' },
        { type: 'fraction', value: '001', source: 'startRange' },
        { type: 'literal', value: '–', source: 'shared' },
        { type: 'integer', value: '1', source: 'endRange' },
        { type: 'literal', value: ' ', source: 'shared' },
        { type: 'unit', value: 'kB', source: 'shared' },
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
