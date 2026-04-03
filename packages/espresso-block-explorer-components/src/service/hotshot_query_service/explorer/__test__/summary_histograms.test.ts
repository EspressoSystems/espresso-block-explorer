import { describe, expect, it } from 'vitest';
import {
  CappuccinoSummaryHistograms,
  cappuccinoSummaryHistogramsCodec,
} from '../summary_histograms';

describe('CappuccinoSummaryHistograms', () => {
  it('should allow for the standard representation', () => {
    const example = new CappuccinoSummaryHistograms(
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    );

    {
      const encoded = JSON.stringify(
        cappuccinoSummaryHistogramsCodec.encode(example),
      );
      const decoded = cappuccinoSummaryHistogramsCodec.decode(
        JSON.parse(encoded),
      );

      expect(decoded).deep.equals(example);

      expect(decoded.blockTime).deep.equals([1, 2, 3, 4, 5]);
      expect(decoded.blockSize).deep.equals([6, 7, 8, 9, 10]);
      expect(decoded.blockTransactions).deep.equals([11, 12, 13, 14, 15]);
      expect(decoded.blockHeights).deep.equals([16, 17, 18, 19, 20]);
    }
  });

  it('should account for gaps in the data, and correct them', () => {
    const example = new CappuccinoSummaryHistograms(
      [1, 2, 4, 5],
      [6, 7, 9, 10],
      [11, 12, 14, 15],
      [16, 17, 19, 20],
    );

    {
      const encoded = JSON.stringify(
        cappuccinoSummaryHistogramsCodec.encode(example),
      );
      const decoded = cappuccinoSummaryHistogramsCodec.decode(
        JSON.parse(encoded),
      );

      expect(decoded).deep.equals(example);

      expect(decoded.blockTime).deep.equals([1, 2, null, 4, 5]);
      expect(decoded.blockSize).deep.equals([6, 7, null, 9, 10]);
      expect(decoded.blockTransactions).deep.equals([11, 12, null, 14, 15]);
      expect(decoded.blockHeights).deep.equals([16, 17, null, 19, 20]);
    }
  });

  it('should allow for nulls in the data', () => {
    const example = new CappuccinoSummaryHistograms(
      [1, 2, null, 4, 5],
      [6, 7, null, 9, 10],
      [11, 12, null, 14, 15],
      [16, 17, 18, 19, 20],
    );

    {
      const encoded = JSON.stringify(
        cappuccinoSummaryHistogramsCodec.encode(example),
      );
      const decoded = cappuccinoSummaryHistogramsCodec.decode(
        JSON.parse(encoded),
      );

      expect(decoded).deep.equals(example);

      expect(decoded.blockTime).deep.equals([1, 2, null, 4, 5]);
      expect(decoded.blockSize).deep.equals([6, 7, null, 9, 10]);
      expect(decoded.blockTransactions).deep.equals([11, 12, null, 14, 15]);
      expect(decoded.blockHeights).deep.equals([16, 17, 18, 19, 20]);
    }
  });
});
