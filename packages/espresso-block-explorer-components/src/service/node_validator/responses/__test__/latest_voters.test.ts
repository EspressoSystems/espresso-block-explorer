import { BitVecOrder } from '@/service/hotshot_query_service';
import { describe, it } from 'vitest';
import { latestVotersCodec } from '../latest_voters';
import { nodeValidatorResponseCodec } from '../node_validator_response_codec';

describe('LatestVoters', () => {
  it('should decode from json', () => {
    const rawString =
      '{"LatestVoters":{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]}}';

    const response = latestVotersCodec.decode(JSON.parse(rawString));

    expect(response.latestVoter).not.toBe(null);

    {
      // Latest Voters
      const latestVoters = response.latestVoter;

      expect(latestVoters.order).toBe(BitVecOrder.lsb0);
      expect(latestVoters.bits).toBe(7);
      expect(latestVoters.data).to.deep.equal([23n]);
      expect(latestVoters.head.width).toBe(16);
      expect(latestVoters.head.index).toBe(0);
    }

    expect(response.toJSON()).toStrictEqual(latestVotersCodec.encode(response));

    expect(
      nodeValidatorResponseCodec.decode(JSON.parse(rawString)),
    ).toStrictEqual(latestVotersCodec.decode(JSON.parse(rawString)));

    expect(nodeValidatorResponseCodec.encode(response)).toStrictEqual(
      latestVotersCodec.encode(response),
    );
  });
});
