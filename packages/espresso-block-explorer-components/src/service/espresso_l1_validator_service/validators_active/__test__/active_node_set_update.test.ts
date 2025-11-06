import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import {
  CappuccinoAPIBitVec,
  CappuccinoAPIBitVecHead,
  CappuccinoAPIBitVecOrder,
} from '@/service/hotshot_query_service';
import { describe, expect, it } from 'vitest';
import { ActiveNodeSetEntry } from '../../common/active_node_set_entry';
import { EpochAndBlock } from '../../common/epoch_and_block';
import { ParticipationChange } from '../../common/participation_change';
import { Ratio } from '../../common/ratio';
import { ActiveNodeSetDiffNewBlock } from '../active_node_set_diff/new_block';
import { NewEpoch } from '../active_node_set_diff/new_epoch';
import {
  ActiveNodeSetUpdate,
  activeNodeSetUpdateJSONCodec,
} from '../active_node_set_update';

describe('ActiveNodeSetUpdate', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1_000_000n);
      const epoch = block / 3000n;
      const example = new ActiveNodeSetUpdate(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new ActiveNodeSetDiffNewBlock(
            [new ParticipationChange(prng.fillBytes(32), new Ratio(1.5))],
            new CappuccinoAPIBitVec(
              CappuccinoAPIBitVecOrder.lsb0,
              new CappuccinoAPIBitVecHead(8, 0),
              16,
              Array.from(new Uint8Array(prng.fillBytes(2))),
            ),
          ),
          new NewEpoch([
            new ActiveNodeSetEntry(
              prng.fillBytes(32),
              new Ratio(0.9),
              new Ratio(0.8),
            ),
          ]),
        ],
      );

      expect(() => example.toJSON()).not.toThrow();
      expect(() => activeNodeSetUpdateJSONCodec.encode(example)).not.toThrow();

      const serialized = activeNodeSetUpdateJSONCodec.encode(example);
      expect(() =>
        activeNodeSetUpdateJSONCodec.decode(serialized),
      ).not.toThrow();

      const deserialized = activeNodeSetUpdateJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
