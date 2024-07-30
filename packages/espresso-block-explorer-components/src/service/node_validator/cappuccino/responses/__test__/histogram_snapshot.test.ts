import { describe, it } from 'vitest';
import { cappuccinoHistogramSnapshotCodec } from '../histogram_snapshot';
import { cappuccinoNodeValidatorResponseCodec } from '../node_validator_response_codec';

describe('HistogramSnapshot', () => {
  it('should decode from json', () => {
    const rawString =
      '{"HistogramSnapshot":{"block_time":[3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],"block_size":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"block_transactions":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"block_heights":[110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158]}}';

    const response = cappuccinoHistogramSnapshotCodec.decode(
      JSON.parse(rawString),
    );

    expect(response.histograms.blockHeights).toHaveLength(49);
    expect(response.histograms.blockSize).toHaveLength(
      response.histograms.blockHeights.length,
    );
    expect(response.histograms.blockTime).toHaveLength(
      response.histograms.blockHeights.length,
    );
    expect(response.histograms.blockTransactions).toHaveLength(
      response.histograms.blockHeights.length,
    );

    const { blockHeights, blockSize, blockTime, blockTransactions } =
      response.histograms;

    for (let i = 0; i < response.histograms.blockHeights.length; i++) {
      expect(blockHeights[i]).greaterThanOrEqual(0);
      expect(blockSize[i]).greaterThanOrEqual(0);
      expect(blockTime[i]).greaterThanOrEqual(0);
      expect(blockTransactions[i]).greaterThanOrEqual(0);
    }

    expect(response.toJSON()).toStrictEqual(
      cappuccinoHistogramSnapshotCodec.encode(response),
    );

    expect(
      cappuccinoNodeValidatorResponseCodec.decode(JSON.parse(rawString)),
    ).toStrictEqual(
      cappuccinoHistogramSnapshotCodec.decode(JSON.parse(rawString)),
    );

    expect(cappuccinoNodeValidatorResponseCodec.encode(response)).toStrictEqual(
      cappuccinoHistogramSnapshotCodec.encode(response),
    );
  });
});
