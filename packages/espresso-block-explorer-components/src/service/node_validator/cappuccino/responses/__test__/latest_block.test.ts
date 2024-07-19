import { describe, it } from 'vitest';
import { cappuccinoLatestBlockCodec } from '../latest_block';
import { cappuccinoNodeValidatorResponseCodec } from '../node_validator_response_codec';

describe('LatestBlock', () => {
  it('should decode from json', () => {
    const rawString =
      '{"LatestBlock":{"hash":"BLOCK~rc2AHAh91OzWAYgeUeCV3Pw41vsVvUpbfyn0TJKdgFYt","height":159,"time":"2024-07-16T20:30:45Z","num_transactions":0,"proposer_id":"0xb0cfa4e5893107e2995974ef032957752bb526e9","fee_recipient":"0xb0cfa4e5893107e2995974ef032957752bb526e9","size":0,"block_reward":["ETH 0"]}}';

    const response = cappuccinoLatestBlockCodec.decode(JSON.parse(rawString));

    expect(response.latestBlock).not.toBe(null);

    {
      // Latest Block
      const latestBlock = response.latestBlock;

      expect(latestBlock.height).toBe(159);
      expect(latestBlock.time.toISOString()).toBe('2024-07-16T20:30:45.000Z');
      expect(latestBlock.numTransactions).toBe(0);
      expect(latestBlock.proposerID).not.toBe(null);
      expect(latestBlock.size).not.toBe(null);
    }

    expect(response.toJSON()).toStrictEqual(
      cappuccinoLatestBlockCodec.encode(response),
    );

    expect(
      cappuccinoNodeValidatorResponseCodec.decode(JSON.parse(rawString)),
    ).toStrictEqual(cappuccinoLatestBlockCodec.decode(JSON.parse(rawString)));

    expect(cappuccinoNodeValidatorResponseCodec.encode(response)).toStrictEqual(
      cappuccinoLatestBlockCodec.encode(response),
    );
  });
});
