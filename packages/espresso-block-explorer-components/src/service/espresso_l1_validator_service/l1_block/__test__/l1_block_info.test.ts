import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { describe, expect, it } from 'vitest';
import { L1BlockInfo, l1BlockInfoJSONCodec } from '../l1_block_info';

describe('L1BlockInfo', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(0);
      const example = new L1BlockInfo(
        prng.nextRangeBigInt(0n, 1_000_000n),
        prng.fillBytes(32),
        new Date(),
      );

      expect(() => example.toJSON()).not.toThrow();

      const serialized = l1BlockInfoJSONCodec.encode(example);
      expect(() => l1BlockInfoJSONCodec.decode(serialized)).not.toThrow();

      const deserialized = l1BlockInfoJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
