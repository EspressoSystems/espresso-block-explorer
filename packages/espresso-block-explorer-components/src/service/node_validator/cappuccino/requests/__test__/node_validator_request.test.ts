import { zipWithIterable } from '@/functional/functional';
import { describe, it } from 'vitest';
import {
  RequestBlocksSnapshot,
  RequestHistogramSnapshot,
  RequestNodeIdentitySnapshot,
  RequestVotersSnapshot,
  SubscribeLatestBlock,
  SubscribeNodeIdentity,
  SubscribeVoters,
} from '../node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from '../node_validator_request_codec';

describe('NodeValidatorRequest', () => {
  it('should JSON encode', () => {
    const requestValues = [
      'SubscribeNodeIdentity',
      'SubscribeLatestBlock',
      'SubscribeVoters',
      'RequestBlocksSnapshot',
      'RequestVotersSnapshot',
      'RequestHistogramSnapshot',
      'RequestNodeIdentitySnapshot',
    ];

    const requestConstructors = [
      SubscribeNodeIdentity,
      SubscribeLatestBlock,
      SubscribeVoters,
      RequestBlocksSnapshot,
      RequestVotersSnapshot,
      RequestHistogramSnapshot,
      RequestNodeIdentitySnapshot,
    ];

    for (const [string, constructor] of zipWithIterable(
      requestValues,
      requestConstructors,
      (a, b) => [a, b] as const,
    )) {
      expect(
        cappuccinoNodeValidatorRequestCodec.encode(new constructor()),
      ).toBe(string);

      expect(cappuccinoNodeValidatorRequestCodec.decode(string)).toBeInstanceOf(
        constructor,
      );

      expect(new constructor().valueOf()).toBe(string);
    }
  });
});
