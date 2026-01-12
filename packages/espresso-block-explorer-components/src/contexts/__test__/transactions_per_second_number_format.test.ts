import { describe, expect, it } from 'vitest';
import TransactionsPerSecondNumberFormat from '../transactions_per_second_number_format';

describe('TransactionsPerSecondNumberFormat', () => {
  describe('Basic Functionality', () => {
    describe('en-US', () => {
      const formatter = new TransactionsPerSecondNumberFormat('en-US');
      it('should format as expected', () => {
        expect(formatter.format(1)).equals('1 Tx/s');
        expect(formatter.format(1.2345)).equals('1.235 Tx/s');
      });

      it('should format a range as expected', () => {
        expect(formatter.formatRange(1, 2)).equals('1–2 Tx/s');
        expect(formatter.formatRange(1.2345, 2.3456)).equals(
          '1.235–2.346 Tx/s',
        );
      });
    });
  });
});
