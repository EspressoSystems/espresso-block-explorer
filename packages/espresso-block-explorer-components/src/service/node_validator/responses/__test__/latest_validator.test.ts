import { describe, it } from 'vitest';
import { cappuccinoLatestValidatorCodec } from '../latest_validator';
import { cappuccinoNodeValidatorResponseCodec } from '../node_validator_response_codec';

describe('ValidatorsSnapshot', () => {
  it('should decode from json', () => {
    const rawString =
      '{"LatestValidator":{"account":"0x09db0a93b389bef724429898f539aeb7ac2dd55f","stake_table_key":"BLS_VER_KEY~64_Y8QFPwAVvCZ5wTwt0i84X3Q1QP7klDfrfnmGf0Csf-MxquDLjT_R0ekVjRt3Vgi_q3psgOk2JMt7hG9kLEmn_KZ54T4wpV28JcxPcvdv33u5HiwYV2j3WOMfQUK0ACgrGMxyRtgjB2_N4MAaRhmbi8l1TnggtkX1w1GmKfhSc","state_ver_key":"SCHNORR_VER_KEY~SH_6UHYUqQYsJEHKxSSmKZxXYApnLKho21-0aUSi0xmDxqm7ooRNpI5xpFdHSQReY1n0g4w9SIKjJK4HG92NIKc","stake":"0x56bc75e2d63100000","commission":100,"delegators":{"0x09db0a93b389bef724429898f539aeb7ac2dd55f":"0x56bc75e2d63100000"}}}';

    const response = cappuccinoLatestValidatorCodec.decode(
      JSON.parse(rawString),
    );

    {
      // StakeTable Entry 0

      const validatorEntry0 = response.validator;

      expect(validatorEntry0.stakeTableKey.toString()).toBe(
        'BLS_VER_KEY~64_Y8QFPwAVvCZ5wTwt0i84X3Q1QP7klDfrfnmGf0Csf-MxquDLjT_R0ekVjRt3Vgi_q3psgOk2JMt7hG9kLEmn_KZ54T4wpV28JcxPcvdv33u5HiwYV2j3WOMfQUK0ACgrGMxyRtgjB2_N4MAaRhmbi8l1TnggtkX1w1GmKfhSc',
      );
      expect(validatorEntry0.stake).toBe(BigInt('0x56bc75e2d63100000'));
      expect(validatorEntry0.account.toString()).toBe(
        '0x09DB0a93B389bEF724429898f539AEB7ac2Dd55f',
      );
      expect(validatorEntry0.commission.valueOf()).toBe(0.01);
      expect(validatorEntry0.stateVerKey.toString()).toBe(
        'SCHNORR_VER_KEY~SH_6UHYUqQYsJEHKxSSmKZxXYApnLKho21-0aUSi0xmDxqm7ooRNpI5xpFdHSQReY1n0g4w9SIKjJK4HG92NIKc',
      );
      expect(validatorEntry0.delegators).toHaveLength(1);

      expect(
        validatorEntry0.delegators.get(
          '0x09db0a93b389bef724429898f539aeb7ac2dd55f',
        ),
      ).toBe(BigInt('0x56bc75e2d63100000'));
    }

    expect(response.toJSON()).toStrictEqual(
      cappuccinoLatestValidatorCodec.encode(response),
    );

    expect(
      cappuccinoNodeValidatorResponseCodec.decode(JSON.parse(rawString)),
    ).toStrictEqual(
      cappuccinoLatestValidatorCodec.decode(JSON.parse(rawString)),
    );

    expect(cappuccinoNodeValidatorResponseCodec.encode(response)).toStrictEqual(
      cappuccinoLatestValidatorCodec.encode(response),
    );
  });
});
