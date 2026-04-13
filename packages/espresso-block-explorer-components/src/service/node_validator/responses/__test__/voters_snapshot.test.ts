import { BitVecOrder } from '@/service/hotshot_query_service';
import { describe, it } from 'vitest';
import { nodeValidatorResponseCodec } from '../node_validator_response_codec';
import { votersSnapshotCodec } from '../voters_snapshot';

describe('VotersSnapshot', () => {
  it('should decode from json', () => {
    const rawString =
      '{"VotersSnapshot":[{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[27]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[27]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[30]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[30]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[29]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[27]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[15]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]},{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[27]}]}';

    const response = votersSnapshotCodec.decode(JSON.parse(rawString));

    expect(response.voters).toHaveLength(50);

    const voterIterator = response.voters[Symbol.iterator]();

    {
      // Voter 0

      const next = voterIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a voter');
      }

      const voter0 = next.value;

      expect(voter0.order).toBe(BitVecOrder.lsb0);
      expect(voter0.bits).toBe(7);
      expect(voter0.data).to.deep.equal([23n]);
      expect(voter0.head.width).toBe(16);
      expect(voter0.head.index).toBe(0);
    }

    for (let i = 1; i < 50; i++) {
      const next = voterIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a voter');
      }

      const voterI = next.value;
      expect(voterI.order).toBe(BitVecOrder.lsb0);
      expect(voterI.head.width).toBe(16);
      expect(voterI.head.index).toBe(0);
    }

    expect(voterIterator.next().done).toBe(true);
    expect(response.toJSON()).toStrictEqual(
      votersSnapshotCodec.encode(response),
    );

    expect(
      nodeValidatorResponseCodec.decode(JSON.parse(rawString)),
    ).toStrictEqual(votersSnapshotCodec.decode(JSON.parse(rawString)));

    expect(nodeValidatorResponseCodec.encode(response)).toStrictEqual(
      votersSnapshotCodec.encode(response),
    );
  });
});
