import { zipWithIterable } from '@/functional/functional';
import { describe, it } from 'vitest';
import { cappuccinoNodeValidatorRequestCodec } from '../node_validator_request_codec';
import { Close, Connect } from '../web_worker_life_cycle_request';

describe('NodeValidatorRequest', () => {
  it('should JSON encode', () => {
    const requestValues = ['Connect', 'Close'];

    const requestConstructors = [Connect, Close];

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
