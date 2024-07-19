import { describe, it } from 'vitest';
import { cappuccinoLatestVotersCodec } from '../latest_voters';
import { cappuccinoNodeValidatorResponseCodec } from '../node_validator_response_codec';

describe('LatestVoters', () => {
  it('should decode from json', () => {
    const rawString =
      '{"LatestVoters":{"order":"bitvec::order::Lsb0","head":{"width":16,"index":0},"bits":7,"data":[23]}}';

    const response = cappuccinoLatestVotersCodec.decode(JSON.parse(rawString));

    expect(response.latestVoter).not.toBe(null);

    {
      // Latest Voters
      const latestVoters = response.latestVoter;

      expect(latestVoters.order).toBe('bitvec::order::Lsb0');
      expect(latestVoters.bits).toBe(7);
      expect(latestVoters.data).to.deep.equal([23]);
      expect(latestVoters.head.width).toBe(16);
      expect(latestVoters.head.index).toBe(0);
    }

    expect(response.toJSON()).toStrictEqual(
      cappuccinoLatestVotersCodec.encode(response),
    );

    expect(
      cappuccinoNodeValidatorResponseCodec.decode(JSON.parse(rawString)),
    ).toStrictEqual(cappuccinoLatestVotersCodec.decode(JSON.parse(rawString)));

    expect(cappuccinoNodeValidatorResponseCodec.encode(response)).toStrictEqual(
      cappuccinoLatestVotersCodec.encode(response),
    );
  });
});
