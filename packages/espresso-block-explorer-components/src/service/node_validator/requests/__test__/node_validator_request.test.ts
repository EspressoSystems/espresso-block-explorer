import { zipWithIterable } from '@/functional/functional';
import { describe, it } from 'vitest';
import {
  RequestBlocksSnapshot,
  RequestHistogramSnapshot,
  RequestNodeIdentitySnapshot,
  RequestStakeTableSnapshot,
  RequestValidatorsSnapshot,
  RequestVotersSnapshot,
  SubscribeLatestBlock,
  SubscribeNodeIdentity,
  SubscribeStakeTables,
  SubscribeValidators,
  SubscribeVoters,
} from '../node_validator_request';
import { nodeValidatorRequestCodec } from '../node_validator_request_codec';

describe('NodeValidatorRequest', () => {
  it('should JSON encode', () => {
    const requestValues = [
      'SubscribeNodeIdentity',
      'SubscribeLatestBlock',
      'SubscribeVoters',
      'SubscribeValidators',
      'SubscribeStakeTables',
      'RequestBlocksSnapshot',
      'RequestVotersSnapshot',
      'RequestHistogramSnapshot',
      'RequestNodeIdentitySnapshot',
      'RequestValidatorsSnapshot',
      'RequestStakeTableSnapshot',
    ];

    const requestConstructors = [
      SubscribeNodeIdentity,
      SubscribeLatestBlock,
      SubscribeVoters,
      SubscribeValidators,
      SubscribeStakeTables,
      RequestBlocksSnapshot,
      RequestVotersSnapshot,
      RequestHistogramSnapshot,
      RequestNodeIdentitySnapshot,
      RequestValidatorsSnapshot,
      RequestStakeTableSnapshot,
    ];

    for (const [string, constructor] of zipWithIterable(
      requestValues,
      requestConstructors,
      (a, b) => [a, b] as const,
    )) {
      expect(nodeValidatorRequestCodec.encode(new constructor())).toBe(string);

      expect(nodeValidatorRequestCodec.decode(string)).toBeInstanceOf(
        constructor,
      );

      expect(new constructor().valueOf()).toBe(string);
    }
  });
});
